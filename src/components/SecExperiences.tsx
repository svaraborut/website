import React from 'react';
import { SpanFlash } from '@/components/SpanFlash';
import { Container } from '@/components/Container';


export interface SecExperiencesItem {
    company: string
    link: string
    role: string
    description: string
}

export interface SecExperiencesProps {
    exps: SecExperiencesItem[]
}


export function SecExperiences() {

    let props: SecExperiencesProps = {
        exps: [
            {
                company: 'Aindo',
                link: 'https://www.aindo.com/',
                role: 'Chief Technology Officer',
                description: 'I currently am the leading a young team of very talented people toward disruptive innovations in the AI field.'
            },
            {
                company: 'Xtlan',
                link: 'https://www.ixtlan-team.si/',
                role: 'Senior Software Engineer',
                description: 'I\'ve worked on a variety of interactive tools and computational engines supporting the daily work of the finance ministry.'
            },
            {
                company: 'Trumpf',
                link: 'https://www.trumpf.com/',
                role: 'Research and Development',
                description: 'I started my career as a Software Engineer within this leading company, developing automation control units and HMIs.'
            },
        ]
    }

    return (
        <Container className='py-32 text-white'>
            <p className='text-lg font-bold text-gray-500 mb-4'>
                WORK EXPERIENCE
            </p>
            <p className='text-5xl md:text-6xl font-bold max-w-3xl mb-16'>
                Some of the companies I have worked with.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24'>
                {props.exps.map((ex, ix) => (
                    <div key={ix} className='space-y-6'>
                        <p className='text-[8rem] text-gray-600 leading-none'>0{(ix + 1).toFixed(0)}</p>
                        <a className='block text-2xl font-bold' href={ex.link}>
                            <SpanFlash>{ex.company}</SpanFlash>, {ex.role}
                        </a>
                        <p className='leading-relaxed text-gray-500'>{ex.description}</p>
                    </div>
                ))}
            </div>
        </Container>
    )
}

