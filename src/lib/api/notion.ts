import { Client, isFullBlock, isFullPage } from "@notionhq/client";
import type { BlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Post, Block } from "@/types/blog";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const DATABASE_ID = process.env.NOTION_DATABASE_ID ?? "";

function extractPost(page: PageObjectResponse): Post | null {
  const props = page.properties;

  const titleProp = props["name"];
  const slugProp = props["slug"];
  const descriptionProp = props["description"];
  const tagsProp = props["tags"];
  const dateProp = props["date"];

  if (
    titleProp?.type !== "title" ||
    slugProp?.type !== "rich_text" ||
    descriptionProp?.type !== "rich_text" ||
    tagsProp?.type !== "multi_select" ||
    dateProp?.type !== "date"
  ) {
    return null;
  }

  return {
    id: page.id,
    title: titleProp.title[0]?.plain_text ?? "",
    slug: slugProp.rich_text[0]?.plain_text ?? "",
    description: descriptionProp.rich_text[0]?.plain_text ?? "",
    tags: tagsProp.multi_select.map((t) => t.name),
    date: dateProp.date?.start ?? "",
  };
}

export async function getPostList(): Promise<Post[]> {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: "published",
      checkbox: { equals: true },
    },
    sorts: [{ property: "date", direction: "descending" }],
  });

  return response.results.flatMap((result) => {
    if (!isFullPage(result)) return [];
    const post = extractPost(result);
    return post ? [post] : [];
  });
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      and: [
        { property: "published", checkbox: { equals: true } },
        { property: "slug", rich_text: { equals: slug } },
      ],
    },
  });

  const first = response.results[0];
  if (!first || !isFullPage(first)) return null;

  return extractPost(first);
}

export async function getPostBlocks(pageId: string): Promise<Block[]> {
  const blocks: Block[] = [];
  let cursor: string | undefined;

  do {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
      page_size: 100,
    });

    for (const block of response.results) {
      if (isFullBlock(block)) {
        blocks.push(block as BlockObjectResponse);
      }
    }

    cursor = response.has_more ? (response.next_cursor ?? undefined) : undefined;
  } while (cursor);

  return blocks;
}
