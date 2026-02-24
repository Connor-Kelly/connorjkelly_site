// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

const blog_schema = z.object({
	title: z.string(),
	date: z.date(),
	layout: z.string(),
	description: z.string(),
	tags: z.array(z.string()),
});

// 4. Define your collection(s)
const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/pages/blog' }),
	schema: blog_schema,
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { blog };
export const schemas = { blog: blog_schema };
