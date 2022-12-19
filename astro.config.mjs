import { defineConfig } from 'astro/config';
import { SITE } from './src/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// markdown - reading time
import { readingTime } from './markdown-utils/reading-time.mjs';
import tailwindTheme from './markdown-utils/tailwind-dark.json';
import addClasses from './markdown-utils/add-classes.mjs';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import a11yEmoji from '@fec/remark-a11y-emoji';

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  trailingSlash: 'never',
  output: 'static',
  astroFlavoredMarkdown: true,
  markdown: {
    drafts: true,
    remarkPlugins: [readingTime, a11yEmoji],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {
      behavior: 'append'
    }], [addClasses, {
      'h2,h3,h4': 'heading-permalink'
    }]],
    shikiConfig: {
      theme: tailwindTheme
    }
  },
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), mdx({
    drafts: true,
    extendDefaultPlugins: true,
    extendPlugins: true
  }), image()]
});