import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
    // (!) dangerous, needed to load the local env variables on the cloudflare builder
    envPrefix: undefined,
    plugins: [tailwindcss(), reactRouter()],
    resolve: {
        tsconfigPaths: true
    }
})
