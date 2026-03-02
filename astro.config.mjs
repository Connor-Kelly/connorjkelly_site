// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: "https://connorjkelly.com",
  markdown: {
    // plugins to add headings to markdown 
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'prepend', // Puts the link AFTER the text
          content: {
            type: 'element',
            tagName: 'span',
            properties: {
              className: ['mr-2', 'text-primary', "link-hover", 'no-underline', "not-prose"]
            },
            children: [{ type: 'text', value: '#' }]
          },
          group: {
            type: 'element',
            tagName: 'div',
            properties: { className: ['group', 'flex', 'items-center', 'cursor-pointer'] }
          }
        }
      ]
    ]
  }
});