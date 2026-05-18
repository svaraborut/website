import type { Route } from './+types/index'
import { createMeta } from '~/lib/og'
import { Footer } from '~/components/sections/Footer'
import { Header } from '~/components/sections/Header'
import React from 'react'
import { type RepoItem, SectionRepo } from '~/components/ui/SectionRepo'
import { Section } from '~/components/ui/Section'
import { Container } from '~/components/ui/Container'

export function meta({ loaderData }: Route.MetaArgs) {
    return createMeta({
        type: 'website',
        title: 'Projects - Borut Svara',
        description:
            'Open source spillover from a working software and AI practice. Agent infrastructure, React tooling, developer experience, and a few useful primitives.',
        image: '/og/ogi_i.png',
        url: '/projects'
    })
}

export const projectsFeatured = [
    {
        type: 'github',
        tag: 'ai',
        title: 'agentapi',
        description: 'Lightweight bridge that lets AI agents drive any OpenAPI service.',
        url: 'https://github.com/svaraborut/agentapi'
    },
    {
        type: 'github',
        tag: 'ai',
        title: 'diffcp',
        description: 'Streams AI agent state to the UI as compressed diffs.',
        url: 'https://github.com/axelered/diffcp'
    },
    {
        type: 'copilot',
        title: 'watermark',
        description: 'GitHub Action stamping builds with version, branch, and commit.',
        url: 'https://github.com/marketplace/actions/build-watermark'
    },
    {
        type: 'github',
        tag: 'ai',
        title: 'mcp-app',
        description: 'Interactive micro-frontends running inside ChatGPT on Cloudflare Workers.',
        url: 'https://github.com/svaraborut/mcp-app'
    }
] as RepoItem[]

export default function Page({ loaderData }: Route.MetaArgs) {
    return (
        <div>
            <Header>
                <div className="space-y-8">
                    <h1>git</h1>
                    <p className="text-4xl">What spills out of a working software and AI practice.</p>
                </div>
            </Header>

            <Section
                className="py-32"
                title={<>Most of what I ship stays behind closed doors. The rest lives here.</>}
                description={
                    <div className="space-y-8">
                        <p>
                            Day to day I build AI systems for clients and partners under NDA. Agentic platforms, RAG
                            infrastructure, internal tools that quietly run the lights. The projects on this page are
                            the spillover. Ideas, primitives, and the occasional small standard worth pushing into the
                            open.
                        </p>
                        <p>
                            Some are solo weekend work. Others grew alongside teams I trust, at Axelered and with a
                            handful of partner companies who think the same way about shipping.
                        </p>
                    </div>
                }
            />

            {/* Featured AI infrastructure */}
            <SectionRepo
                direction="column1"
                className="md:py-32"
                section="FEATURED"
                title={<>Agent infrastructure I keep coming back to.</>}
                description={
                    <>
                        Two projects that sit closest to my current work. Small, opinionated bets on how agents should
                        talk to APIs, how their state should reach the UI, and where they should actually run.
                    </>
                }
            >
                {[
                    {
                        type: 'github',
                        tag: 'ai',
                        title: 'agentapi',
                        description: 'Bridge that lets AI agents drive any OpenAPI service.',
                        url: 'https://github.com/svaraborut/agentapi'
                    },
                    {
                        type: 'github',
                        tag: 'ai',
                        title: 'diffcp',
                        description: 'Streams AI agent state to the UI as compressed diffs.',
                        url: 'https://github.com/axelered/diffcp'
                    }
                ]}
            </SectionRepo>

            {/* Packages */}
            <SectionRepo
                className="pt-24 md:pb-32"
                title={<>Packages</>}
                description={
                    <>
                        Reusable primitives I maintain. Mostly the kind of thing every team ends up writing twice before
                        settling on a version.
                    </>
                }
            >
                {[
                    {
                        type: 'npm',
                        tag: 'ai',
                        title: '@diffcp/react',
                        description: 'React bindings for diffcp. Streamed agent state, made easy.',
                        url: 'https://www.npmjs.com/package/@diffcp/react'
                    },
                    {
                        type: 'npm',
                        title: '@reactit/hooks',
                        description: 'Pure React hooks for async, browser, DOM, storage, and time.',
                        url: 'https://www.npmjs.com/package/@reactit/hooks'
                    },
                    {
                        type: 'github',
                        title: '@reactit/auth',
                        description: 'Headless React auth with tokens, storage, and expiration handled.',
                        url: 'https://github.com/svaraborut/reactit-auth'
                    },
                    {
                        type: 'copilot',
                        title: 'watermark',
                        description: 'GitHub Action stamping builds with version, branch, and commit.',
                        url: 'https://github.com/marketplace/actions/build-watermark'
                    }
                ]}
            </SectionRepo>

            {/* Open Source Projects */}
            <SectionRepo
                className="py-32"
                title={<>Open Source</>}
                description={
                    <>
                        Small libraries, browser-side tooling, and a few attempts at making the boring 90% of common
                        problems disappear. Some are still actively maintained, some are happily finished.
                    </>
                }
            >
                {[
                    {
                        type: 'github',
                        title: 'webimg',
                        description: 'High-resolution browser image processing with WebGL, no uploads.',
                        url: 'https://github.com/svaraborut/webimg'
                    },
                    {
                        type: 'github',
                        title: 'b32',
                        description: 'Fast, RFC4648-compliant Base32 codec for Node.js.',
                        url: 'https://github.com/svaraborut/b32'
                    },
                    {
                        type: 'github',
                        tag: 'wip',
                        title: 'hooox',
                        description: 'Pure, focused React hooks for enterprise apps. No components.',
                        url: 'https://github.com/svaraborut/hooox'
                    },
                    {
                        type: 'github',
                        tag: 'wip',
                        title: 'declined',
                        description: 'Stripe integration in your app in under ten minutes.',
                        url: 'https://github.com/svaraborut/declined'
                    }
                ]}
            </SectionRepo>

            {/* Contacts */}
            <a href="mailto:borutsvara@gmail.com">
                <Container>
                    <div className="flex flex-col gap-12 py-12 md:py-16">
                        <p className="max-w-3xl text-4xl md:text-5xl">
                            Working on something similar, or want a sharp pair of eyes on yours? Drop a line.
                        </p>
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8 text-primary">
                            <p className="text-2xl font-bold md:text-3xl">borutsvara@gmail.com</p>
                        </div>
                    </div>
                </Container>
            </a>

            {/* Experiments and templates */}
            <SectionRepo
                className="py-32"
                title={<>Templates</>}
                description={
                    <>
                        Starter kits, reference setups, and small experiments I keep around because they save me a
                        weekend the next time a similar problem comes up. Treat them as cookbooks, not products.
                    </>
                }
            >
                {[
                    {
                        type: 'github',
                        tag: 'ai',
                        title: 'mcp-app',
                        description: 'Interactive micro-frontends running inside ChatGPT on Cloudflare Workers.',
                        url: 'https://github.com/svaraborut/mcp-app'
                    },
                    {
                        type: 'github',
                        tag: 'ai',
                        title: 'mcp-examples',
                        description: 'Three production-ready MCP server patterns in Bun and Hono.',
                        url: 'https://github.com/svaraborut/mcp-examples'
                    },
                    {
                        type: 'github',
                        title: 'npmsemver',
                        description: 'Fully automated semantic-release on npm via GitHub Actions.',
                        url: 'https://github.com/svaraborut/npmsemver'
                    },
                    {
                        type: 'github',
                        title: 'template-astro',
                        description: 'Fast static sites with Astro, TypeScript, and Tailwind v4.',
                        url: 'https://github.com/svaraborut/template-astro'
                    },
                    {
                        type: 'github',
                        title: 'next-i18n',
                        description: 'Next.js i18n that survives prefetch, metadata, and Cloudflare.',
                        url: 'https://github.com/svaraborut/next-i18n'
                    },
                    {
                        type: 'github',
                        title: 'next-cf',
                        description: 'Production Next.js on Cloudflare with D1, R2, Drizzle, tRPC.',
                        url: 'https://github.com/svaraborut/next-cf'
                    }
                ]}
            </SectionRepo>

            <Footer />
        </div>
    )
}
