import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";


import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://connorjkelly.com',
  integrations: [mdx(), sitemap(), tailwind()]  ,
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});

// import { defineConfig } from 'astro/config';

// export default defineConfig({

// });