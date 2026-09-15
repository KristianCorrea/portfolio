import { ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full-Stack Development Instructor',
      company: 'Florida International University (KFSCIS)',
      date: 'Feb 2026 – Apr 2026',
      summary:
        'Selected as one of 10 facilitators for the Advanced Web Development track in the Break Through Tech Sprinternship program, teaching 25–30 students through a 7-week intensive. Created course curriculum and mentored students in full-stack web development, preparing them for matched internships through hands-on projects and industry-focused technical training.',
      skills: ['Full-Stack Development', 'React', 'Next.js', 'Curriculum Design', 'Mentoring'],
    },
    {
      title: 'Software Engineering Intern (BTT Sprinternship)',
      company: 'UKG (Ultimate Kronos Group)',
      date: 'May 2025 – Jun 2025',
      summary:
        'Built an AI-powered internal tool that helps managers identify skill gaps and recommend development paths using real-time employee competency data. Developed a Java Spring Boot backend integrated with the OpenAI API, a PostgreSQL database containerized with Docker, and a responsive frontend built with React and Next.js.',
      skills: ['Spring Boot', 'OpenAI API', 'PostgreSQL', 'Docker', 'React', 'Next.js'],
    },
    {
      title: 'Front-End Engineer',
      company: 'Law Detail',
      date: 'Mar 2024 – Aug 2024',
      summary:
        'Developed the frontend using React and TypeScript, creating responsive pages and components for legal professionals to explore court case data. Integrated dynamic filtering and search tools by connecting the UI to backend APIs, enabling users to refine and analyze large datasets in real time. Built interactive dashboards and data visualizations with ReCharts.',
      skills: ['React', 'TypeScript', 'ReCharts', 'Data Visualization', 'REST APIs'],
    },
    {
      title: 'Computer Science Tutor & Lab IT',
      company: 'Miami Dade College',
      date: 'Jan 2023 – Present',
      summary:
        'Mentored over 150 students in Java, Python, and C++, assisting with projects, homework, and exam preparation, on average improving student grades by 20%.',
      skills: ['Java', 'Python', 'C++', 'Mentoring', 'Lab IT'],
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
            <div
              key={index}
              className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-200"
            >
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

        <div className="text-center mt-12 flex justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm sm:text-base font-medium text-gray-600 hover:text-black transition-colors underline"
            aria-label="View Full Resume"
          >
            <span>View Full Resume</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
