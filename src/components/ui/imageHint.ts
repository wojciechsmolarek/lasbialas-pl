import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

// Słowo w tekście, które po najechaniu (komputer) lub dotknięciu (telefon)
// pokazuje nad sobą małe zdjęcie. Zwraca gotowy HTML do wstawienia w tekst
// renderowany przez set:html. Skrypt i style są w ImageHints.astro.

interface ImageHintOptions {
  word: string;          // słowo widoczne w tekście, np. „termostatem”
  image: ImageMetadata;  // import ze src/assets, np. w6
  alt: string;           // opis zdjęcia
  caption?: string;      // opcjonalny podpis pod zdjęciem
}

const DISPLAY_WIDTH = 280;
let counter = 0;

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function imageHint({ word, image, alt, caption }: ImageHintOptions): Promise<string> {
  const img = await getImage({ src: image, width: Math.min(DISPLAY_WIDTH * 2, image.width), format: 'webp' });
  const height = Math.round((DISPLAY_WIDTH * image.height) / image.width);
  const id = `img-hint-${++counter}`;
  const cap = caption ? `<span class="img-hint__cap">${esc(caption)}</span>` : '';

  return (
    `<span class="img-hint">` +
      `<button type="button" class="img-hint__trigger" aria-expanded="false" aria-controls="${id}">${esc(word)}</button>` +
      `<span class="img-hint__pop" id="${id}" hidden>` +
        `<img src="${img.src}" width="${DISPLAY_WIDTH}" height="${height}" alt="${esc(alt)}" loading="lazy" decoding="async">` +
        cap +
      `</span>` +
    `</span>`
  );
}
