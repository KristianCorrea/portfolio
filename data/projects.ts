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
    id: 'prepbear',
    title: 'PrepBear',
    description:
      'AI-powered interview prep platform that simulates behavioral and technical interviews, integrates company research, and streams real-time voice feedback through the Google Gemini Live API to help applicants feel confident.',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Google Gemini Live API'],
    liveUrl: 'https://prepbear.app',
    featured: true,
  },
  {
    id: 'studybuddy',
    title: 'Study Buddy',
    description:
      'Gamified study companion that lets users earn XP to level up a virtual pet by scanning textbook pages into AI-powered quizzes, complete with dashboards for pet care and learning progress.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/KristianCorrea/study-buddy-mobile',
    featured: true,
  },
  {
    id: 'tldr',
    title: 'TLDR',
    description:
      'Browser extension that summarizes web articles with a single right-click using a BART model, helping users save time and avoid clickbait.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Flask', 'Python', 'Bart AI Model'],
    githubUrl: 'https://github.com/KristianCorrea/TLDR',
    featured: true,
  },
  {
    id: 'financio',
    title: 'Financio',
    description:
      "Financial literacy platform built for ShellHacks 2024 that offers budgeting tools, expense tracking, and an AI chatbot for guidance, earning 2nd place in Vanguard's category.",
    technologies: ['React', 'Next.js', 'MySQL', 'Microsoft Copilot Studio', 'Docker'],
    liveUrl: 'https://www.financio.life',
    featured: true,
  },
];