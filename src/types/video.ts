export interface VideoLink {
  id: string;
  title: string;
  url: string;
  description?: string;
  subject?: string;
  chapter?: string;
  tags?: string[];
  favorite: boolean;
  createdAt: number;
}
