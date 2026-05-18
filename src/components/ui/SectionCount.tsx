import { Section, type SectionProps } from '~/components/ui/Section'
import React, { type ReactNode } from 'react'
import { cn } from '~/lib/utils'

export interface CountItem {
    category?: string
    title: ReactNode
    title2: ReactNode
    description: string
    url?: string
}

export type SectionCountProps = Omit<SectionProps, 'children'> & {
    children: CountItem[]
}

export function SectionCount({ children, ...rest }: SectionCountProps) {
    return (
        <Section {...rest}>
            <div
                className={cn('grid grid-cols-1 gap-24 sm:grid-cols-2', children.length % 2 === 1 && 'lg:grid-cols-3')}
            >
                {children.map((p, ix) => (
                    <div key={ix} className="space-y-6">
                        <p className="text-[8rem] leading-none text-gray-600">0{(ix + 1).toFixed(0)}</p>
                        {p.category && (
                            <p className="text-sm font-bold uppercase tracking-wider text-gray-500">
                                {p.category?.toUpperCase()}
                            </p>
                        )}
                        <div>
                            <a className="text-2xl font-bold leading-snug" href={p.url}>
                                <span className="text-primary">{p.title}</span>
                                {p.title2 && <>, {p.title2}</>}
                            </a>
                        </div>
                        <p className="leading-relaxed text-gray-500">{p.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    )
}
