import { allPosts } from 'content-collections'

export type Post = (typeof allPosts)[number]

export function listPosts(): Post[] {
    return allPosts
        .filter((post) => import.meta.env.DEV || !post.draft)
        .sort((a, b) => b.date.localeCompare(a.date))
}

export function findPost(slug: string): Post | undefined {
    return listPosts().find((post) => post.slug === slug)
}

export function formatPostDate(date: string): string {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}
