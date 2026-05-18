import type { Config } from '@react-router/dev/config'

export default {
    appDirectory: './src',
    ssr: false,
    prerender: ['/', '/404', '/og/index.png']
} satisfies Config
