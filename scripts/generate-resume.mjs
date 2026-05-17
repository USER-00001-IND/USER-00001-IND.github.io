import { writeFile } from "node:fs/promises";
import { education, interests, profile, projects, skillGroups } from "../src/data/portfolio.js";

const page = { width: 612, height: 792, margin: 54 };
const content = [];
let y = 738;

function escapePdf(text) {
  return String(text).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function text(value, x, yy, size = 10, font = "F1", color = "0.12 0.16 0.23") {
  content.push(`BT /${font} ${size} Tf ${color} rg ${x} ${yy} Td (${escapePdf(value)}) Tj ET`);
}

function line(x1, yy, x2, color = "0.18 0.75 0.55", width = 1) {
  content.push(`${color} RG ${width} w ${x1} ${yy} m ${x2} ${yy} l S`);
}

function rect(x, yy, width, height, color = "0.92 0.98 0.96") {
  content.push(`${color} rg ${x} ${yy} ${width} ${height} re f`);
}

function wrap(value, maxChars) {
  const words = String(value).split(" ");
  const lines = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) lines.push(current);
  return lines;
}

function section(title) {
  y -= 20;
  text(title.toUpperCase(), page.margin, y, 10, "F2", "0.02 0.46 0.38");
  line(page.margin, y - 6, page.width - page.margin, "0.78 0.86 0.90", 0.75);
  y -= 20;
}

function bullet(value, x = page.margin, maxChars = 96) {
  const lines = wrap(value, maxChars);
  text(`- ${lines[0]}`, x, y, 9.4, "F1", "0.18 0.22 0.31");
  y -= 13;
  for (const extra of lines.slice(1)) {
    text(extra, x + 10, y, 9.4, "F1", "0.18 0.22 0.31");
    y -= 13;
  }
}

rect(0, 0, page.width, page.height, "1 1 1");
rect(0, 758, page.width, 34, "0.02 0.06 0.12");
text(profile.name, page.margin, 724, 24, "F2", "0.02 0.06 0.12");
text(`${profile.role} | ${profile.focus}`, page.margin, 704, 11, "F1", "0.02 0.46 0.38");
text(`${profile.email} | ${profile.location}`, page.margin, 687, 9.5, "F1", "0.22 0.27 0.36");
text(profile.githubUrl, page.margin, 672, 9.5, "F1", "0.25 0.22 0.62");
line(page.margin, 660, page.width - page.margin, "0.18 0.75 0.55", 1.2);
y = 637;

section("Profile");
for (const lineText of wrap(profile.summary, 105)) {
  text(lineText, page.margin, y, 9.8, "F1", "0.18 0.22 0.31");
  y -= 14;
}

section("Education");
for (const item of education) {
  text(item.program, page.margin, y, 10.2, "F2", "0.08 0.11 0.18");
  text(`${item.years} | ${item.status}`, 430, y, 9.2, "F1", "0.25 0.22 0.62");
  y -= 13;
  text(item.school, page.margin, y, 9.4, "F1", "0.25 0.30 0.38");
  y -= 16;
}

section("Technical Skills");
for (const group of skillGroups) {
  text(`${group.title}:`, page.margin, y, 9.6, "F2", "0.08 0.11 0.18");
  text(group.items.join(", "), page.margin + 102, y, 9.4, "F1", "0.20 0.24 0.32");
  y -= 14;
}

section("Projects");
for (const project of projects) {
  text(project.title, page.margin, y, 10, "F2", "0.08 0.11 0.18");
  text(project.status, 438, y, 8.8, "F1", "0.02 0.46 0.38");
  y -= 13;
  for (const lineText of wrap(project.description, 100).slice(0, 2)) {
    text(lineText, page.margin, y, 9.1, "F1", "0.20 0.24 0.32");
    y -= 12;
  }
  text(`Tech: ${project.tech.join(", ")}`, page.margin, y, 8.7, "F1", "0.25 0.22 0.62");
  y -= 12;
  if (project.repoUrl) {
    text(`GitHub: ${project.repoUrl}`, page.margin, y, 8.5, "F1", "0.25 0.22 0.62");
    y -= 12;
  }
  y -= 4;
}

section("Interests");
bullet(interests.join(", "), page.margin, 100);

const stream = content.join("\n");
const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${page.width} ${page.height}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>`,
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  `<< /Length ${Buffer.byteLength(stream, "utf8")} >>\nstream\n${stream}\nendstream`,
];

let pdf = "%PDF-1.4\n";
const offsets = [0];
for (let index = 0; index < objects.length; index += 1) {
  offsets.push(Buffer.byteLength(pdf, "utf8"));
  pdf += `${index + 1} 0 obj\n${objects[index]}\nendobj\n`;
}
const xrefOffset = Buffer.byteLength(pdf, "utf8");
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (const offset of offsets.slice(1)) {
  pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Root 1 0 R /Size ${objects.length + 1} >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

await writeFile("public/resume.pdf", Buffer.from(pdf, "utf8"));
