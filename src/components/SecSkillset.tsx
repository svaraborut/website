import React, { ReactNode } from 'react';
import {
    BoltIcon,
    CircleStackIcon,
    CloudIcon,
    FireIcon,
    LightBulbIcon,
    WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import { ReactComponentLike } from 'prop-types';
import { SpanFlash } from '@/components/SpanFlash';
import { Container } from '@/components/Container';

export interface SecSkillsetItem {
    Icon: ReactComponentLike
    title: string
    description: string
}

export interface SecSkillsetProps {
    exps: SecSkillsetItem[]
}


export function SecSkillset() {

    let props: SecSkillsetProps = {
        exps: [
            {
                Icon: LightBulbIcon,
                title: 'Software Architect',
                description: 'As projects grow in size and complexity a good design and selecting the best technologies is the key to success.'
            },
            {
                Icon: FireIcon,
                title: 'Artificial Intelligence',
                description: 'Working with the wonderful team at Aindo has taught me a lot about the most advanced AI and its use in production.'
            },
            {
                Icon: CircleStackIcon,
                title: 'Big Data',
                description: 'I\'m focused toward managing and using data at scale, ranging from sub millisecond searches to computation over terabytes.'
            },
            {
                Icon: CloudIcon,
                title: 'Cloud',
                description: 'As projects are becoming more demanding, cloud is a crucial piece each company should use and master.'
            },
            // {
            //     Icon: WrenchScrewdriverIcon,
            //     title: 'Operations',
            //     // todo : write about CI/CD, migrations
            //     description: 'Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.'
            // },
        ]
    }

    return (
        <Container className='py-32 text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24'>

            <div className='sm:col-span-2 lg:col-span-1 lg:row-span-2'>
                <p className='text-5xl md:text-6xl font-bold max-w-3xl mb-16'>
                    Skillset
                </p>
                <p className='text-lg text-gray-500 mb-4'>
                    I spent the past 10 year perfecting my skills to master any modern tech challenge.
                    {/*With skills in over 4 different fields of design,*/}
                    {/*I am the perfect person to hire when it comes to a full fledged project.*/}
                    {/*Whatever your needs are, I can pretty much take on any challenge.*/}
                </p>
            </div>

            {props.exps.map((ex, ix) => (
                <div key={ix} className='space-y-6 group'>
                    {/*<ex.Icon className='w-16 h-16 text-gray-400 group-hover:text-pink-600 transition duration-500' />*/}
                    <ex.Icon className='w-14 h-14 text-pink-600 group-hover:text-fuchsia-600 transition duration-500' />
                    <p className='text-2xl font-bold leading-none'>{ex.title}</p>
                    <p className='text-gray-500 leading-relaxed'>{ex.description}</p>
                </div>
            ))}

        </Container>
    )
}

