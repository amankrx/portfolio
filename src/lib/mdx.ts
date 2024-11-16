// lib/mdx.ts
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeImgSize from 'rehype-img-size';

export async function mdxToHtml(source: string) {
  return await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight, [rehypeImgSize, { dir: 'public' }]],
    },
  });
}
