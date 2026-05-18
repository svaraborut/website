import type { Route } from './+types/index'
import { createMeta } from '~/lib/og'
import { Footer } from '~/components/sections/Footer'
import { Header } from '~/components/sections/Header'
import { Container } from '~/components/ui/Container'
import { SocialLinks } from '~/components/SocialLinks'
import React from 'react'
import { CloudUploadIcon, DatabaseIcon, LightbulbIcon, SparklesIcon } from 'lucide-react'
import { SectionRepo } from '~/components/ui/SectionRepo'
import { SectionCount } from '~/components/ui/SectionCount'
import { SectionItem } from '~/components/ui/SectionItems'

export function meta({ loaderData }: Route.MetaArgs) {
    return createMeta({
        type: 'website',
        title: "I'm Borut Svara",
        description: "I'm Borut Svara, a tech expert based in UAE.",
        image: '/og/ogi_i.png',
        url: '/'
    })
}

export default function Page({ loaderData }: Route.MetaArgs) {
    return (
        <>
            <Header>
                <h1>I'm Borut Svara, a tech expert based in UAE.</h1>
            </Header>

            {/* Social links bar */}
            <Container className="flex justify-center py-16 text-white">
                <SocialLinks horizontal />
            </Container>

            {/* Skills */}
            <SectionItem
                className="py-32"
                title={<>Skillset</>}
                description={<>I spent the past 10 year perfecting my skills to master any modern tech challenge.</>}
            >
                {[
                    {
                        Icon: LightbulbIcon,
                        title: 'Software Architect',
                        description:
                            'As projects grow in size and complexity a good design and selecting the best technologies is the key to success.'
                    },
                    {
                        Icon: SparklesIcon,
                        title: 'Artificial Intelligence',
                        description:
                            'Working with the wonderful team at Aindo has taught me a lot about the most advanced AI and its use in production.'
                    },
                    {
                        Icon: DatabaseIcon,
                        title: 'Big Data',
                        description:
                            "I'm focused toward managing and using data at scale, ranging from sub millisecond searches to computation over terabytes."
                    },
                    {
                        Icon: CloudUploadIcon,
                        title: 'Cloud',
                        description:
                            'As projects are becoming more demanding, cloud is a crucial piece each company should use and master.'
                    }
                    // {
                    //     Icon: WrenchScrewdriverIcon,
                    //     title: 'Operations',
                    //     // todo : write about CI/CD, migrations
                    //     description: 'Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.'
                    // },
                ]}
            </SectionItem>

            {/* Repositories */}
            <SectionRepo
                className="py-32"
                title={<>Packages</>}
                description={<>I love to build amazing things and when possible share them with the world.</>}
            >
                {[
                    {
                        type: 'npm',
                        title: '@reactit/hooks',
                        description: 'Nice collection oh higher-order React hooks.',
                        url: 'https://www.npmjs.com/package/@reactit/hooks'
                    },
                    // {
                    //     Icon: GitHubBadge,
                    //     title: '@reactit/async',
                    //     description: 'React hooks to streamline async actions.',
                    //     url: 'https://github.com/svaraborut/reactit-async'
                    // },
                    {
                        type: 'copilot',
                        title: 'watermark',
                        description: 'GitHub action for professional CI/CD watermarks.',
                        url: 'https://github.com/marketplace/actions/build-watermark'
                    },
                    {
                        type: 'github',
                        title: 'b32',
                        description: 'Fast Base32 conversion in Node.js RFC4648 compliant.',
                        url: 'https://github.com/svaraborut/b32'
                    },
                    {
                        type: 'github',
                        tag: 'wip',
                        title: 'declined',
                        description: 'Integrate Stripe in your app to in less than 10 minutes.'
                    }
                ]}
            </SectionRepo>

            <SectionCount
                className="py-32"
                text="wide"
                section="WORK EXPERIENCE"
                title={<>Some of the companies I have worked with.</>}
            >
                {[
                    {
                        title: 'Docebo',
                        title2: 'Director of AI Engineering',
                        url: 'https://www.docebo.com/',
                        description:
                            'I lead the tech team focused on building AI features, and pioneering practical applications of AI into LMS.'
                    },
                    {
                        title: 'Aindo',
                        title2: 'Chief Technology Officer',
                        url: 'https://www.aindo.com/',
                        description:
                            'I was leading a young team of very talented people toward disruptive innovations in the AI field.'
                    },
                    {
                        title: 'Xtlan',
                        title2: 'Senior Software Engineer',
                        url: 'https://www.ixtlan-team.si/',
                        description:
                            'I developed a variety of interactive tools and computational engines supporting the daily work of the finance ministry.'
                    }
                    // {
                    //     company: 'Trumpf',
                    //     link: 'https://www.trumpf.com/',
                    //     role: 'Research and Development',
                    //     description: 'I started as a Software Engineer within this leading company, developing automation control units and HMIs.'
                    // },
                ]}
            </SectionCount>

            {/* Stacks */}
            <SectionRepo
                className="py-32"
                title={<>Stacks</>}
                description={<>Various production tested stacks to build non trivial projects and solutions.</>}
            >
                {[
                    {
                        type: 'github',
                        title: 'next-cf',
                        description: 'Filly featured Next.js on edge with Cloudflare Pages.',
                        url: 'https://github.com/svaraborut/next-cf'
                    },
                    {
                        type: 'github',
                        title: 'next-i18n',
                        description: 'Dynamic and SEO compliant i18n on Next.js App Router.',
                        url: 'https://github.com/svaraborut/next-i18n'
                    },
                    {
                        type: 'github',
                        title: 'npmsemver',
                        description: 'Automated GitOps with semantic releases for GitHub.',
                        url: 'https://github.com/svaraborut/npmsemver'
                    },
                    {
                        type: 'github',
                        title: 'website',
                        description: 'Statically built astro website with SEO on Cloudflare.',
                        url: 'https://github.com/svaraborut/website'
                    }
                ]}
            </SectionRepo>

            <Footer />
        </>
    )
}
