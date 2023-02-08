import React, { ReactNode } from 'react';
import { BoltIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { ReactComponentLike } from 'prop-types';
import { GitHubIcon, LinkedinIcons, StackOverflowIcon } from '@/components/icons';
import { SocialLinks } from '@/components/SocialLinks';
import { SpanFlash } from '@/components/SpanFlash';
import { Container } from '@/components/Container';



export function Header() {

    return (
        <Container className='bg-zinc-900 text-white'>

            <div className='h-2 w-full bg-gradient-to-r from-pink-600 to-fuchsia-600' />

            <div className='py-32 lg:py-48 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 xl:gap-24'>

                <p className='lg:col-span-2 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold max-w-3xl mb-16'>
                    I&apos;m Borut Svara
                    <span className='text-gray-500'>, a </span>
                    <SpanFlash>tech</SpanFlash>
                    <span className='text-gray-500'> expert based in Italy.</span>
                </p>
                <div className='-mx-4 lg:mx-0 text-lg text-gray-500 mb-4 flex flex-col justify-center'>
                    <SocialLinks/>
                </div>

            </div>
        </Container>
    )
}

