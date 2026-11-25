// scripts/convert-heic.mjs
// Chuyển tất cả file HEIC trong public/images/ sang JPG

import sharp from 'sharp';
import { readdirSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imgDir = join(__dirname, '..', 'public', 'images');

const files = readdirSync(imgDir);
const heicFiles = files.filter(f => ['.heic', '.HEIC'].includes(extname(f)));

console.log(`Tìm thấy ${heicFiles.length} file HEIC cần convert...\n`);

for (const file of heicFiles) {
  const input = join(imgDir, file);
  const outName = basename(file, extname(file)) + '.jpg';
  const output = join(imgDir, outName);

  if (existsSync(output)) {
    console.log(`⏭  Bỏ qua (đã có): ${outName}`);
    continue;
  }

  try {
    await sharp(input)
      .jpeg({ quality: 90 })
      .toFile(output);
    console.log(`✅ Đã convert: ${file} → ${outName}`);
  } catch (err) {
    console.error(`❌ Lỗi: ${file} — ${err.message}`);
  }
}

console.log('\n✨ Hoàn tất!');
