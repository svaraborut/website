import fs from 'fs'
import path from 'path';
import { ImageResponse } from '@vercel/og';
import type { OgiProps } from '@comp/Ogi.tsx';
import { Ogi } from '@comp/Ogi.tsx';
import { createElement } from 'react';

// Generating OPEN graph images
// https://www.kozhuhds.com/blog/generating-static-open-graph-og-images-in-astro-using-vercel-og

export function getStaticPaths() {
    return [
        {
            params: {
                id: 'i',
            },
            props: {
                title: 'I\'m Borut Svara',
                description: 'a tech expert based in Italy.',
            } as OgiProps
        }
    ]
}

export async function GET({ props }: any) {

    // Render a TSX component
    // https://vercel.com/docs/functions/edge-functions/og-image-generation
    return new ImageResponse(createElement(Ogi, props), {
        width: 1200,
        height: 630,
        fonts: [
            {
                name: 'sen',
                data: fs.readFileSync(path.resolve('./src/assets/fonts/sen4.otf')).buffer,
                style: 'normal',
                weight: 400,
            },
            {
                name: 'sen',
                data: fs.readFileSync(path.resolve('./src/assets/fonts/sen7.otf')).buffer,
                style: 'normal',
                weight: 700,
            },
            {
                name: 'sen',
                data: fs.readFileSync(path.resolve('./src/assets/fonts/sen8.otf')).buffer,
                style: 'normal',
                weight: 800,
            }
        ]
    })

}
