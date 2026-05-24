import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import rehypePrettyCode from 'rehype-pretty-code'
import { z } from 'zod'

const posts = defineCollection({
    name: 'posts',
    directory: 'content/blog',
    include: '*.mdx',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string(),
        draft: z.boolean().optional().default(false)
    }),
    transform: async (document, context) => {
        const mdx = await compileMDX(context, document, {
            rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark-default', keepBackground: true }]]
        })
        const slug = document._meta.fileName.replace(/\.mdx$/, '')
        return { ...document, slug, mdx }
    }
})

export default defineConfig({
    collections: [posts]
})
