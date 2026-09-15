import { ExternalLink } from 'lucide-react';
import { clientProjects, studio } from '@/data/studio';

const Studio = () => {
  return (
    <section id="client-work" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 text-center">
          Client Work
        </h2>
        <p className="text-sm sm:text-base text-gray-600 text-center max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed">
          These were all made under my company{' '}
          <a
            href={studio.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-800 hover:text-black transition-colors underline underline-offset-4 inline-flex items-center gap-1"
            aria-label={`Visit ${studio.name}`}
          >
            {studio.name}
            <ExternalLink size={13} className="inline shrink-0" />
          </a>
          , with real clients.
        </p>

        <div className="space-y-6 sm:space-y-8">
          {clientProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-2">
                {project.category}
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              <ul className="mb-6 space-y-1.5">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-sm text-gray-600 flex items-start gap-2"
                  >
                    <span className="text-gray-400 mt-0.5" aria-hidden="true">
                      ·
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
                aria-label={`View ${project.title} live site`}
              >
                <ExternalLink size={16} />
                <span className="text-xs sm:text-sm">View Live Site</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studio;
