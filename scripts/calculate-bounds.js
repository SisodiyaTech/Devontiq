import fs from 'fs';

function getBounds(svgStr) {
  const groupMatch = [...svgStr.matchAll(/<g transform="translate\(([^ ]+) ([^)]+)\) scale\(([^)]+)\)" fill="([^"]+)">([\s\S]*?)<\/g>/g)];
  let overallMinX = Infinity, overallMaxX = -Infinity, overallMinY = Infinity, overallMaxY = -Infinity;
  for (const gm of groupMatch) {
    const tx = parseFloat(gm[1]);
    const ty = parseFloat(gm[2]);
    const scale = parseFloat(gm[3]);
    const paths = [...gm[5].matchAll(/<path transform="translate\(([^ ]+) ([^)]+)\) scale\(([^ ]+) ([^)]+)\)" d="([^"]+)"\/>/g)];
    for (const pm of paths) {
      const ptx = parseFloat(pm[1]);
      const pty = parseFloat(pm[2]);
      const psx = parseFloat(pm[3]);
      const psy = parseFloat(pm[4]);
      const d = pm[5];
      const commands = d.match(/([A-Za-z])|(-?[0-9.]+)/g);
      let mode = "";
      let expectX = true;
      for (let i = 0; i < commands.length; i++) {
        const token = commands[i];
        if (/^[A-Za-z]$/.test(token)) {
          mode = token;
          if (mode === "H") expectX = true;
          else if (mode === "V") expectX = false;
          else expectX = true;
        } else {
          const val = parseFloat(token);
          let worldX = null, worldY = null;
          if (mode === "H") {
            worldX = tx + scale * (ptx + psx * val);
          } else if (mode === "V") {
            worldY = ty + scale * (pty + psy * val);
          } else {
            if (expectX) {
              worldX = tx + scale * (ptx + psx * val);
              expectX = false;
            } else {
              worldY = ty + scale * (pty + psy * val);
              expectX = true;
            }
          }
          if (worldX !== null) {
            if (worldX < overallMinX) overallMinX = worldX;
            if (worldX > overallMaxX) overallMaxX = worldX;
          }
          if (worldY !== null) {
            if (worldY < overallMinY) overallMinY = worldY;
            if (worldY > overallMaxY) overallMaxY = worldY;
          }
        }
      }
    }
  }
  return { overallMinX, overallMaxX, overallMinY, overallMaxY, width: overallMaxX - overallMinX, height: overallMaxY - overallMinY };
}

console.log("TEXT LOGO:", getBounds(fs.readFileSync("files/devontiq-text-logo.svg", "utf8")));
console.log("LOCKUP:", getBounds(fs.readFileSync("files/devontiq-lockup.svg", "utf8")));
