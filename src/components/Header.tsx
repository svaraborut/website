import React from 'react';
import { Container } from '@comp/Container.tsx';
import { SpanFlash } from '@comp/SpanFlash.tsx';
import { SocialLinks } from '@comp/SocialLinks.tsx';


export function Header() {

    return (
        <Container className='bg-zinc-900 text-white'>
            <div className='h-2 w-full bg-gradient-to-r from-pink-600 to-fuchsia-600' />
            <div className='grid grid-cols-1 gap-8 py-32 lg:grid-cols-3 lg:py-48 xl:grid-cols-3 xl:gap-24'>
                <p className='mb-16 max-w-3xl text-6xl font-bold md:text-7xl lg:col-span-2 lg:text-8xl xl:text-9xl'>
                    I&apos;m Borut Svara
                    <span className='text-gray-500'>, a </span>
                    <SpanFlash>tech</SpanFlash>
                    <span className='text-gray-500'> expert based in Italy.</span>
                </p>
                <div className='-mx-4 mb-4 flex flex-col justify-center text-lg text-gray-500 lg:mx-0'>
                    <SocialLinks/>
                </div>

            </div>
        </Container>
    )
}

