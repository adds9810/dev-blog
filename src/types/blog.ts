import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type Post = {
  id: string;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  date: string;
};

export type Block = BlockObjectResponse;
