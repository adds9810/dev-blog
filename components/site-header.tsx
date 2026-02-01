import Link from "next/link";
import { Container } from "./container";
import { NavLink } from "./nav-link";

export function SiteHeader() {
  return (
    <header className="header">
      <Container>
        <div className="headerInner">
          <Link className="brand" href="/">
            <span className="brandMark" aria-hidden="true">
              {/* 단순 마크(임시) */}
              {"</>"}
            </span>
            <span className="brandText">Jihye</span>
          </Link>

          <nav className="nav" aria-label="주요 메뉴">
            <NavLink href="/about" label="Portfolio" />
            <NavLink href="/posts" label="Blog" />
          </nav>
        </div>
      </Container>
    </header>
  );
}


