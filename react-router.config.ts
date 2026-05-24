import type { Config } from '@react-router/dev/config'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'

function blogPaths(): string[] {
    try {
        return readdirSync(join(process.cwd(), 'content/blog'))
            .filter((file) => file.endsWith('.mdx'))
            .map((file) => `/blog/${file.replace(/\.mdx$/, '')}`)
    } catch {
        return []
    }
}

export default {
    appDirectory: './src',
    ssr: false,
    prerender: ['/', '/404', '/og/index.png', '/blog', ...blogPaths()]
} satisfies Config
