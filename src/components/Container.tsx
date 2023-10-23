import { type HTMLAttributes } from 'react';
import { cn } from '../utils.ts';


export function Container(
    {className, ...rest}: HTMLAttributes<HTMLDivElement>
) {
    return <div
        className={cn(
            'mx-auto w-full max-w-7xl px-8 md:px-16',
            className
        )}
        {...rest}
    />
}
