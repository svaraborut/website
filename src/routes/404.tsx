import type { Route } from './+types/index'
import { createMeta } from '~/lib/og'
import { Container } from '~/components/Container'
import { SpanFlash } from '~/components/SpanFlash'

export function meta({ loaderData }: Route.MetaArgs) {
    return createMeta({
        type: 'website',
        title: "I'm Borut Svara",
        description: "I'm Borut Svara, a tech expert based in UAE.",
        image: '/og/index.png',
        url: '/'
    })
}

// todo : move repo to github actions and use @svaraborut/watermarks
const watermark = `${import.meta.env.CF_PAGES_BRANCH}.${import.meta.env.CF_PAGES_COMMIT_SHA?.substring(0, 7)}`

export default function Page() {
    return (
        <Container className="bg-zinc-900 text-white">
            <div className="h-2 w-full bg-gradient-to-r from-pink-600 to-fuchsia-600" />

            <div className="py-32 lg:py-48 grid grid-cols-1 gap-8 xl:gap-24">
                <p className="lg:col-span-2 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold max-w-3xl mb-16">
                    <SpanFlash>404</SpanFlash>
                    <br />
                    Nothing here
                </p>
                <div>
                    <a
                        className="p-4 lg:p-8 text-xl lg:text-2xl bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white rounded"
                        href="/"
                    >
                        Go Back Home
                    </a>
                </div>
            </div>
        </Container>
    )
}
