import Head from 'next/head'
import { SecExperiences } from '@/components/SecExperiences';
import { SecSkillset } from '@/components/SecSkillset';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { createOgImage } from '@/utils/ogImage';

// Inspired by
// https://webflow.com/made-in-webflow/website/Portfolio-Website-Free-Template

export interface HomePageProps {
    ogImage?: string
    title: string
    description: string
    url: string
}

export async function getStaticProps({ }) {

    const title = 'I\'m Borut Svara'
    const description = 'a tech expert based in Italy.'

    const ogImage = await createOgImage({
        path: './public/ogi',
        title: title,
        subtitle: description,
    })

    return {
        props: {
            ogImage: `/ogi/${ogImage}`,
            title,
            description,
            url: `https://svaraborut.com` // todo : automate
        }
    }
}

export default function Home({ ogImage, title, description, url }: HomePageProps) {
    return (
        <>
            <Head>

                <link rel='icon' href='/favicon.ico'/>
                <meta name='theme-color' content='#171717'/>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>

                {/* Generic Meta Tags */}
                <title>{title}</title>
                <meta name='description' content={description}/>

                {/* OpenGraph (Facebook) Meta Tags */}
                <meta property='og:type' content='website'/>
                <meta property='og:url' content={url}/>
                <meta property='og:title' content={title}/>
                <meta property='og:description' content={description}/>
                <meta property='og:image' content={ogImage}/>

                {/* Twitter Meta Tags */}
                <meta name='twitter:card' content='summary_large_image'/>
                {/*<meta property='twitter:domain' content=''>*/}
                <meta property='twitter:url' content={url}/>
                <meta name='twitter:title' content={title}/>
                <meta name='twitter:description' content={description}/>
                <meta name='twitter:image' content={ogImage}/>

            </Head>
            <main>
                <Header/>
                <SecSkillset/>
                <SecExperiences/>
                <Footer/>
            </main>
        </>
    )
}
