export const metadata = {
  title: "Blog"
};

export default function PostsPage() {
  return (
    <div className="stack">
      <header className="pageHeader">
        <h1 className="h1">Blog</h1>
        <p className="muted">작업 기록과 배운 내용을 정리하는 공간입니다.</p>
      </header>

      <div className="card">
        <p className="muted">
          이제부터 글 목록을 채워갈 예정입니다. MDX/마크다운 기반으로
          간단히 시작하고 필요하면 확장할게요.
        </p>
        <div className="row">
          <a className="button primary" href="/about">
            포트폴리오 보기
          </a>
          <a className="button" href="/">
            홈으로
          </a>
        </div>
      </div>
    </div>
  );
}


