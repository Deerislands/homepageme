import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        accent: '#2563EB',
        soft: '#E0F2FE',
        line: '#CBD5E1',
      },
      boxShadow: {
        soft: '0 20px 50px -24px rgba(15, 23, 42, 0.35)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at top left, rgba(37,99,235,0.12), transparent 28%), linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        'hero-grid': 'auto, 32px 32px, 32px 32px',
      },
    },
  },
  plugins: [],
};

export default config;
