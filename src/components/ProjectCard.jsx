import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;
  const hasMultipleImages = project.images && project.images.length > 0;
  
  return (
    <div 
      id={project.slug}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 sm:gap-8 lg:gap-16 items-center mb-16 sm:mb-24 lg:mb-32 scroll-mt-24 sm:scroll-mt-32`}
    >
      {/* Image Side */}
      <div 
        className="w-full lg:w-1/2"
        data-aos={isEven ? "fade-right" : "fade-left"}
        data-aos-duration="1000"
      >
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl group">
          {hasMultipleImages ? (
            <ImageCarousel 
              images={project.images} 
              alt={project.title}
              autoPlay={true}
              interval={5000}
            />
          ) : (
            <img 
              src={project.image} 
              alt={project.title}
              loading="lazy"
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 dark:from-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>

      {/* Text Side */}
      <div 
        className="w-full lg:w-1/2 space-y-4 sm:space-y-6"
        data-aos={isEven ? "fade-left" : "fade-right"}
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="space-y-1 sm:space-y-2">
          <div className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium tracking-wider uppercase">
            {project.category}
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            {project.title}
          </h3>
        </div>
        
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {project.technologies && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-4">
            {project.technologies.map((tech, idx) => (
              <span 
                key={idx}
                className="px-2.5 sm:px-4 py-1.5 sm:py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs sm:text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        {(project.link || project.github) && (
          <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-blue-600 dark:bg-transparent text-white dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-700 dark:hover:bg-blue-400/10 transition-colors shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-slate-800 dark:bg-transparent text-white dark:text-orange-400 border-2 border-slate-800 dark:border-orange-400 rounded-lg text-sm sm:text-base font-medium hover:bg-slate-700 dark:hover:bg-orange-400/10 transition-colors shadow-md hover:shadow-lg active:scale-95"
              >
                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>View Code</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
