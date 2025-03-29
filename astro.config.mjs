// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Connor J Kelly",
      logo: { src: "./public/favicon.svg" },
      social: {
        email: "mailto:connorkelly726@gmail.com",
        linkedin: "https://www.linkedin.com/in/connor-kelly/",
        github: "https://github.com/Connor-Kelly",
      },
      components: {
        Head: "./src/components/starlight/Head.astro",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Home",
          link: "",
        },
        "career/resume",
        {
          label: "Projects",
          // link: "projects/index",
          autogenerate: { directory: "projects" },
          collapsed: true,
        },
      ],
    }),
  ],
});

// {
// 	label: 'Guides',
// 	items: [
// 		// Each item here is one entry in the navigation menu.
// 		{
// 			label: 'Example Guide',
// 			slug: 'guides/example',
// 		},
// 	],
// 	collapsed: true,
// },
// {
// 	label: 'Reference',
// 	autogenerate: {
// 		directory: 'reference',
// 	},
// 	collapsed: true,
// },
