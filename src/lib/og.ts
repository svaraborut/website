import { HOSTNAME } from '~/conf'

export function toAbsoluteUrl(path: string) {
    return new URL(path, HOSTNAME.url).toString()
}

export function createMeta(options: {
    title: string
    description: string
    url?: string
    image?: string
    type?: string
}) {
    const keys = ['title', 'description', 'image', 'url', 'type']
    options.type = options.type || 'website'
    options.url = options.url ? toAbsoluteUrl(options.url) : options.url
    options.image = options.image ? toAbsoluteUrl(options.image) : options.image
    return [
        { title: options.title },
        { name: 'description', content: options.description },
        ...keys
            .map((key) => [key, (options as any)[key]])
            .filter(([_, v]) => !!v)
            .map(([k, v]) => ({ name: `og:${k}`, property: `og:${k}`, content: v })),
        ...keys
            .map((key) => [key, (options as any)[key]])
            .filter(([_, v]) => !!v)
            .map(([k, v]) => ({ name: `twitter:${k}`, content: v })),
        { name: 'twitter:card', content: 'summary_large_image' }
    ]
}
