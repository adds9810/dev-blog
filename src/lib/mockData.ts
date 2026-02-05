import { Project, BlogPost, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'ecommerce-dashboard',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive dashboard for managing products, orders, and analytics with real-time data visualization.',
    tags: ['React', 'TypeScript', 'TanStack Query', 'Recharts'],
    imageUrl: 'https://images.unsplash.com/photo-1617783919255-b36e439deeda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsJTIwc29mdHdhcmUlMjBpbnRlcmZhY2UlMjBkYXJrJTIwbW9kZXxlbnwxfHx8fDE3NzAxNjcxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800'
    ],
    link: 'https://example.com',
    github: 'https://github.com',
    featured: true,
    role: 'Lead Frontend Engineer',
    period: '2023.01 - 2023.06',
    overview: 'This dashboard was built to solve the problem of fragmented e-commerce data. It aggregates sales, inventory, and customer metrics into a single view, allowing store owners to make data-driven decisions in real-time.',
    techStack: [
      { name: 'React', reason: 'Component-based architecture for reusable UI elements.' },
      { name: 'TanStack Query', reason: 'Efficient server state management with built-in caching and invalidation.' },
      { name: 'Zustand', reason: 'Lightweight global state for sidebar, theme, and modal management.' },
      { name: 'Recharts', reason: 'Flexible and composable charting library for React.' }
    ],
    challenges: [
        { title: 'Real-time Updates', description: 'Implemented WebSocket connections to push order updates instantly without manual refresh.' },
        { title: 'Large Dataset Handling', description: 'Optimized rendering of 10k+ rows using virtualization and pagination.' }
    ],
    stateManagement: {
        uiStore: ['Sidebar Toggle', 'Theme Mode', 'Modal Visibility'],
        serverState: ['Product List Cache', 'Sales Data Polling', 'Order Status Updates']
    }
  },
  {
    id: '2',
    slug: 'task-management-app',
    title: 'Task Management App',
    description: 'A collaborative task management tool featuring drag-and-drop boards and team assignments.',
    tags: ['Next.js', 'Tailwind CSS', 'Zustand', 'Dnd Kit'],
    imageUrl: 'https://images.unsplash.com/photo-1669850850090-54237ab4a4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjB1aSUyMHV4fGVufDF8fHx8MTc3MDE2NzE5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gallery: [
         'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
         'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800'
    ],
    link: 'https://example.com',
    github: 'https://github.com',
    featured: true,
    role: 'Frontend Developer',
    period: '2022.08 - 2022.12',
    overview: 'A productivity tool designed for remote teams. The main goal was to replicate the fluid experience of desktop applications in the browser using modern web technologies.',
    techStack: [
        { name: 'Next.js', reason: 'Server-side rendering for better initial load performance and SEO.' },
        { name: 'Zustand', reason: 'Handling complex optimistic UI updates when moving tasks between columns.' },
        { name: 'Tailwind CSS', reason: 'Rapid styling with utility classes.' }
    ],
    challenges: [
        { title: 'Drag and Drop Performance', description: 'Ensured 60fps animations during drag operations even with many items.' },
        { title: 'Optimistic UI', description: 'Immediate feedback on UI before server confirmation to reduce perceived latency.' }
    ],
    stateManagement: {
        uiStore: ['Drag Item State', 'Column Collapse State'],
        serverState: ['Board Data', 'User Permissions']
    }
  },
  {
    id: '3',
    slug: 'dev-portfolio-generator',
    title: 'Dev Portfolio Generator',
    description: 'A CLI tool that generates a personal portfolio website based on a JSON config file.',
    tags: ['Node.js', 'CLI', 'React', 'Ink'],
    imageUrl: 'https://images.unsplash.com/photo-1633198362880-4864a5d6fa30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3MDE2NzE5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://example.com',
    github: 'https://github.com',
    featured: true,
    role: 'Solo Creator',
    period: '2022.05',
    overview: 'Built to help developers quickly spin up a professional-looking portfolio without spending days on design and CSS.',
    techStack: [
        { name: 'Ink', reason: 'To render React components to the CLI output.' },
        { name: 'Node.js', reason: 'Runtime environment.' }
    ],
    challenges: [
        { title: 'Template System', description: 'Creating a flexible template system that covers diverse use cases.' }
    ],
    stateManagement: {
        uiStore: ['CLI Interactive State'],
        serverState: []
    }
  },
  {
    id: '4',
    slug: 'abstract-art-generator',
    title: 'Abstract Art Generator',
    description: 'Generative art platform using WebGL and algorithms.',
    tags: ['WebGL', 'Three.js', 'React'],
    imageUrl: 'https://images.unsplash.com/photo-1688413709025-5f085266935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MDA3NjU1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://example.com',
    github: 'https://github.com',
    featured: false,
    role: 'Creative Coder',
    period: '2021',
    overview: 'An experimental project exploring mathematical algorithms to generate unique visual patterns.',
    techStack: [
        { name: 'Three.js', reason: 'WebGL abstraction.' },
        { name: 'React', reason: 'UI controls for parameters.' }
    ],
    stateManagement: {
        uiStore: ['Parameter Controls'],
        serverState: ['Gallery Storage']
    }
  }
];

export const POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'react-server-components-guide',
    title: 'Understanding React Server Components',
    excerpt: 'A deep dive into how RSCs change the way we build Next.js applications.',
    date: '2023-10-24',
    readTime: '5 min read',
    tags: ['React', 'Next.js'],
    content: `
React Server Components (RSC) allow you to write UI that can be rendered and optionally cached on the server.

## What are Server Components?

Traditionally, React components (Client Components) are rendered on the client. **Server Components**, however, are rendered on the server and sent to the client as a serialized payload.

### Key Benefits

1.  **Zero Bundle Size**: Dependencies used in RSCs are not sent to the client.
2.  **Direct Backend Access**: Query databases directly in your components.
3.  **Automatic Code Splitting**: Server components can import client components dynamically.

## Code Example

\`\`\`tsx
// app/page.tsx
import db from './db';

async function getData() {
  const res = await db.query('SELECT * FROM posts');
  return res.rows;
}

export default async function Page() {
  const data = await getData();
  
  return (
    <main>
      <h1>Server Component</h1>
      <ul>
        {data.map(item => <li key={item.id}>{item.title}</li>)}
      </ul>
    </main>
  );
}
\`\`\`

> **Note**: You cannot use hooks like \`useState\` or \`useEffect\` in Server Components.

## When to use Client Components?

Use Client Components when you need:
- Interactivity and event listeners (\`onClick\`, \`onChange\`)
- State and Lifecycle Effects (\`useState\`, \`useEffect\`)
- Browser-only APIs

`
  },
  {
    id: '2',
    slug: 'zustand-vs-redux',
    title: 'Why I chose Zustand over Redux',
    excerpt: 'Comparing boilerplate, bundle size, and developer experience.',
    date: '2023-11-02',
    readTime: '4 min read',
    tags: ['State Management', 'React'],
    content: `
Zustand has gained massive popularity recently. Here is why I prefer it over Redux for most projects.

## Minimal Boilerplate

Redux often requires:
- Actions
- Reducers
- Selectors
- Middleware setup

Zustand requires:
- A single hook

\`\`\`tsx
import { create } from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
\`\`\`

## No Provider Hell

Zustand doesn't require wrapping your app in a Provider context, making it easier to use outside of the React component tree if needed.
`
  },
  {
    id: '3',
    slug: 'tanstack-query-patterns',
    title: 'Advanced Patterns in TanStack Query',
    excerpt: 'Optimistic updates, dependent queries, and infinite scrolling.',
    date: '2023-11-15',
    readTime: '7 min read',
    tags: ['React Query', 'Frontend'],
    content: `
TanStack Query is more than just data fetching; it's a state manager for your asynchronous data.

## Optimistic Updates

Optimistic updates make your app feel faster by updating the UI *before* the server operation completes.

1.  Cancel outgoing refetches
2.  Snapshot the previous value
3.  Optimistically update the cache
4.  Rollback on error

## Dependent Queries

Sometimes you need to fetch data B only after data A has arrived.

\`\`\`tsx
const { data: user } = useQuery({ queryKey: ['user', email], queryFn: getUserByEmail })
const { data: projects } = useQuery({
  queryKey: ['projects', user?.id],
  queryFn: getProjectsByUser,
  enabled: !!user?.id, // Only run this query if user.id exists
})
\`\`\`
`
  }
];

export const SKILLS: Skill[] = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'State Management', items: ['Zustand', 'TanStack Query', 'Redux Toolkit'] },
  { category: 'Backend & Tools', items: ['Node.js', 'Supabase', 'Git', 'Figma', 'Vercel'] }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Senior Frontend Developer',
    company: 'Tech Corp',
    period: '2022 - Present',
    description: [
      'Led the migration of a legacy app to Next.js App Router.',
      'Implemented a design system using Tailwind CSS and Storybook.',
      'Improved Core Web Vitals, reducing LCP by 40%.'
    ]
  },
  {
    id: '2',
    role: 'Frontend Developer',
    company: 'Startup Inc',
    period: '2020 - 2022',
    description: [
      'Developed key features for a SaaS product using React and Redux.',
      'Collaborated with designers to implement responsive UI/UX.',
      'Mentored junior developers.'
    ]
  }
];
