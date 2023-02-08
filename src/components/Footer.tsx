import React, { ReactNode, useMemo } from 'react';
import { BoltIcon } from '@heroicons/react/24/outline';
import { ReactComponentLike } from 'prop-types';
import { SocialLinks } from '@/components/SocialLinks';
import { Container } from '@/components/Container';


export function Footer() {

    const year = useMemo(() => (new Date()).getFullYear(), [])

    return (
        <Container className='bg-zinc-900 pt-32 pb-16 text-white space-y-16'>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24'>
                <p className='col-span-1 lg:col-span-2 xl:col-span-1 text-5xl md:text-6xl font-bold max-w-3xl'>
                    SvaraBorut
                </p>
                <div className='-mx-2 xl:hidden'>
                    <SocialLinks compact />
                </div>
                <div className='hidden col-span-2 xl:flex items-center justify-end'>
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
                <p>svaraborut.com</p>
            </div>

        </Container>
    )
}

