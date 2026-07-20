import { minify } from 'html-minifier-terser';
import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs';
import { join } from 'path';

const distDir = join(process.cwd(), 'dist');

function findHtmlFiles(dir) {
  let results = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      results = results.concat(findHtmlFiles(fullPath));
    } else if (entry.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

async function main() {
  const files = findHtmlFiles(distDir);
  console.log(`Minifying inline JS in ${files.length} HTML files...`);

  for (const file of files) {
    const content = readFileSync(file, 'utf-8');
    const result = await minify(content, {
      minifyJS: true,
      minifyCSS: true,
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      useShortDoctype: true,
    });
    writeFileSync(file, result, 'utf-8');
    const before = content.length;
    const after = result.length;
    const saved = (((before - after) / before) * 100).toFixed(1);
    console.log(`  ${file.split('dist')[1]}: ${before} -> ${after} (${saved}% saved)`);
  }

  console.log('Done!');
}

main().catch(console.error);
