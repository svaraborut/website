import { Container } from '@/components/Container';
import { SpanFlash } from '@/components/SpanFlash';
import React from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
    const route = useRouter()

    return (
        <Container className='bg-zinc-900 text-white'>
            <div className='h-2 w-full bg-gradient-to-r from-pink-600 to-fuchsia-600'/>

            <div className='py-32 lg:py-48 grid grid-cols-1 gap-8 xl:gap-24'>

                <p className='lg:col-span-2 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold max-w-3xl mb-16'>
                    <SpanFlash>404</SpanFlash>
                    <br/>Nothing here

                </p>

                <div>
                    <button
                        className='p-4 lg:p-8 text-xl lg:text-2xl bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white rounded'
                        onClick={() => route.push('/').catch(console.error)}
                    >
                        Go Back Home
                    </button>
                </div>

            </div>
        </Container>
    )
}
