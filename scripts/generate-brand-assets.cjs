const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const rhRects = [
  [17, 19, 5, 26],
  [22, 19, 10, 5],
  [29, 24, 5, 8],
  [22, 31, 10, 5],
  [38, 19, 5, 26],
  [47, 19, 5, 26],
  [43, 30, 4, 5],
];
const rhLeg = [
  [23, 36],
  [29, 36],
  [37, 45],
  [30, 45],
];

function crc32(buffer) {
  let crc = -1;
  for (let index = 0; index < buffer.length; index += 1) {
    crc ^= buffer[index];
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return (crc ^ -1) >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  const crc = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 0);
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function writePng(file, width, height, pixels) {
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y += 1) {
    raw[y * (stride + 1)] = 0;
    pixels.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  fs.writeFileSync(file, Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk("IHDR", ihdr), chunk("IDAT", zlib.deflateSync(raw)), chunk("IEND", Buffer.alloc(0))]));
}

function inPolygon(x, y, points) {
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i, i += 1) {
    const [xi, yi] = points[i];
    const [xj, yj] = points[j];
    const crosses = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (crosses) inside = !inside;
  }
  return inside;
}

function setPixel(pixels, width, x, y, color) {
  if (x < 0 || y < 0 || x >= width) return;
  const offset = (y * width + x) * 4;
  pixels[offset] = color[0];
  pixels[offset + 1] = color[1];
  pixels[offset + 2] = color[2];
  pixels[offset + 3] = color[3];
}

function fillRect(pixels, width, height, x, y, rectWidth, rectHeight, color) {
  for (let py = Math.max(0, y); py < Math.min(height, y + rectHeight); py += 1) {
    for (let px = Math.max(0, x); px < Math.min(width, x + rectWidth); px += 1) {
      setPixel(pixels, width, px, py, color);
    }
  }
}

function fillDiamond(pixels, width, height, cx, cy, radius, color) {
  for (let y = Math.floor(cy - radius); y <= Math.ceil(cy + radius); y += 1) {
    for (let x = Math.floor(cx - radius); x <= Math.ceil(cx + radius); x += 1) {
      if (Math.abs(x + 0.5 - cx) + Math.abs(y + 0.5 - cy) <= radius) {
        setPixel(pixels, width, x, y, color);
      }
    }
  }
}

function strokeDiamond(pixels, width, height, cx, cy, radius, thickness, color) {
  for (let y = Math.floor(cy - radius); y <= Math.ceil(cy + radius); y += 1) {
    for (let x = Math.floor(cx - radius); x <= Math.ceil(cx + radius); x += 1) {
      const distance = Math.abs(x + 0.5 - cx) + Math.abs(y + 0.5 - cy);
      if (distance <= radius && distance >= radius - thickness) {
        setPixel(pixels, width, x, y, color);
      }
    }
  }
}

function drawRh(pixels, width, height, x, y, size, color) {
  const scale = size / 64;
  rhRects.forEach(([rx, ry, rw, rh]) => {
    fillRect(pixels, width, height, Math.round(x + rx * scale), Math.round(y + ry * scale), Math.max(1, Math.round(rw * scale)), Math.max(1, Math.round(rh * scale)), color);
  });
  const minX = Math.floor(x + 20 * scale);
  const maxX = Math.ceil(x + 40 * scale);
  const minY = Math.floor(y + 34 * scale);
  const maxY = Math.ceil(y + 47 * scale);
  const points = rhLeg.map(([px, py]) => [x + px * scale, y + py * scale]);
  for (let py = minY; py <= maxY; py += 1) {
    for (let px = minX; px <= maxX; px += 1) {
      if (inPolygon(px + 0.5, py + 0.5, points)) setPixel(pixels, width, px, py, color);
    }
  }
}

const font = {
  a: ["01110", "00001", "01111", "10001", "10001", "10011", "01101"],
  d: ["00001", "00001", "01101", "10011", "10001", "10011", "01101"],
  e: ["01110", "10001", "11111", "10000", "10000", "10001", "01110"],
  h: ["10000", "10000", "10110", "11001", "10001", "10001", "10001"],
  j: ["00010", "00000", "00110", "00010", "00010", "10010", "01100"],
  m: ["00000", "00000", "11010", "10101", "10101", "10101", "10101"],
  n: ["00000", "00000", "10110", "11001", "10001", "10001", "10001"],
  o: ["00000", "00000", "01110", "10001", "10001", "10001", "01110"],
  r: ["00000", "00000", "10110", "11001", "10000", "10000", "10000"],
  v: ["00000", "00000", "10001", "10001", "10001", "01010", "00100"],
  ".": ["00000", "00000", "00000", "00000", "00000", "01100", "01100"],
};

function drawText(pixels, width, height, text, x, y, scale, color) {
  let cursor = x;
  for (const char of text) {
    const glyph = font[char];
    if (!glyph) {
      cursor += scale * 4;
      continue;
    }
    glyph.forEach((row, rowIndex) => {
      [...row].forEach((cell, colIndex) => {
        if (cell === "1") fillRect(pixels, width, height, cursor + colIndex * scale, y + rowIndex * scale, scale, scale, color);
      });
    });
    cursor += scale * 6;
  }
}

function drawLogoMark(pixels, width, height, cx, cy, size, includeRh) {
  if (includeRh) {
    fillDiamond(pixels, width, height, cx, cy, size / 2, [0, 0, 0, 255]);
    strokeDiamond(pixels, width, height, cx, cy, size / 2 - 4, Math.max(2, Math.round(size * 0.045)), [255, 255, 255, 255]);
  } else {
    fillDiamond(pixels, width, height, cx, cy, size / 2, [255, 255, 255, 255]);
  }
  if (includeRh) drawRh(pixels, width, height, cx - size / 2, cy - size / 2, size, [255, 255, 255, 255]);
}

function makeCanvas(width, height, bg = [0, 0, 0, 255]) {
  const pixels = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      setPixel(pixels, width, x, y, bg);
    }
  }
  return pixels;
}

function makeAppleTouch() {
  const pixels = makeCanvas(180, 180);
  drawLogoMark(pixels, 180, 180, 90, 90, 136, true);
  writePng(path.join("public", "apple-touch-icon.png"), 180, 180, pixels);
}

function makeOgImage() {
  const pixels = makeCanvas(1200, 630);
  drawLogoMark(pixels, 1200, 630, 340, 315, 230, true);
  drawText(pixels, 1200, 630, "rajmohan.dev", 500, 284, 8, [255, 255, 255, 255]);
  writePng(path.join("public", "og-image.png"), 1200, 630, pixels);
}

function makeIcoImage(size, includeRh) {
  const pixels = makeCanvas(size, size, [0, 0, 0, 255]);
  drawLogoMark(pixels, size, size, size / 2, size / 2, size - 2, includeRh);
  const flipped = Buffer.alloc(size * size * 4);
  for (let y = 0; y < size; y += 1) {
    pixels.copy(flipped, y * size * 4, (size - 1 - y) * size * 4, (size - y) * size * 4);
  }
  const header = Buffer.alloc(40);
  header.writeUInt32LE(40, 0);
  header.writeInt32LE(size, 4);
  header.writeInt32LE(size * 2, 8);
  header.writeUInt16LE(1, 12);
  header.writeUInt16LE(32, 14);
  header.writeUInt32LE(0, 16);
  header.writeUInt32LE(flipped.length, 20);
  return Buffer.concat([header, flipped, Buffer.alloc(Math.ceil(size / 32) * 4 * size)]);
}

function makeIco() {
  const images = [
    { size: 16, data: makeIcoImage(16, false) },
    { size: 32, data: makeIcoImage(32, true) },
  ];
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  const entries = Buffer.alloc(16 * images.length);
  let offset = header.length + entries.length;
  images.forEach((image, index) => {
    const entry = index * 16;
    entries[entry] = image.size;
    entries[entry + 1] = image.size;
    entries.writeUInt16LE(1, entry + 4);
    entries.writeUInt16LE(32, entry + 6);
    entries.writeUInt32LE(image.data.length, entry + 8);
    entries.writeUInt32LE(offset, entry + 12);
    offset += image.data.length;
  });
  fs.writeFileSync(path.join("public", "favicon.ico"), Buffer.concat([header, entries, ...images.map((image) => image.data)]));
}

makeAppleTouch();
makeOgImage();
makeIco();
