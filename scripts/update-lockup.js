import fs from 'fs';

const raw = fs.readFileSync('public/brand/devontiq-lockup.svg', 'utf8');
const clean = raw
  .replace(/<svg[^>]*>/, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="105 88 990 224" fill="none">')
  .replace(/<rect width="100%" height="100%" fill="#2F2F2F"\/>/, '')
  .replace(/<metadata>[\s\S]*?<\/metadata>/, '');
fs.writeFileSync('public/brand/devontiq-lockup-clean.svg', clean);
console.log('Updated devontiq-lockup-clean.svg successfully!');
