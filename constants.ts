
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nova Banking System',
    category: 'Fintech / Web App',
    description: 'A revolutionary digital banking experience focused on accessibility and minimal friction for next-generation users.',
    imageUrl: 'https://picsum.photos/seed/nova/1200/800',
    tags: ['UI Design', 'Case Study', 'Prototyping'],
    year: '2024'
  },
  {
    id: '2',
    title: 'EcoEats Platform',
    category: 'Sustainability / Mobile',
    description: 'An AI-powered marketplace connecting local sustainable food producers with conscious consumers.',
    imageUrl: 'https://picsum.photos/seed/eco/1200/800',
    tags: ['UX Research', 'Design System', 'Mobile App'],
    year: '2023'
  },
  {
    id: '3',
    title: 'Luxe Interior',
    category: 'E-commerce / Web',
    description: 'High-end interior design catalog featuring immersive 3D previews and editorial-style storytelling.',
    imageUrl: 'https://picsum.photos/seed/luxe/1200/800',
    tags: ['Visual Design', 'E-commerce', 'Strategy'],
    year: '2024'
  },
  {
    id: '4',
    title: 'Morphic Brand Identity',
    category: 'Branding / Identity',
    description: 'Comprehensive brand overhaul for a high-tech modular robotics company including logo and digital guidelines.',
    imageUrl: 'https://picsum.photos/seed/brand/1200/800',
    tags: ['Identity', 'Logo Design', 'Guidelines'],
    year: '2023'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Product Strategy', level: 90 },
  { name: 'Interface Design', level: 95 },
  { name: 'User Experience', level: 92 },
  { name: 'Visual Identity', level: 88 },
  { name: 'Motion Design', level: 85 }
];
