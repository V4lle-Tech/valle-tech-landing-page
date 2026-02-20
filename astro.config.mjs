import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://v4lle.tech',
  integrations: [react()],
  output: 'static',
});
