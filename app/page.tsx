import fs from 'node:fs';
import path from 'node:path';

// Read the HTML body content at build / render time on the server.
// This is a Server Component, so `fs` works fine here.
function getBodyHtml(): string {
  const filePath = path.join(process.cwd(), 'content', 'body.html');
  return fs.readFileSync(filePath, 'utf-8');
}

export default function Home() {
  const html = getBodyHtml();

  // Inline onclick handlers inside this HTML (e.g. switchTab(...)) will be
  // preserved by the browser because the HTML is injected via innerHTML.
  // The global functions are defined in /public/script.js, loaded in layout.tsx.
  return (
    <div
      id="redactor-root"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
