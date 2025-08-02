import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8 sm:mb-12 text-center">
          Projects
        </h2>
        
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-lg p-4 sm:p-6 lg:p-8 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">
                {project.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4 sm:mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white text-gray-700 text-xs sm:text-sm rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={16} />
                    <span className="text-xs sm:text-sm">GitHub</span>
                  </a>
                )}
                
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink size={16} />
                    <span className="text-xs sm:text-sm">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;