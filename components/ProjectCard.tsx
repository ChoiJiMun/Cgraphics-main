
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div className={`group relative flex flex-col gap-4 ${index % 2 !== 0 ? 'md:mt-24' : ''}`}>
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 cursor-pointer">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="bg-white rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <ArrowUpRight size={24} className="text-black" />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold">{project.year} — {project.category}</span>
        </div>
        <h3 className="text-3xl font-medium tracking-tight group-hover:italic transition-all duration-300 cursor-pointer">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm max-w-md leading-relaxed">
          {project.description}
        </p>
        <div className="flex gap-2 mt-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-[10px] uppercase tracking-wider text-gray-600 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
