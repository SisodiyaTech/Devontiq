import fs from 'fs';

const lockupRaw = fs.readFileSync('files/devontiq-lockup.svg', 'utf8');
const iconRaw = fs.readFileSync('files/devontiq-icon-logo.svg', 'utf8');
const textRaw = fs.readFileSync('files/devontiq-text-logo.svg', 'utf8');

// 1. Lockup clean & transparent with full breathing room
const lockupContent = lockupRaw
  .replace(/<svg[^>]*>/, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="20 40 1080 210" fill="none">')
  .replace(/<rect width="100%" height="100%" fill="#2F2F2F"\/>/, '')
  .replace(/<metadata>[\s\S]*?<\/metadata>/, '');
fs.writeFileSync('public/brand/devontiq-lockup-clean.svg', lockupContent);

// 2. Icon clean & transparent with full breathing room
const iconContent = iconRaw
  .replace(/<svg[^>]*>/, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="105 105 405 405" fill="none">')
  .replace(/<rect width="100%" height="100%" fill="#2F2F2F"\/>/, '')
  .replace(/<metadata>[\s\S]*?<\/metadata>/, '');
fs.writeFileSync('public/brand/devontiq-icon-clean.svg', iconContent);

// 3. Text clean & transparent with 100% visible letters (D through Q, no clipping)
const textContent = textRaw
  .replace(/<svg[^>]*>/, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="135 252 930 115" fill="none">')
  .replace(/<rect width="100%" height="100%" fill="#2F2F2F"\/>/, '')
  .replace(/<metadata>[\s\S]*?<\/metadata>/, '');
fs.writeFileSync('public/brand/devontiq-text-clean.svg', textContent);

console.log('Clean SVGs successfully generated with full unclipped viewBoxes!');
