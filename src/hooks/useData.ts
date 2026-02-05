import { useQuery } from '@tanstack/react-query';
import { PROJECTS, POSTS, EXPERIENCES, SKILLS } from '../lib/mockData';
import { Project, BlogPost } from '../lib/types';

const SIMULATED_DELAY = 600;

// Mock API Call
const fetchProjects = async (): Promise<Project[]> => {
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY));
  return PROJECTS;
};

const fetchProjectBySlug = async (slug: string): Promise<Project | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY));
  return PROJECTS.find(p => p.slug === slug);
};

const fetchPosts = async (): Promise<BlogPost[]> => {
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY));
  return POSTS;
};

const fetchPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY));
  return POSTS.find(p => p.slug === slug);
};

// Hooks
export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useProject = (slug: string) => {
    return useQuery({
        queryKey: ['project', slug],
        queryFn: () => fetchProjectBySlug(slug),
        enabled: !!slug,
        staleTime: 1000 * 60 * 5,
    });
};

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,
  });
};

export const usePost = (slug: string) => {
    return useQuery({
        queryKey: ['post', slug],
        queryFn: () => fetchPostBySlug(slug),
        enabled: !!slug,
        staleTime: 1000 * 60 * 5,
    });
};

// Since these are static in mockData, we don't strictly need async queries for skills/experience, 
// but we'll export them for consistency or direct usage.
export const useExperience = () => EXPERIENCES;
export const useSkills = () => SKILLS;
