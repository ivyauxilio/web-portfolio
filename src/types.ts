export type ProjectCategory =
  | "landing"
  | "web-app"
  | "mobile"
  | "blog"
  | "other";

export interface Project {
  id: string;
  title: string;
  summary: string;
  role: string;
  year: number;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  screenshots?: string[]; // path under /public, e.g. "/screenshots/clinic-booking.png"
  category: ProjectCategory;
}

export interface SkillGroup {
  label: string;
  items: string[];
}
export type DesignCategory = "ads" | "social" | "youtube";

export interface DesignFolder {
  id: DesignCategory;
  label: string;
  description: string;
  driveUrl: string; // the Google Drive folder share link
}
