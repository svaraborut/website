import { type AnchorHTMLAttributes, type HTMLAttributes, type ReactNode } from 'react'
import { useMDXComponent } from '@content-collections/mdx/react'
import { cn } from '~/lib/utils'

type MdxProps = { code: string }

const components = {
    h1: (props: HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className="mt-16 mb-8 text-4xl font-bold sm:text-5xl md:text-6xl text-balance" {...props} />
    ),
    h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className="mt-16 mb-6 text-3xl font-bold sm:text-4xl md:text-5xl text-balance" {...props} />
    ),
    h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
        <h3 className="mt-12 mb-4 text-2xl font-bold sm:text-3xl text-balance" {...props} />
    ),
    h4: (props: HTMLAttributes<HTMLHeadingElement>) => (
        <h4 className="mt-8 mb-3 text-xl font-bold sm:text-2xl text-balance" {...props} />
    ),
    p: (props: HTMLAttributes<HTMLParagraphElement>) => (
        <p className="my-6 text-lg leading-relaxed text-gray-300" {...props} />
    ),
    a: ({ href, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
        const external = !!href && /^https?:\/\//.test(href)
        return (
            <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="text-primary underline-offset-4 hover:underline"
                {...rest}
            />
        )
    },
    ul: (props: HTMLAttributes<HTMLUListElement>) => (
        <ul className="my-6 ml-6 list-disc space-y-2 text-lg text-gray-300 marker:text-primary" {...props} />
    ),
    ol: (props: HTMLAttributes<HTMLOListElement>) => (
        <ol className="my-6 ml-6 list-decimal space-y-2 text-lg text-gray-300 marker:text-primary" {...props} />
    ),
    li: (props: HTMLAttributes<HTMLLIElement>) => <li className="leading-relaxed" {...props} />,
    blockquote: (props: HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote
            className="my-8 border-l-4 border-primary pl-6 text-lg italic text-gray-200"
            {...props}
        />
    ),
    hr: (props: HTMLAttributes<HTMLHRElement>) => <hr className="my-12 border-secondary" {...props} />,
    code: ({ className, ...rest }: HTMLAttributes<HTMLElement>) => (
        <code
            className={cn(
                'font-mono text-[0.9em]',
                // Inline only: rehype-pretty-code adds data-language on block <code>.
                !className && 'rounded bg-secondary px-1.5 py-0.5 text-primary',
                className
            )}
            {...rest}
        />
    ),
    pre: ({ className, children, ...rest }: HTMLAttributes<HTMLPreElement>) => (
        <pre
            className={cn(
                'my-8 overflow-x-auto rounded-lg border border-secondary bg-secondary/40 p-4 text-sm leading-relaxed',
                className
            )}
            {...rest}
        >
            {children}
        </pre>
    ),
    img: (props: HTMLAttributes<HTMLImageElement> & { src?: string; alt?: string }) => (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img className="my-8 w-full rounded-lg" loading="lazy" {...props} />
    )
}

export function Mdx({ code }: MdxProps): ReactNode {
    const Component = useMDXComponent(code)
    return <Component components={components} />
}
