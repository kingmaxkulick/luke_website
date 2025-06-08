import React from 'react';


export interface Project {
  id: string;
  thumbnailUrl: string;
  videoUrl?: string;
  overlayTitle: string;
  projectName: string;
  description: string;
  bgColorClass?: string; // Optional: class for custom background
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={`${project.bgColorClass || 'bg-card'} text-card-foreground rounded-lg shadow-lg overflow-hidden w-full max-w-md mx-auto h-full flex flex-col`}>
      <div className="relative aspect-video group overflow-hidden">
        <img 
          src={project.thumbnailUrl} 
          alt={`Thumbnail for ${project.projectName}`} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-40">
          {/* Play button removed as per request */}
        </div>
        {project.overlayTitle && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-semibold">
            {project.overlayTitle}
          </div>
        )}
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-foreground">{project.projectName}</h3>
        <p className="text-muted-foreground text-xs md:text-sm">{project.description}</p>
        {/* Optional: Add a button or link here */}
      </div>
    </div>
  );
};

export default ProjectCard;
