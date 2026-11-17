// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Strony techniczne (noindex), które nie mogą trafić do mapy witryny:
// powrót z płatności PayPal (udana i nieudana) w PL / EN / DE.
const sitemapExclude = [
  '/dziekujemy',
  '/en/thank-you',
  '/de/danke',
  '/platnosc-nieudana',
  '/en/payment-failed',
  '/de/zahlung-fehlgeschlagen',
];

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
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '');
        return !sitemapExclude.includes(path);
      },
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
        // Strony główne PL / EN / DE (adresy EN i DE są bez ukośnika na końcu, bo trailingSlash: 'never')
        const homeUrls = ['https://lasbialas.pl/', 'https://lasbialas.pl/en', 'https://lasbialas.pl/en/', 'https://lasbialas.pl/de', 'https://lasbialas.pl/de/'];
        if (homeUrls.includes(item.url)) {
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
