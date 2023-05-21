export class TableOfContents
{
  toc: string[] = [];

  loadDOM(doc: Document)
  {
    const tocElements = doc.querySelectorAll('.toc [href]');
    this.toc = Array.from(tocElements).map((element) => element.getAttribute('href'));
  }
}
