import './assets/global.css'
import { type ReactNode } from 'react'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import type { Route } from './+types/root'
import PageNotFound from '~/routes/404'
import { HOSTNAME } from '~/conf'

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Person',
            '@id': `${HOSTNAME.url}/#person`,
            name: 'Borut Svara',
            url: HOSTNAME.url,
            jobTitle: 'Fractional Head of AI',
            sameAs: [
                'https://www.linkedin.com/in/borutsvara',
                'https://github.com/svaraborut',
                'https://stackoverflow.com/users/5424426/newbie'
            ]
        },
        {
            '@type': 'WebSite',
            '@id': `${HOSTNAME.url}/#website`,
            url: HOSTNAME.url,
            name: HOSTNAME.name,
            publisher: { '@id': `${HOSTNAME.url}/#person` }
        }
    ]
}

export function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#171717" />
                <Meta />
                <Links />
                {/* JSON-LD: serialized from a controlled constant, safe to inline */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default function App() {
    return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    if (import.meta.env.DEV) {
        let details = 'An unexpected error occurred.'
        let stack: string | undefined
        if (error && error instanceof Error) {
            details = error.message
            stack = error.stack
        }
        return (
            <main className="pt-16 p-4 container mx-auto">
                <h1>Oops!</h1>
                <p>{details}</p>
                {stack && (
                    <pre className="w-full p-4 overflow-x-auto">
                        <code>{stack}</code>
                    </pre>
                )}
            </main>
        )
    } else {
        return <PageNotFound />
    }
}
