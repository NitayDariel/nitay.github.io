import React from 'react';

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;
  
  return (
    <div 
      id={project.slug}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center mb-32 scroll-mt-32`}
    >
      {/* Image Side */}
      <div 
        className="w-full lg:w-1/2"
        data-aos={isEven ? "fade-right" : "fade-left"}
        data-aos-duration="1000"
      >
        <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 dark:from-slate-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Text Side */}
      <div 
        className="w-full lg:w-1/2 space-y-6"
        data-aos={isEven ? "fade-left" : "fade-right"}
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="space-y-2">
          <div className="text-blue-600 dark:text-blue-400 text-sm font-medium tracking-wider uppercase">
            {project.category}
          </div>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            {project.title}
          </h3>
        </div>
        
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {project.technologies && (
          <div className="flex flex-wrap gap-2 pt-4">
            {project.technologies.map((tech, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

