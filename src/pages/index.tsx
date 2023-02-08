import Head from 'next/head'
import { SecExperiences } from '@/components/SecExperiences';
import { SecSkillset } from '@/components/SecSkillset';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

// Inspired by
// https://webflow.com/made-in-webflow/website/Portfolio-Website-Free-Template

export default function Home() {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="theme-color" content="#171717"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Borut Svara</title>
                <meta name="description" content="I'm Borut Svara, a tech expert based in Italy."/>
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
