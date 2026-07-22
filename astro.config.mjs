// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://lasbialas.pl',
  compressHTML: true,

  build: {
    inlineStylesheets: 'always',
    format: 'file',
  },

  trailingSlash: 'never',

  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en', 'de'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pl',
        locales: {
          pl: 'pl',
          en: 'en',
          de: 'de'
        }
      },
      serialize(item) {
        item.lastmod = new Date().toISOString().split('T')[0];
        if (item.url === 'https://lasbialas.pl/' || item.url === 'https://lasbialas.pl/en/' || item.url === 'https://lasbialas.pl/de/') {
          item.changefreq = /** @type {any} */ ('daily');
          item.priority = 0.9;
        } else if (item.url.includes('/rodo') || item.url.includes('/privacy') || item.url.includes('/datenschutz') || item.url.includes('/regulamin') || item.url.includes('/terms') || item.url.includes('/hausordnung') || item.url.includes('/polityka')) {
          item.changefreq = /** @type {any} */ ('yearly');
          item.priority = 0.3;
        } else {
          item.changefreq = /** @type {any} */ ('weekly');
          item.priority = 0.7;
        }
        return item;
      }
    })
  ]
});
