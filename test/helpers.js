import { expect } from 'chai';
import fs from 'fs';
import { JSDOM } from 'jsdom';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8');

const dom = new JSDOM(html, {
  runScripts: 'dangerously',
  url: 'http://localhost',
});

global.window = dom.window;
global.document = dom.window.document;

