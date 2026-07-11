const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const expectedSha = '9a4c4c4b98af0bd32c313f427e2dd78e87592798b87650ca3c1bb4ece9f7c0de';
const expectedChars = 188636;

const parts = [];
for (let i = 0; i < 16; i += 1) {
  const name = String(i).padStart(2, '0');
  const filePath = path.join(__dirname, 'chunks', `${name}.txt`);
  parts.push(fs.readFileSync(filePath, 'utf8'));
}

const html = parts.join('');
const sha = crypto.createHash('sha256').update(html).digest('hex');

if (html.length !== expectedChars) {
  throw new Error(`Length mismatch: expected ${expectedChars}, got ${html.length}`);
}
if (sha !== expectedSha) {
  throw new Error(`SHA-256 mismatch: expected ${expectedSha}, got ${sha}`);
}
if (!html.includes('<title>AI Stack Tutor for Investors</title>')) {
  throw new Error('Expected application title not found');
}

fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), html, 'utf8');
console.log(`Built AI Stack Tutor: ${html.length} characters, SHA-256 ${sha}`);
