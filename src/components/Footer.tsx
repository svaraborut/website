import React, { useMemo } from 'react';
import { Container } from '@comp/Container.tsx';
import { HOSTNAME, HOSTNAME_ALL } from '../conf.ts';
import { SocialLinks } from '@comp/SocialLinks.tsx';

export function Footer() {

    const year = useMemo(() => (new Date()).getFullYear(), [])

    return (
        <Container className='space-y-16 bg-zinc-900 pb-16 pt-32 text-white'>

            <div className='grid grid-cols-1 gap-24 md:grid-cols-2 lg:grid-cols-3'>
                <p className='col-span-1 max-w-3xl text-5xl font-bold md:text-6xl lg:col-span-2 xl:col-span-1'>
                    {HOSTNAME.name}
                </p>
                <div className='-mx-2 xl:hidden'>
                    <SocialLinks compact />
                </div>
                <div className='col-span-2 hidden items-center justify-end xl:flex'>
                    <SocialLinks compact horizontal />
                </div>
            </div>

            {/*<div className='col-span-3'>*/}
            {/*    <p className='text-lg text-gray-500 mb-4'>*/}
            {/*        With skills in over 4 different fields of design.*/}
            {/*    </p>*/}
            {/*</div>*/}

            <div className='col-span-full flex justify-between text-gray-500'>
                <p>© Copyright {year.toFixed(0)}</p>
                <p>{HOSTNAME_ALL.map(x => x.name).join(', ')}</p>
            </div>

        </Container>
    )
}

