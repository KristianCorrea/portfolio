import { ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'UKG (Ultimate Kronos Group)',
      date: 'May 2025',
      summary: 'Worked in an Agile team to build an AI-powered internal tool for managers to identify skill gaps and recommend development paths. Built with Spring Boot, OpenAI API, PostgreSQL, Docker, React, and Next.js. Presented to 50+ engineers and stakeholders.',
      skills: ['Spring Boot', 'OpenAI API', 'PostgreSQL', 'Docker', 'React', 'Next.js', 'Agile'],
    },
    {
      title: 'Front-End Engineer',
      company: 'Law Detail',
      date: 'Apr 2024 – Aug 2024',
      summary: 'Collaborated with developers to build data visualization tools using React and TypeScript. Created interactive charts and graphs with advanced filtering options for legal professionals to analyze data effectively.',
      skills: ['React', 'TypeScript', 'Data Visualization', 'Charts', 'UI/UX'],
    },
    {
      title: 'Computer Science Tutor & Lab IT',
      company: 'MDC School of Engineering and Technology',
      date: 'Jan 2023 – Present',
      summary: 'Mentored over 150 students in programming languages, improving average grades by 20%. Provided technical support and maintained computer lab equipment for optimal learning environments.',
      skills: ['Java', 'Python', 'C++', 'Mentoring', 'Technical Support', 'Lab Management'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8 sm:mb-12 text-center">
          Experience
        </h2>
        
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-200">
              <div className="mb-4">
                <p className="text-sm text-gray-600 font-medium mb-2">
                  {exp.date}
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-1">
                  {exp.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-700 mb-4">
                  {exp.company}
                </p>
              </div>
              
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                {exp.summary}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base"
            aria-label="View Full Resume"
          >
            <span>View Résumé</span>
            <ExternalLink size={14} className="sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;