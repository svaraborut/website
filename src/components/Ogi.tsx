import React from 'react';
import { HOSTNAME } from '../conf.ts';
import colors from 'tailwindcss/colors'

export interface OgiProps {
    title?: string
    description?: string
}

export function Ogi({ title, description }: OgiProps) {
    return (
        <div tw='flex h-full w-full flex-col bg-zinc-900 text-white px-16 pb-8 font-bold' >
            <div tw='h-4 w-full mb-24' style={{
                background: `linear-gradient(to right, ${colors.pink[600]}, ${colors.fuchsia[600]})`
            }} />
            <p tw='text-9xl'>
                {title}
            </p>
            <p tw='text-gray-500 text-7xl'>
                {description}
            </p>
            <div tw='flex-1'/>
            <p tw='text-3xl text-gray-500'>{HOSTNAME.name}</p>
        </div>
    )
}

