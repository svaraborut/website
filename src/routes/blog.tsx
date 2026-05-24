import type { Route } from './+types/blog'
import { Link } from 'react-router'
import React from 'react'
import { createMeta } from '~/lib/og'
import { Footer } from '~/components/sections/Footer'
import { Header } from '~/components/sections/Header'
import { Container } from '~/components/ui/Container'
import { formatPostDate, listPosts } from '~/lib/posts'

export function meta(_: Route.MetaArgs) {
    return createMeta({
        type: 'website',
        title: 'Blog - Borut Svara',
        description: 'Notes from building software at the edge of AI and product.',
        url: '/blog'
    })
}

export function clientLoader() {
    return {
        posts: listPosts().map((post) => ({
            slug: post.slug,
            title: post.title,
            date: post.date,
            excerpt: post.excerpt,
            draft: post.draft
        }))
    }
}
clientLoader.hydrate = true as const

export default function Page({ loaderData }: Route.ComponentProps) {
    const { posts } = loaderData ?? { posts: [] }
    return (
        <div>
            <Header>
                <div className="space-y-8">
                    <h1>blog</h1>
                    <p className="text-4xl">Notes from building at the edge of AI and product.</p>
                </div>
            </Header>

            <Container className="py-32">
                {posts.length === 0 ? (
                    <p className="text-lg text-gray-400">No posts yet. Check back soon.</p>
                ) : (
                    <ul className="flex flex-col divide-y divide-secondary">
                        {posts.map((post) => (
                            <li key={post.slug}>
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="group flex flex-col gap-4 py-6 transition-colors hover:text-primary"
                                >
                                    <div className="flex items-center gap-4 text-gray-500">
                                        <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                                        {post.draft && (
                                            <span className="rounded bg-secondary px-2 py-0.5 text-primary">
                                                draft
                                            </span>
                                        )}
                                    </div>
                                    <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-balance">
                                        {post.title}
                                    </h2>
                                    <p className="max-w-3xl text-lg text-gray-400 group-hover:text-gray-300">
                                        {post.excerpt}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </Container>

            <Footer />
        </div>
    )
}
