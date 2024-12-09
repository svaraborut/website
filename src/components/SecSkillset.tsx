import React from 'react';
import type {ReactComponentLike} from 'prop-types';
import {Container} from '@comp/Container.tsx';
import {CloudUploadIcon, DatabaseIcon, LightbulbIcon, SparklesIcon} from "lucide-react";


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
                Icon: LightbulbIcon,
                title: 'Software Architect',
                description: 'As projects grow in size and complexity a good design and selecting the best technologies is the key to success.'
            },
            {
                Icon: SparklesIcon,
                title: 'Artificial Intelligence',
                description: 'Working with the wonderful team at Aindo has taught me a lot about the most advanced AI and its use in production.'
            },
            {
                Icon: DatabaseIcon,
                title: 'Big Data',
                description: 'I\'m focused toward managing and using data at scale, ranging from sub millisecond searches to computation over terabytes.'
            },
            {
                Icon: CloudUploadIcon,
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
        <Container className='grid grid-cols-1 gap-24 py-32 text-white sm:grid-cols-2 lg:grid-cols-3'>

            <div className='sm:col-span-2 lg:col-span-1 lg:row-span-2'>
                <p className='mb-16 max-w-3xl text-5xl font-bold md:text-6xl'>
                    Skillset
                </p>
                <p className='mb-4 text-lg text-gray-500'>
                    I spent the past 10 year perfecting my skills to master any modern tech challenge.
                    {/*With skills in over 4 different fields of design,*/}
                    {/*I am the perfect person to hire when it comes to a full fledged project.*/}
                    {/*Whatever your needs are, I can pretty much take on any challenge.*/}
                </p>
            </div>

            {props.exps.map((ex, ix) => (
                <div key={ix} className='group space-y-6'>
                    {/*<ex.Icon className='w-16 h-16 text-gray-400 group-hover:text-pink-600 transition duration-500' />*/}
                    <ex.Icon strokeWidth={1.3} className='h-14 w-14 text-pink-600 transition duration-500 group-hover:text-fuchsia-600' />
                    <p className='text-2xl font-bold leading-none'>{ex.title}</p>
                    <p className='leading-relaxed text-gray-500'>{ex.description}</p>
                </div>
            ))}

        </Container>
    )
}

