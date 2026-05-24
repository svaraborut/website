import type { Route } from './+types/blog.$slug'
import React from 'react'
import { data, Link } from 'react-router'
import { createMeta } from '~/lib/og'
import { Footer } from '~/components/sections/Footer'
import { Container } from '~/components/ui/Container'
import { ContainerNotch } from '~/components/ui/Notch'
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
            <ContainerNotch
                notchTopLeft={
                    <div className="max-md:hidden relative flex gap-8 text-white pl-6 md:pl-8 xl:pl-16 px-16 py-4 z-10">
                        <Link to="/blog" className="text-4xl transition-colors hover:text-primary">
                            ← blog_
                        </Link>
                    </div>
                }
                notchBottomRight={true}
                className="pt-8 md:pt-16 relative overflow-hidden text-primary-fg"
            >
                <Container className="relative z-[1] pt-32 pb-24">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                            {post.draft && (
                                <span className="rounded bg-secondary px-2 py-0.5 text-primary">draft</span>
                            )}
                        </div>
                        <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl text-balance">{post.title}</h1>
                        <p className="max-w-3xl text-xl text-gray-400">{post.excerpt}</p>
                    </div>
                </Container>
            </ContainerNotch>

            <Container className="pt-16 pb-32">
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
