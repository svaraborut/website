import type { Route } from './+types/index'
import { createMeta } from '~/lib/og'
import { Footer } from '~/components/sections/Footer'
import { Header } from '~/components/sections/Header'
import { ContainerNotch, Notch } from '~/components/ui/Notch'
import {
    ArrowUpRightIcon,
    AudioWaveformIcon,
    DatabaseZapIcon,
    GitPullRequestArrowIcon,
    MessagesSquareIcon,
    SearchIcon,
    WorkflowIcon
} from 'lucide-react'
import React from 'react'
import { Section } from '~/components/ui/Section'
import { SectionItem } from '~/components/ui/SectionItems'
import { SectionCount } from '~/components/ui/SectionCount'

export function meta({ loaderData }: Route.MetaArgs) {
    return createMeta({
        type: 'website',
        title: 'Fractional AI - Borut Svara',
        description:
            'I take on a small number of AI engineering engagements per year. Diagnostics, blueprints, and embedded advisory for teams shipping production AI.',
        image: '/og/ogi_i.png',
        url: '/consulting'
    })
}

export default function Page({ loaderData }: Route.MetaArgs) {
    return (
        <>
            <Header>
                <div className="space-y-8">
                    <h1>fractional</h1>
                    <p className="text-4xl">Fractional AI leadership in the GCC and Europe</p>
                </div>
            </Header>

            {/* Intro */}
            <Section
                className="py-32"
                title={<>A small number of engagements a year, picked carefully.</>}
                description={
                    <div className="space-y-8">
                        <p>
                            I work alongside teams that are already serious about AI and want a second set of hands and
                            eyes on the work. Most of what I do sits between architecture, delivery, and supporting the
                            calls a CTO has to make.
                        </p>
                        <p>
                            I tend to be useful when there is a real system to ship, a stuck initiative to unblock, or a
                            hard call to make about model strategy, vendor lock-in, or architecture design.
                        </p>
                    </div>
                }
            />

            {/* Engagement shapes */}
            <Section
                className="md:py-32"
                section="OFFERING"
                title={<>Fractional AI leadership, with two ways to start smaller.</>}
                description={
                    <>
                        Most of my year goes into fractional leadership for a small number of engineering-led teams.
                        Audit and Build are the two most common ways to start, and both routinely turn into a Fractional
                        engagement once the fit is clear.
                    </>
                }
            >
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            tag: 'START HERE',
                            title: 'Audit',
                            duration: '3 weeks',
                            // price: '$20k flat',
                            description:
                                'A fixed-scope deep look at where your AI work stands. You leave with an honest assessment, a prioritized 90-day plan your board and your engineers can both work from, and working code spikes and blueprints on the technical paths that were still blurry.'
                        },
                        {
                            tag: 'SHIP IT',
                            title: 'Build',
                            duration: '8 to 16 weeks',
                            // price: '$60 to 120k',
                            description:
                                'Co-built delivery of one specific AI capability into production. An agent, a RAG platform, an automation pipeline, or a new product surface. I lead architecture and implement the hard parts alongside your team, who own it after I leave.'
                        },
                        {
                            tag: 'PRIMARY',
                            title: 'Fractional',
                            duration: '3 month minimum',
                            // price: '$16k / mo',
                            description:
                                'Seven days a month as your fractional Head of AI. I own the AI roadmap, lead hiring for the function, sit in on exec reviews, and carry authority on the AI initiatives that matter. For teams hiring their first AI leader, between hires, or recovering from a stalled AI push.'
                        }
                    ].map((eng, ix) => (
                        <Notch
                            key={ix}
                            variant="compact"
                            classColor="bg-secondary"
                            notchBottomRight={
                                <div className="px-4 py-2 text-lg font-bold text-end text-primary">{eng.price}</div>
                            }
                        >
                            <div className="flex flex-col gap-6 p-6 text-white">
                                <div className="flex flex-col gap-2">
                                    <p className="text-xs font-bold uppercase tracking-widest text-primary">
                                        {eng.tag}
                                    </p>
                                    <p className="text-4xl font-bold">{eng.title}</p>
                                    <p className="font-bold uppercase tracking-wider text-primary">{eng.duration}</p>
                                </div>
                                <p className="text-lg leading-relaxed text-gray-200">{eng.description}</p>
                            </div>
                        </Notch>
                    ))}
                </div>
            </Section>

            {/* Capabilities */}
            <SectionItem
                className="py-32"
                section="CAPABILITIES"
                title={<>What I build</>}
                description={
                    <>
                        The work tends to cluster in a handful of shapes. Whatever the surface, the goal is the same. AI
                        that holds up in production, under cost pressure, and under scrutiny.
                    </>
                }
            >
                {[
                    {
                        Icon: AudioWaveformIcon,
                        title: 'Large-scale AI agents',
                        description:
                            'Multi-step agentic systems with thoughtful tool use, memory, and failure handling. Designed to hold up under real workloads.'
                    },
                    {
                        Icon: SearchIcon,
                        title: 'Production RAG at scale',
                        description:
                            'Retrieval pipelines that keep working past the first thousand documents. Chunking, hybrid search, evals, and the observability that makes them reliable over time.'
                    },
                    {
                        Icon: WorkflowIcon,
                        title: 'Workflow automation',
                        description:
                            'Replacing manual handoffs and brittle scripts with something more durable. AI where it adds real value, plain code where it serves the team better.'
                    },
                    {
                        Icon: MessagesSquareIcon,
                        title: 'Conversational interfaces',
                        description:
                            'Chat and voice surfaces that route, retrieve, and act. Connected to the systems your team already operates.'
                    },
                    {
                        Icon: GitPullRequestArrowIcon,
                        title: 'Engineering flow optimization',
                        description:
                            'AI-native development practices, code review, and internal tooling that help engineering teams get meaningfully faster end-to-end.'
                    },
                    {
                        Icon: DatabaseZapIcon,
                        title: 'Architecture and due diligence',
                        description:
                            'A second set of eyes on the hard calls. Vendor selection, build-vs-buy, model strategy, latency and cost budgets, regulatory posture.'
                    }
                ]}
            </SectionItem>

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
                                Have a system to ship, a stuck initiative, or a hard call to make on AI?
                            </p>
                            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
                                <p className="text-2xl font-bold md:text-3xl">borut@svara.io</p>
                            </div>
                        </div>
                    </ContainerNotch>
                </a>
            </section>

            {/* Selected engagements */}
            <SectionCount
                className="py-32"
                text="wide"
                section="SELECTED ENGAGEMENTS"
                title={<>A sense of the work, anonymized.</>}
            >
                {[
                    {
                        category: 'Regulated SaaS',
                        title: 'Shipping a stalled LLM feature line',
                        title2: '',
                        description:
                            'Worked with the product and engineering team to move several months of accumulated PoCs through the architecture, evaluation, and rollout work needed to reach enterprise customers under their compliance review.'
                    },
                    {
                        category: 'US enterprise',
                        title: 'RAG platform at global scale',
                        title2: '',
                        description:
                            'Helped architect and deliver a retrieval system for a US enterprise operating at global scale. Tens of millions of documents, multi-region, with the latency, throughput, and cost discipline a platform needs once AI sits on the critical path.'
                    },
                    {
                        category: 'Series B scaleup',
                        title: 'AI org design and first senior hires',
                        title2: '',
                        description:
                            'Worked with the CTO to grow from a few isolated ML engineers into a coherent AI engineering function, including the first lead hire and the operating model around the team.'
                    },
                    {
                        category: 'European fintech',
                        title: 'Vendor and model strategy review',
                        title2: '',
                        description:
                            'A four-week diagnostic on model choice, build-vs-buy, and cost trajectory. Helped bring projected annual inference spend down meaningfully and unblock a roadmap decision the team had been deferring.'
                    }
                ]}
            </SectionCount>

            <Footer />
        </>
    )
}
