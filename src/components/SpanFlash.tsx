import { type HTMLAttributes } from 'react'
import { cn } from '../lib/utils'

export function SpanFlash({ className, ...rest }: HTMLAttributes<HTMLSpanElement>) {
    return <span className={cn('bg-primary bg-clip-text text-transparent', className)} {...rest} />
}
