// src/components/blog/extract-headings.tsx
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { visit } from 'unist-util-visit';
import { slug } from 'github-slugger';

interface Heading {
  id: string;
  level: number;
  text: string;
}

export async function extractHeadings(markdown: string): Promise<Heading[]> {
  const headings: Heading[] = [];

  const tree = await unified()
    .use(remarkParse)
    .use(() => (tree) => {
      visit(tree, 'heading', (node: any) => {
        const text = node.children
          .map((child: any) => child.value)
          .join('')
          .trim();
        const id = slug(text);
        headings.push({
          id,
          level: node.depth,
          text,
        });
      });
    })
    .use(remarkStringify)
    .process(markdown);

  return headings;
}
