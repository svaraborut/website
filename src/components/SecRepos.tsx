import React from 'react';
import type {ReactComponentLike} from 'prop-types';
import {Container} from '@comp/Container.tsx';
import {GitHubBadge, GitHubCopilot, NpmBadge} from "@assets/stackicons.tsx";
import {ConstructionIcon} from "lucide-react";


export interface SecReposItem {
    Icon: ReactComponentLike
    title: string
    description: string
    url?: string
    wip?: boolean
    stack?: ReactComponentLike[]
}

export interface SecReposProps {
    exps: SecReposItem[]
}


export function SecRepos() {

    let props: SecReposProps = {
        exps: [
            {
                Icon: NpmBadge,
                title: '@reactit/hooks',
                description: 'Nice collection oh higher-order React hooks.',
                url: 'https://www.npmjs.com/package/@reactit/hooks'
                // stack: [TypeScriptBadge, ReactBadge]
            },
            // {
            //     Icon: GitHubBadge,
            //     title: '@reactit/async',
            //     description: 'React hooks to streamline async actions.',
            //     url: 'https://github.com/svaraborut/reactit-async'
            // },
            {
                Icon: GitHubCopilot,
                title: 'watermark',
                description: 'GitHub action for professional CI/CD watermarks',
                url: 'https://github.com/marketplace/actions/build-watermark',
            },
            {
                Icon: GitHubBadge,
                title: 'b32',
                description: 'Fast Base32 conversion in Node.js RFC4648 compliant.',
                url: 'https://github.com/svaraborut/b32'
            },
            {
                Icon: GitHubBadge,
                title: 'declined',
                description: 'Integrate Stripe in your app to in less than 10 minutes.',
                // url: 'https://github.com/svaraborut/declined',
                wip: true
            },
        ]
    }

    return (
        <Container className='grid grid-cols-1 gap-24 py-32 text-white sm:grid-cols-2 lg:grid-cols-3'>

            <div className='sm:col-span-2 lg:col-span-1 lg:row-span-2'>
                <p className='mb-16 max-w-3xl text-5xl font-bold md:text-6xl'>
                    Packages
                </p>
                <p className='mb-4 text-lg text-gray-500'>
                    I love to build amazing things and when possible share them with the world.
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

