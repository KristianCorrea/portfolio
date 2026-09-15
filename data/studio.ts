export interface ClientProject {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  liveUrl: string;
}

export const studio = {
  name: 'Velvet Pixel Software',
  description:
    'These were all made under my company Velvet Pixel Software, with real clients.',
  websiteUrl: 'https://www.velvetpixel.dev/',
};

export const clientProjects: ClientProject[] = [
  {
    id: 'legacy-collection',
    title: 'Legacy Collection LLC',
    category: 'Client · E-commerce',
    description:
      'Full storefront for a veteran-owned TCG shop on the Emerald Coast, with in-store and online inventory kept in sync.',
    highlights: [
      'Square POS inventory sync (in-store + online)',
      'News blog and product drops',
      'Card grading submission flow',
    ],
    liveUrl: 'https://chillchatcollecttcg.com.velvetpixel.dev/',
  },
  {
    id: 'topdeck',
    title: 'Topdeck Games & TCG',
    category: 'Client · Gaming & Retail',
    description:
      'Marketing site for a State College trading card and tabletop store, built to drive foot traffic and community engagement.',
    highlights: [
      'Live event calendar with meeting times',
      'Store gallery and location details',
      'Discord and Instagram integration',
    ],
    liveUrl: 'https://topdeckgamestcg.kristiancorrea.dev/',
  },
];
