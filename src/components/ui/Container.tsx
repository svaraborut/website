import { type HTMLAttributes } from 'react'
import { cn } from '~/lib/utils'

export type ContainerProps = HTMLAttributes<HTMLDivElement>

export function Container({ className, ...rest }: ContainerProps) {
    return <div className={cn('mx-auto w-full max-w-7xl px-8 md:px-16', className)} {...rest} />
}

export type ContainerTitleProps = { title: string } & ContainerProps

export function ContainerTitle({ title, children, ...rest }: ContainerTitleProps) {
    return (
        <Container {...rest}>
            <p className="mb-4 text-lg font-bold text-gray-500">{title.toUpperCase()}</p>
            {children}
        </Container>
    )
}
