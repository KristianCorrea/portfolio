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
      'An AI-powered interview prep platform that simulates behavioral and technical interviews to help students and jobseekers practice and gain confidence. Integrated real-time voice interviews using the Google Gemini Live API, providing feedback on answer quality.',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Google Gemini Live API'],
    liveUrl: 'https://prepbear.app',
    featured: true,
  },
  {
    id: 'ai-search-lab',
    title: 'AI Search Lab',
    description:
      'An interactive AI search visualization platform that compares search algorithms on an 8-puzzle and Tic-Tac-Toe. Implemented BFS, Dijkstra, A* (Manhattan heuristic), Minimax, and Alpha-Beta pruning with live metrics for nodes expanded, runtime, and pruning rate.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://ai-search-lab.kristiancorrea.dev',
    featured: true,
  },
];
