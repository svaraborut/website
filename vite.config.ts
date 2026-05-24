import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import contentCollections from '@content-collections/vite'

export default defineConfig({
    plugins: [tailwindcss(), contentCollections(), reactRouter(), cloudflare()],
    resolve: {
        tsconfigPaths: true
    }
})
