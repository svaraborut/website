import { type HTMLAttributes } from 'react';
import { cn } from '../utils.ts';


export function SpanFlash(
    {className, ...rest}: HTMLAttributes<HTMLSpanElement>
) {
    return <span
        className={cn(
            'bg-gradient-to-r bg-clip-text text-transparent',
            'from-pink-600 to-fuchsia-600',
            className
        )}
        {...rest}
    />
}
