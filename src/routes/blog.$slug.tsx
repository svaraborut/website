import type { Route } from './+types/blog.$slug'
import React from 'react'
import { data, Link } from 'react-router'
import { createMeta } from '~/lib/og'
import { Footer } from '~/components/sections/Footer'
import { Header } from '~/components/sections/Header'
import { Container } from '~/components/ui/Container'
import { Mdx } from '~/components/Mdx'
import { findPost, formatPostDate } from '~/lib/posts'

export function meta({ data: loaded }: Route.MetaArgs) {
    if (!loaded?.post) {
        return createMeta({ title: 'Post not found - Borut Svara', description: 'This post does not exist.' })
    }
    return createMeta({
        type: 'article',
        title: `${loaded.post.title} - Borut Svara`,
        description: loaded.post.excerpt,
        url: `/blog/${loaded.post.slug}`
    })
}

export function clientLoader({ params }: Route.ClientLoaderArgs) {
    const post = findPost(params.slug)
    if (!post) {
        throw data({ message: 'Post not found' }, { status: 404 })
    }
    return { post }
}
clientLoader.hydrate = true as const

export default function Page({ loaderData }: Route.ComponentProps) {
    if (!loaderData?.post) return null
    const { post } = loaderData
    return (
        <div>
            <Header bare />

            <Container className="pt-16 pb-32">
                <div className="max-w-3xl space-y-4 mb-16">
                    <div className="flex items-center gap-4 text-lg text-gray-300">
                        <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                        {post.draft && (
                            <span className="rounded bg-secondary px-2 py-0.5 text-primary">draft</span>
                        )}
                    </div>
                    <h1 className="text-lg text-primary">{post.title}</h1>
                </div>
                <article className="max-w-3xl">
                    <Mdx code={post.mdx} />
                </article>
            </Container>

            <Footer />
        </div>
    )
}

export function ErrorBoundary() {
    return (
        <div>
            <Container className="py-32">
                <h1 className="text-5xl font-bold">Post not found</h1>
                <p className="mt-6 text-lg text-gray-400">
                    <Link to="/blog" className="text-primary hover:underline">
                        ← Back to the blog
                    </Link>
                </p>
            </Container>
            <Footer />
        </div>
    )
}
