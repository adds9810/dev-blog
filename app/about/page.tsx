"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || !pageRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".hero .kicker, .hero .h1, .hero .lead, .hero .row, .hero .statRow", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });

      gsap.utils.toArray<HTMLElement>(".float-card").forEach((el, index) => {
        gsap.to(el, {
          y: -8,
          duration: 2.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.2
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="stack" ref={pageRef}>
      <section className="hero">
        <p className="kicker">Portfolio</p>
        <h1 className="h1">김지혜 · Web Publisher</h1>
        <p className="lead">
          사용성, 접근성, 유지보수를 기준으로 일관된 UI를 설계하고 구현합니다.
        </p>
        <div className="row">
          <a className="button primary" href="#contact">
            연락하기
          </a>
          <a className="button" href="/posts">
            블로그 보러가기
          </a>
          <a className="button" href="#skills">
            기술 스택
          </a>
        </div>
        <div className="statRow">
          <span className="stat">📍 서울, 대한민국</span>
          <span className="stat">📅 웹 퍼블리셔 경력 7+년</span>
        </div>
      </section>

      <section className="section reveal" id="about">
        <header className="sectionHeader reveal">
          <h2 className="h2">About</h2>
          <p className="muted">
            기획 의도를 이해하고 사용자가 편하게 느끼는 화면을 만드는 데
            집중합니다.
          </p>
        </header>
        <div className="grid">
          <article className="card featureCard reveal">
            <h3 className="h3">🧩 사용자 중심 UI</h3>
            <p className="muted">
              작은 디테일까지 고민해 직관적이고 편안한 경험을 제공합니다.
            </p>
          </article>
          <article className="card featureCard reveal">
            <h3 className="h3">♿ 웹 접근성</h3>
            <p className="muted">
              WCAG 가이드라인을 반영해 접근 가능한 UI를 구현합니다.
            </p>
          </article>
          <article className="card featureCard reveal">
            <h3 className="h3">⚙️ 프론트엔드 협업</h3>
            <p className="muted">
              컴포넌트 구조와 네이밍을 정리해 유지보수성을 높입니다.
            </p>
          </article>
          <article className="card featureCard reveal">
            <h3 className="h3">🤝 유지보수</h3>
            <p className="muted">
              유지보수 관점에서 구조와 스타일 시스템을 지속적으로 개선합니다.
            </p>
          </article>
        </div>
      </section>

      <section className="section reveal" id="skills">
        <header className="sectionHeader reveal">
          <h2 className="h2">Skills</h2>
          <p className="muted">UI 구현과 유지보수에 강한 스택을 사용합니다.</p>
        </header>
        <div className="grid">
          <article className="card reveal">
            <h3 className="h3">마크업 · 스타일</h3>
            <div className="chipRow">
              <span className="chip">HTML5</span>
              <span className="chip">CSS3</span>
              <span className="chip">SCSS</span>
            </div>
            <p className="muted">
              시멘틱 마크업과 반응형 레이아웃에 익숙합니다.
            </p>
          </article>
          <article className="card reveal">
            <h3 className="h3">프레임워크</h3>
            <div className="chipRow">
              <span className="chip">React</span>
              <span className="chip">Next.js</span>
              <span className="chip">Vue.js</span>
            </div>
            <p className="muted">라우팅, SEO 대응, 상태 관리 경험이 있습니다.</p>
          </article>
          <article className="card reveal">
            <h3 className="h3">협업 도구</h3>
            <div className="chipRow">
              <span className="chip">Git · GitHub</span>
              <span className="chip">Figma</span>
              <span className="chip">Jira</span>
            </div>
            <p className="muted">디자인 시스템 기반 컴포넌트 제작 경험이 있습니다.</p>
          </article>
          <article className="card reveal">
            <h3 className="h3">인터랙션</h3>
            <div className="chipRow">
              <span className="chip">GSAP</span>
              <span className="chip">Swiper</span>
              <span className="chip">Framer Motion</span>
            </div>
            <p className="muted">부드러운 모션과 스크롤 인터랙션 구현이 가능합니다.</p>
          </article>
        </div>
      </section>

      <section className="section reveal" id="portfolio">
        <header className="sectionHeader reveal">
          <h2 className="h2">Portfolio</h2>
          <p className="muted">최근 작업한 프로젝트들을 소개합니다.</p>
        </header>
        <div className="grid">
          <article className="card portfolioCard float-card reveal">
            <h3 className="h3">기업 웹사이트 리뉴얼</h3>
            <p className="muted">반응형 UI · 메인/서브 퍼블리싱</p>
          </article>
          <article className="card portfolioCard float-card reveal">
            <h3 className="h3">커머스 프로모션</h3>
            <p className="muted">프로모션/이벤트 페이지 제작</p>
          </article>
          <article className="card portfolioCard float-card reveal">
            <h3 className="h3">브랜드 랜딩 페이지</h3>
            <p className="muted">캠페인 랜딩 · 인터랙션 구현</p>
          </article>
        </div>
      </section>

      <section className="section reveal" id="experience">
        <header className="sectionHeader reveal">
          <h2 className="h2">Experience</h2>
          <p className="muted">협업과 유지보수를 바탕으로 다양한 사이트를 경험했습니다.</p>
        </header>
        <div className="timeline">
          <article className="timelineItem reveal">
            <div className="timelineHeader">
              <h3 className="h3">UXT 선임</h3>
              <span className="muted">2023.03 - 2024.08</span>
            </div>
            <p className="muted">
              반응형 기업 웹사이트 퍼블리싱 및 Vue.js 기반 유지보수/개선 작업.
            </p>
          </article>
          <article className="timelineItem reveal">
            <div className="timelineHeader">
              <h3 className="h3">Tech본부 매니저 · 애드쿠아 인터랙티브</h3>
              <span className="muted">2019.12 - 2023.02</span>
            </div>
            <p className="muted">
              이벤트/프로모션/커머스 사이트 퍼블리싱 및 대형 쇼핑몰 구조 설계.
            </p>
          </article>
          <article className="timelineItem reveal">
            <div className="timelineHeader">
              <h3 className="h3">디자인팀 사원 · 유월커뮤니케이션</h3>
              <span className="muted">2018.01 - 2019.08</span>
            </div>
            <p className="muted">
              기업/쇼핑몰 웹사이트 반응형 퍼블리싱 및 그누보드 커스터마이징.
            </p>
          </article>
        </div>
      </section>

      <section className="section reveal" id="contact">
        <header className="sectionHeader reveal">
          <h2 className="h2">Contact</h2>
          <p className="muted">프로젝트 문의나 협업 제안이 있으시면 언제든 연락주세요.</p>
        </header>
        <div className="card contactCard reveal">
          <div className="contactItem">
            <span className="muted">이메일</span>
            <a className="contactLink" href="mailto:toto7971@naver.com">
              toto7971@naver.com
            </a>
          </div>
          <div className="contactItem">
            <span className="muted">전화</span>
            <a className="contactLink" href="tel:+8210674449820">
              +82 10-6744-9820
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


