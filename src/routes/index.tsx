import type { Route } from './+types/index'
import { createMeta } from '~/lib/og'
import { Footer } from '~/components/sections/Footer'
import { Header } from '~/components/sections/Header'
import { ContainerNotch } from '~/components/ui/Notch'
import React from 'react'
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react'
import { Link } from 'react-router'
import { SectionRepo } from '~/components/ui/SectionRepo'
import { SectionCount } from '~/components/ui/SectionCount'
import { Section } from '~/components/ui/Section'
import { projectsFeatured } from '~/routes/projects'

export function meta({ loaderData }: Route.MetaArgs) {
    return createMeta({
        type: 'website',
        title: "I'm Borut Svara",
        description:
            'Fractional AI leadership and hands-on engineering for teams shipping into production. Europe and the GCC.',
        image: '/og/ogi_i.png',
        url: '/'
    })
}

export default function Page({ loaderData }: Route.MetaArgs) {
    return (
        <>
            <Header>
                <div className="space-y-8">
                    <h1>I'm Borut Svara.</h1>
                    <p className="text-4xl">Fractional and hands-on, across Europe and the GCC.</p>
                </div>
            </Header>

            {/* About / manifesto */}
            <Section
                className="py-32"
                section="WHAT I DO"
                title={<>Building AI systems, mostly under NDA.</>}
                description={
                    <div className="space-y-8">
                        <p>
                            Day to day I architect and ship AI systems for clients and partners. Agent platforms, RAG
                            infrastructure, automation that quietly runs in production. Most of that work is as a{' '}
                            <Link to="/fractional" className="text-primary hover:opacity-80 transition-opacity">
                                fractional Head of AI
                            </Link>{' '}
                            for engineering-led teams. The rest as a hands-on builder embedded in a delivery sprint.
                        </p>
                        <p>
                            I take a small number of engagements a year, mostly across Europe and the GCC. Small pieces
                            that are not under NDA end up on the{' '}
                            <Link to="/projects" className="text-primary hover:opacity-80 transition-opacity">
                                projects page
                            </Link>
                            .{/* todo : blog - , and the lessons that generalize end up in writing.*/}
                        </p>
                    </div>
                }
            />

            {/* Track record */}
            <SectionCount
                className="md:pt-24 pb-32"
                text="wide"
                section="TRACK RECORD"
                title={<>Some of the companies I have led AI work for.</>}
            >
                {[
                    {
                        title: 'Docebo',
                        title2: 'Director of AI Engineering',
                        url: 'https://www.docebo.com/',
                        description:
                            'Led the team building AI features for a global learning platform, taking practical applications of LLMs from prototype to enterprise rollout.'
                    },
                    {
                        title: 'Axelered',
                        title2: 'Chief Artificial Intelligence Officer',
                        url: 'https://axelered.com/',
                        description:
                            'Leading a young, sharp team toward state-of-the-art AI document automation for regulated environments. Taking enterprises from manual review to production-grade AI.'
                    },
                    {
                        title: 'Aindo',
                        title2: 'Chief Technology Officer',
                        url: 'https://www.aindo.com/',
                        description:
                            'Led a young team of very talented people toward disruptive innovations in synthetic data and generative AI for regulated industries.'
                    }
                    // {
                    //     title: 'Xtlan',
                    //     title2: 'Senior Software Engineer',
                    //     url: 'https://www.ixtlan-team.si/',
                    //     description:
                    //         'Built a variety of interactive tools and computational engines supporting the daily work of the finance ministry.'
                    // }
                ]}
            </SectionCount>

            {/* CTA */}
            <section id="contact">
                <a href="mailto:borut@svara.io" className="group">
                    <ContainerNotch
                        className="text-primary-fg"
                        notchTopRight={
                            <div className="text-primary p-4">
                                <ArrowUpRightIcon className="size-18 group-hover:translate-x-6 group-hover:-translate-y-6 transition-all" />
                            </div>
                        }
                    >
                        <div className="flex flex-col gap-12 py-12 md:py-16">
                            <p className="max-w-3xl text-4xl font-bold md:text-5xl">
                                Thinking about fractional AI support, or just want to talk?
                            </p>
                            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
                                <p className="text-2xl font-bold md:text-3xl">borut@svara.io</p>
                            </div>
                        </div>
                    </ContainerNotch>
                </a>
            </section>

            {/* Featured Projects */}
            <SectionRepo
                direction="column"
                className="py-32"
                title={<>Projects</>}
                description={
                    <div className="space-y-4">
                        <p>
                            Three small, opinionated bets on how agents should talk to APIs, how their state should
                            reach the UI, and where they should actually run.
                        </p>
                        <Link
                            to="/projects"
                            className="text-primary group hover:opacity-90 transition-opacity inline-flex gap-2 items-center"
                        >
                            See all projects{' '}
                            <ArrowRightIcon className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                }
            >
                {projectsFeatured}
            </SectionRepo>

            <Footer />
        </>
    )
}
