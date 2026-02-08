export const PROJECTS = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    description: 'Next.js와 TypeScript로 제작한 관리자 대시보드. 복잡한 데이터 시각화와 실시간 주문 관리를 지원합니다.',
    thumbnail: 'https://images.unsplash.com/photo-1621361753831-e972c09ceec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwY29kaW5nJTIwbGFwdG9wfGVufDF8fHx8MTc3MDA5NDUwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Recharts'],
    category: 'Web App',
    link: '#'
  },
  {
    id: '2',
    title: 'Finance Mobile App Design',
    description: '사용자 친화적인 금융 자산 관리 앱의 UI/UX 디자인 및 프로토타입.',
    thumbnail: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NzAwMDY3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Figma', 'UI/UX', 'Mobile'],
    category: 'Design',
    link: '#'
  },
  {
    id: '3',
    title: 'Architecture Portfolio',
    description: '건축가의 작품을 돋보이게 하는 미니멀한 갤러리 웹사이트.',
    thumbnail: 'https://images.unsplash.com/photo-1697981027675-3770d1b8ee6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHNoYXBlcyUyMG1pbmltYWx8ZW58MXx8fHwxNzcwMDk0NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Framer Motion', 'Styled Components'],
    category: 'Web Site',
    link: '#'
  },
  {
    id: '4',
    title: 'Travel Log App',
    description: '지도 기반의 여행 기록 애플리케이션 프론트엔드 개발.',
    thumbnail: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    tags: ['React Native', 'Google Maps API', 'Redux'],
    category: 'Mobile App',
    link: '#'
  },
  {
    id: '5',
    title: 'Corporate Landing Page',
    description: '스타트업의 기업 소개를 위한 반응형 랜딩 페이지.',
    thumbnail: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    tags: ['HTML/SCSS', 'Javascript', 'GSAP'],
    category: 'Web Site',
    link: '#'
  }
];

export const POSTS = [
  {
    id: '1',
    title: '프론트엔드 성능 최적화 가이드',
    excerpt: 'LCP, CLS 등 Core Web Vitals를 개선하여 사용자 경험을 높이는 실전 팁을 공유합니다.',
    date: '2023. 10. 15',
    tags: ['Performance', 'Web Vitals'],
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    category: 'Tech'
  },
  {
    id: '2',
    title: 'Tailwind CSS v4가 기대되는 이유',
    excerpt: '새로운 엔진으로 더 빨라진 빌드 속도와 간소화된 설정 파일에 대해 알아봅니다.',
    date: '2023. 09. 22',
    tags: ['CSS', 'Tailwind'],
    thumbnail: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    category: 'Tech'
  },
  {
    id: '3',
    title: '디자이너와 개발자의 협업 노하우',
    excerpt: 'Figma를 활용하여 디자인 시스템을 구축하고 핸드오프 과정을 효율화하는 방법.',
    date: '2023. 08. 10',
    tags: ['Collaboration', 'Figma'],
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    category: 'Culture'
  }
];

export const SKILLS = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Redux', 'Zustand', 'React Query'] },
  { category: 'Styling', items: ['Tailwind CSS', 'Styled Components', 'Sass/SCSS', 'Framer Motion'] },
  { category: 'Backend & Tools', items: ['Node.js', 'Firebase', 'Supabase', 'Git', 'Webpack/Vite'] },
  { category: 'Design', items: ['Figma', 'Adobe XD', 'Photoshop', 'Prototyping'] }
];

export const EXPERIENCE = [
  {
    id: '1',
    role: 'Frontend Developer',
    company: 'Tech Startup A',
    period: '2022.03 - Present',
    description: [
      '자사 SaaS 제품의 대시보드 UI 전면 개편 주도 (React, TypeScript)',
      '레거시 코드 리팩토링으로 초기 로딩 속도 40% 개선',
      '디자인 시스템 구축 및 공통 컴포넌트 라이브러리 배포'
    ]
  },
  {
    id: '2',
    role: 'Web Publisher',
    company: 'Web Agency B',
    period: '2020.01 - 2022.02',
    description: [
      '다양한 클라이언트의 기업 웹사이트 및 프로모션 페이지 퍼블리싱',
      '웹 접근성(A11y) 준수 마크업 및 크로스 브라우징 이슈 해결',
      'jQuery 기반의 인터랙티브 UI 구현'
    ]
  }
];
