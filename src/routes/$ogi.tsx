import type { Route } from './+types/$ogi'
import { ImageResponse } from '@vercel/og'
import React, { createElement } from 'react'
import { HOSTNAME } from '~/conf'

// Fonts

export interface OgiProps {
    title?: string
    description?: string
}

export function Ogi({ title, description }: OgiProps) {
    return (
        <div tw="flex h-full w-full flex-col bg-zinc-900 text-white px-16 pb-8 font-bold">
            <div
                tw="h-4 w-full mb-24"
                style={{
                    // tailwind has now oklch() colors, we cannot extract them from there anymore
                    background: `linear-gradient(to right, #c93b76, #b336cc)`
                }}
            />
            <p tw="text-9xl">{title}</p>
            <p tw="text-gray-500 text-7xl">{description}</p>
            <div tw="flex-1" />
            <p tw="text-3xl text-gray-500">{HOSTNAME.name}</p>
        </div>
    )
}

// Generating OPEN graph images
const images = [
    {
        name: 'index.png',
        props: {
            title: "I'm Borut Svara",
            description: 'a tech expert based in UAE.'
        } as OgiProps
    }
]

export async function loader({ params }: Route.LoaderArgs) {
    const props = images.find((i) => i.name === params.name)?.props
    if (!props) throw new Response('Not found', { status: 404 })

    // Render a TSX component
    // https://vercel.com/docs/functions/edge-functions/og-image-generation
    return new ImageResponse(createElement(Ogi, props), {
        width: 1200,
        height: 630,
        fonts: [
            {
                name: 'sen',
                data: await fetch('https://fonts.gstatic.com/s/sen/v12/6xK0dSxYI9_dkN18-vZKK2EISCq5H44.ttf').then(
                    (res) => res.arrayBuffer()
                ),
                style: 'normal',
                weight: 400
            }
        ]
    })
}
