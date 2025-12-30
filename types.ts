
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  year: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface Skill {
  name: string;
  level: number;
}
