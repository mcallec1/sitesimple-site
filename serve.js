const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3463;
const DIR = __dirname;

const MIME = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon'
};

http.createServer((req, res) => {
  let url = req.url.split('?')[0];
  if (url === '/') url = '/index.html';
  let file = path.join(DIR, url);
  if (!file.startsWith(DIR)) { res.writeHead(403); return res.end(); }
  // Try adding .html for clean URLs
  if (!fs.existsSync(file) && !path.extname(file) && fs.existsSync(file + '.html')) {
    file = file + '.html';
  }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'text/plain' });
    res.end(data);
  });
}).listen(PORT, '127.0.0.1', () => console.log(`SiteSimple site on port ${PORT}`));
