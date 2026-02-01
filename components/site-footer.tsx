import { Container } from "./container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footerInner">
          <p className="muted">© {year} Jihye Portfolio</p>
          <p className="muted">Portfolio · Blog</p>
        </div>
      </Container>
    </footer>
  );
}


