// src/lib/mdx-config.ts
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeMathJax from 'rehype-mathjax';
import { MDXRemoteProps } from 'next-mdx-remote/rsc';

// Define types for rehype-pretty-code options
interface PrettyCodeNode {
  children: Array<{ type: string; value: string }>;
  properties: {
    className?: string[];
  };
}

interface PrettyCodeOptions {
  theme: string;
  keepBackground: boolean;
  onVisitLine: (node: PrettyCodeNode) => void;
  onVisitHighlightedLine: (node: PrettyCodeNode) => void;
  onVisitHighlightedWord: (node: PrettyCodeNode) => void;
  filterMetaString: (str: string) => string;
}

const prettyCodeOptions: PrettyCodeOptions = {
  theme: 'one-dark-pro',
  keepBackground: false,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className = ['line--highlighted'];
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word--highlighted'];
  },
  filterMetaString: (string) => string.replace(/language-/, ''),
};

// Use MDXRemoteProps instead of SerializeOptions
export const mdxOptions: MDXRemoteProps['options'] = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
      [rehypePrettyCode, prettyCodeOptions],
      rehypeMathJax,
    ],
    format: 'mdx',
  },
};
