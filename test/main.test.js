const { expect } = require('chai');
const { JSDOM } = require('jsdom');
const { TableOfContents } = require('../dist/main.js');

describe('TableOfContents', () => {
  describe('loadDOM', () => {
    it('should extract hrefs from elements with a "toc" class', () => {
      const dom = new JSDOM(`
        <html>
          <body>
            <div class="toc">
              <ul>
                <li><a href="#section1">Section 1</a></li>
                <li><a href="#section2">Section 2</a></li>
              </ul>
            </div>
          </body>
        </html>
      `);

      const tableOfContents = new TableOfContents();
      tableOfContents.loadDOM(dom.window.document);

      expect(tableOfContents.toc).to.deep.equal(['#section1', '#section2']);
    });
  });
});
