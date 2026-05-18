import { Section, type SectionProps } from '~/components/ui/Section'
import React, { type ComponentType } from 'react'

export interface ItemItem {
    Icon?: ComponentType
    title: string
    description: string
}

export type SectionItemProps = Omit<SectionProps, 'children'> & {
    children: ItemItem[]
}

export function SectionItem({ children, direction = 'column', ...rest }: SectionItemProps) {
    return (
        <Section direction={direction} {...rest}>
            <div className="grid grid-cols-1 gap-16 md:gap-24 sm:grid-cols-2">
                {children.map((ex: any, ix) => (
                    <div key={ix} className="space-y-6 transition duration-500">
                        <ex.Icon strokeWidth={1.3} className="h-14 w-14 text-primary" />
                        <p className="text-2xl font-bold leading-none">{ex.title}</p>
                        <p className="text-lg leading-relaxed text-gray-500">{ex.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    )
}
