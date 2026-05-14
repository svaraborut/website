import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { cloudflare } from '@cloudflare/vite-plugin'

export default defineConfig({
    plugins: [tailwindcss(), reactRouter(), cloudflare()],
    resolve: {
        tsconfigPaths: true
    }
})
