import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';
import { site } from '../../data/site';

const projects = await getCollection('projects');

const pages: Record<string, { title: string; description: string }> = {
  default: {
    title: site.name,
    description: site.role,
  },
};

for (const project of projects) {
  pages[project.data.id] = {
    title: project.data.name,
    description: project.data.tagline,
  };
}

const PLEX_SANS_REGULAR = 'https://api.fontsource.org/v1/fonts/ibm-plex-sans/latin-400-normal.ttf';
const PLEX_SANS_SEMIBOLD = 'https://api.fontsource.org/v1/fonts/ibm-plex-sans/latin-600-normal.ttf';

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getImageOptions: (_path, page: (typeof pages)[string]) => ({
    title: page.title,
    description: page.description,
    bgGradient: [[16, 19, 26]],
    border: { color: [46, 102, 153], width: 6, side: 'block-end' },
    padding: 80,
    font: {
      title: { families: ['IBM Plex Sans'], weight: 'SemiBold', size: 72, color: [244, 245, 241] },
      description: { families: ['IBM Plex Sans'], size: 36, color: [200, 203, 199] },
    },
    fonts: [PLEX_SANS_REGULAR, PLEX_SANS_SEMIBOLD],
  }),
});
