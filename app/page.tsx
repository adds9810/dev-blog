export default function HomePage() {
  return (
    <div className="stack">
      <section className="hero">
        <p className="kicker">Portfolio & Blog</p>
        <h1 className="h1">김지혜 · 웹 퍼블리셔 포트폴리오</h1>
        <p className="lead">
          포트폴리오와 블로그만 깔끔하게 보여주는 구성으로 다시 시작합니다.
        </p>
        <div className="row">
          <a className="button primary" href="/about">
            포트폴리오
          </a>
          <a className="button" href="/posts">
            블로그
          </a>
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <h2 className="h2">Portfolio</h2>
          <p className="muted">
            소개, 주요 프로젝트, 경력, 연락처까지 한 페이지에 정리했습니다.
          </p>
          <a className="button" href="/about">
            포트폴리오 보러가기
          </a>
        </article>
        <article className="card">
          <h2 className="h2">Blog</h2>
          <p className="muted">
            작업 기록과 배운 내용을 빠르게 정리해두는 공간입니다.
          </p>
          <a className="button" href="/posts">
            블로그 보러가기
          </a>
        </article>
      </section>
    </div>
  );
}


