export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'tldr',
    title: 'TLDR',
    description: 'AI-powered browser extension that summarizes web articles with a single right-click using a BART model, saving users time and helping them avoid clickbait content.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Flask', 'Python', 'Bart AI Model'],
    githubUrl: 'https://github.com/KristianCorrea/TLDR',
    featured: true,
  },
  {
    id: 'financio',
    title: 'Financio',
    description: 'Financial literacy platform built for ShellHacks 2024. Features budgeting tools, expense tracking, and an AI chatbot for financial guidance. Won 2nd place in Vanguard\'s category.',
    technologies: ['React', 'Next.js', 'MySQL', 'Microsoft Copilot Studio', 'Docker'],
    liveUrl: 'https://www.financio.life',
    featured: true,
  },
  {
    id: 'studybuddy',
    title: 'Study Buddy',
    description: 'Mobile app that gamifies studying by letting users raise a virtual AI pet companion that grows stronger as they study smarter. Features include scanning textbook pages, taking quizzes, and tracking study progress with a cute animal companion.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'React Navigation', 'FastAPI', 'SQLite'],
    githubUrl: 'https://github.com/kristiancorrea/study-buddy-mobile',
    featured: true,
  },
];