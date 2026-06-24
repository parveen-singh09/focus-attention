// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Absolute base used for canonical + Open Graph URLs. Update if the
  // production domain changes.
  site: 'https://attentivebrain.com',
  // Internationalization: English stays at the root (/) and is the source of
  // truth; the other 19 locales are served under a path prefix (/es/, /de/,
  // /ar/, …) so each language is its own crawlable, indexable page. The list
  // here must match the locale codes used in src/i18n/ui.ts and the per-locale
  // word files in src/i18n/words/.
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en', 'es', 'fr', 'de', 'it', 'pt', 'nl', 'ru', 'pl', 'tr',
      'ar', 'hi', 'bn', 'zh', 'ja', 'ko', 'vi', 'th', 'id', 'uk',
    ],
    routing: {
      // English (defaultLocale) is unprefixed at /; only non-default locales
      // carry a /<lang>/ prefix.
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});