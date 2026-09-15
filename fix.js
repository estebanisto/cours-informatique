const fs = require('fs');
let c = fs.readFileSync('app.js', 'utf8');
c = c.replace(/\\\`/g, '\`').replace(/\\\$/g, '$');
fs.writeFileSync('app.js', c);
