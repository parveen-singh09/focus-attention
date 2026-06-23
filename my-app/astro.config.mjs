// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Absolute base used for canonical + Open Graph URLs. Update if the
  // production domain changes.
  site: 'https://attentivebrain.com',
  vite: {
    plugins: [tailwindcss()]
  }
});