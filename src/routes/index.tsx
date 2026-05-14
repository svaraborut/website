import type { Route } from './+types/index'
import { createMeta } from '~/lib/og'
import { Footer } from '~/components/Footer'
import { SecExp } from '~/components/SecExp'
import { SecExperiences } from '~/components/SecExperiences'
import { SecRepos } from '~/components/SecRepos'
import { SecSkillset } from '~/components/SecSkillset'
import { Header } from '~/components/Header'

export async function loader({ params }: Route.LoaderArgs) {
    // todo : move repo to github actions and use @svaraborut/watermarks
    const watermark = `${import.meta.env.CF_PAGES_BRANCH}.${import.meta.env.CF_PAGES_COMMIT_SHA?.substring(0, 7)}`
    return { watermark }
}

export function meta({ loaderData }: Route.MetaArgs) {
    return createMeta({
        type: 'website',
        title: "I'm Borut Svara",
        description: "I'm Borut Svara, a tech expert based in UAE.",
        image: '/og/ogi_i.png',
        url: '/'
    })
}

export default function Page({ loaderData }: Route.MetaArgs) {
    return (
        <>
            <Header />
            <SecSkillset />
            <SecRepos />
            <SecExperiences />
            <SecExp />
            <Footer watermark={loaderData.watermark} />
        </>
    )
}
