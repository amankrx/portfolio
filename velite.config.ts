import { defineConfig, defineCollection, s } from 'velite';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode, { LineElement } from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';

type ComputedFields = {
  slug: string;
  body: string;
};

const computedFields = <T extends ComputedFields>(data: T) => {
  return {
    ...data,
    slugAsParams: data.slug.split('/').slice(1).join('/'),
  };
};

const blogs = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(120),
      description: s.string().max(1000),
      date: s.isodate(),
      published: s.boolean().default(true),
      featured: s.boolean().default(false),
      tags: s.array(s.string()),
      series: s.string().optional(), // For multi-part blog posts
      lastModified: s.isodate().optional(),
      metadata: s.metadata(),
      toc: s.toc(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

const projects = defineCollection({
  name: 'Project',
  pattern: 'projects/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string(),
      description: s.string(),
      date: s.isodate(),
      status: s
        .enum(['complete', 'in-progress', 'planned'])
        .default('complete'),
      tech: s.array(s.string()), // Technologies used
      featured: s.boolean().default(false),
      body: s.mdx(),
      links: s.array(
        s.object({
          name: s.string(),
          url: s.string().url(),
          type: s.enum(['github', 'docs', 'demo', 'blog', 'other']),
        }),
      ),
    })
    .transform(computedFields),
});

// Will add it to the page later on
const snippets = defineCollection({
  name: 'Snippet',
  pattern: 'snippets/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string(),
      description: s.string(),
      language: s.enum(['rust', 'cpp', 'python', 'typescript', 'other']),
      tags: s.array(s.string()),
      body: s.mdx(),
    })
    .transform(computedFields),
});

const work_experience = defineCollection({
  name: 'WorkExperience',
  pattern: 'work/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string(),
      company: s.string(),
      startDate: s.isodate(),
      endDate: s.isodate().optional(),
      description: s.string(),
      skills: s.array(s.string()),
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: 'src/content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:8].[ext]',
    clean: true,
  },
  collections: { blogs, projects, snippets, work_experience },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark-default',
          keepBackground: true,
          onVisitLine(node: LineElement) {
            // Prevent empty lines from collapsing
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
    remarkPlugins: [remarkMath, remarkGfm],
  },
});
