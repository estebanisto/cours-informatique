const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable"
});

dom.window.document.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded fired.");
});

dom.window.addEventListener('error', (event) => {
  console.error("DOM ERROR:", event.error);
});
