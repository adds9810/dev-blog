/**
 * 데모용 공개 API. 자체 백엔드로 바꿀 때는 이 파일의 URL·타입만
 * 프로젝트 API에 맞게 교체하면 됩니다.
 */
const BASE = "https://jsonplaceholder.typicode.com";

export type JsonPlaceholderPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function fetchJsonPlaceholderPost(
  id: number,
): Promise<JsonPlaceholderPost> {
  const res = await fetch(`${BASE}/posts/${id}`);
  if (!res.ok) {
    throw new Error(`게시글을 불러오지 못했습니다. (${res.status})`);
  }
  return res.json() as Promise<JsonPlaceholderPost>;
}
