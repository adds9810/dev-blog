export type GuideProgressStatus = "done" | "in_progress" | "planned";

export type GuideProgressItem = {
  id: string;
  title: string;
  detail?: string;
  status: GuideProgressStatus;
};

export type GuideProgressPhase = {
  id: string;
  title: string;
  summary?: string;
  items: GuideProgressItem[];
};

export type GuideTechStackRow = {
  category: string;
  value: string;
};

export type GuideComponentTopic = {
  id: string;
  title: string;
  path: string;
  summary: string;
  bullets: string[];
};
