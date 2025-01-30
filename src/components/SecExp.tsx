import React from 'react';
import type {ReactComponentLike} from 'prop-types';
import {Container} from '@comp/Container.tsx';
import {GitHubBadge, GitHubCopilot, NpmBadge} from "@assets/stackicons.tsx";
import {ConstructionIcon} from "lucide-react";


export interface SecExpItem {
    Icon: ReactComponentLike
    title: string
    description: string
    url?: string
    wip?: boolean
    stack?: ReactComponentLike[]
}

export interface SecExpProps {
    exps: SecExpItem[]
}


export function SecExp() {

    let props: SecExpProps = {
        exps: [
            {
                Icon: GitHubBadge,
                title: 'next-cf',
                description: 'Filly featured Next.js on edge with Cloudflare Pages.',
                url: 'https://github.com/svaraborut/next-cf'
            },
            {
                Icon: GitHubBadge,
                title: 'next-i18n',
                description: 'Dynamic and SEO compliant i18n on Next.js App Router.',
                url: 'https://github.com/svaraborut/next-i18n',
            },
            {
                Icon: GitHubBadge,
                title: 'npmsemver',
                description: 'Automated GitOps with semantic releases for GitHub.',
                url: 'https://github.com/svaraborut/npmsemver'
            },
            {
                Icon: GitHubBadge,
                title: 'website',
                description: 'Statically built astro website with SEO on Cloudflare.',
                url: 'https://github.com/svaraborut/website'
            },
        ]
    }

    return (
        <Container className='grid grid-cols-1 gap-24 py-32 text-white sm:grid-cols-2 lg:grid-cols-3'>

            <div className='sm:col-span-2 lg:col-span-1 lg:row-span-2'>
                <p className='mb-16 max-w-3xl text-5xl font-bold md:text-6xl'>
                    Stacks
                </p>
                <p className='mb-4 text-lg text-gray-500'>
                    Various production tested stacks to build non trivial projects and solutions.
                </p>
            </div>

            {props.exps.map((ex, ix) => (
                <a key={ix} className='group flex gap-6' href={ex.url} target='_blank'>
                    {/*<ex.Icon className='w-16 h-16 text-gray-400 group-hover:text-pink-600 transition duration-500' />*/}
                    <ex.Icon className='h-14 w-14 shrink-0 grow-0' />
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2'>
                            {ex.wip && <ConstructionIcon className='h-6 w-6' />}
                            <p className='font-mono text-2xl font-bold leading-none transition duration-500 group-hover:text-pink-600'>{ex.title}</p>
                        </div>
                        <p className='leading-relaxed text-gray-500'>{ex.description}</p>
                        {/*<div className='flex gap-4'>*/}
                        {/*    {ex.stack?.map(Icon => <Icon className='h-8 w-8' />)}*/}
                        {/*</div>*/}
                    </div>
                </a>
            ))}

        </Container>
    )
}

