import { Container, type ContainerProps } from '~/components/ui/Container'
import type { ReactNode } from 'react'
import { cn } from '~/lib/utils'

export type SectionProps = Omit<ContainerProps, 'title'> & {
    direction?: 'row' | 'column'
    text?: 'wide'
    section?: string
    title: ReactNode
    description?: ReactNode
}

export function Section({ direction = 'row', text, section, title, description, children, ...rest }: SectionProps) {
    const isCol = direction === 'column'
    return (
        <section id={section}>
            <Container {...rest}>
                {section && <p className="mb-4 text-lg font-bold text-gray-500">{section.toUpperCase()}</p>}
                <div className={cn('grid gap-24 grid-cols-1', isCol && 'lg:grid-cols-3')}>
                    <div className="max-w-4xl flex flex-col gap-12">
                        <h1
                            className={cn(
                                'text-5xl font-bold md:text-6xl',
                                text === 'wide' ? 'max-w-4xl' : 'max-w-2xl'
                            )}
                        >
                            {title}
                        </h1>
                        {description && (
                            <p className="max-w-3xl text-lg leading-relaxed text-gray-400">{description}</p>
                        )}
                    </div>
                    {children && <div className={cn(isCol && 'lg:col-span-2')}>{children}</div>}
                </div>
            </Container>
        </section>
    )
}
