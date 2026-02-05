export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  gallery?: string[];
  link: string;
  github: string;
  featured: boolean;
  content?: string; 
  // Detailed fields
  overview?: string;
  role?: string;
  period?: string;
  techStack?: { name: string; reason: string }[];
  challenges?: { title: string; description: string }[];
  stateManagement?: {
    uiStore: string[];
    serverState: string[];
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string; // Markdown content
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}
