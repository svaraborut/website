import { cn } from '~/lib/utils'
import React, { type ReactNode } from 'react'

const variants = {
    default: {
        main: 'min-h-32',
        notch: 'min-h-16 min-w-16',
        rounded: ['rounded-tl-4xl', 'rounded-tr-4xl', 'rounded-br-4xl', 'rounded-bl-4xl']
    },
    compact: {
        main: 'min-h-16',
        notch: 'min-h-8 min-w-16',
        rounded: ['rounded-tl-2xl', 'rounded-tr-2xl', 'rounded-br-2xl', 'rounded-bl-2xl']
    }
}

export interface NotchProps {
    variant?: keyof typeof variants
    className?: string
    children?: ReactNode
    classContainer?: string
    classColor?: string
    classColorBg?: string
    notchTopLeft?: ReactNode
    top?: ReactNode
    notchTopRight?: ReactNode
    notchBottomLeft?: ReactNode
    bottom?: ReactNode
    notchBottomRight?: ReactNode
}

export function Notch({
    variant = 'default',
    className,
    children,
    classContainer,
    classColor = 'bg-primary',
    classColorBg = 'bg-background',
    notchTopLeft,
    top,
    notchTopRight,
    notchBottomLeft,
    bottom,
    notchBottomRight
}: NotchProps) {
    const style = variants[variant] ?? variants['default']
    return (
        <div className={cn('flex flex-col', className)}>
            <div className={cn('relative flex')}>
                <div className={cn('absolute inset-x-0 bottom-0 h-1/2', classColor)} />
                {notchTopLeft && (
                    <div className={cn('relative', classColorBg, style.notch, style.rounded[2])}>{notchTopLeft}</div>
                )}
                <div className={cn('relative flex-1', classColor, style.notch, style.rounded[0], style.rounded[1])}>
                    {top}
                </div>
                {notchTopRight && (
                    <div className={cn('relative', classColorBg, style.notch, style.rounded[3])}>{notchTopRight}</div>
                )}
            </div>
            <div
                className={cn(
                    'flex-1',
                    classContainer,
                    classColor,
                    style.main,
                    notchTopLeft && style.rounded[0],
                    notchTopRight && style.rounded[1],
                    notchBottomRight && style.rounded[2],
                    notchBottomLeft && style.rounded[3]
                )}
            >
                {children}
            </div>
            <div className={cn('relative flex')}>
                <div className={cn('absolute inset-x-0 top-0 h-1/2', classColor)} />
                {notchBottomLeft && (
                    <div className={cn('relative', classColorBg, style.notch, style.rounded[1])}>{notchBottomLeft}</div>
                )}
                <div className={cn('relative flex-1', classColor, style.notch, style.rounded[2], style.rounded[3])}>
                    {bottom}
                </div>
                {notchBottomRight && (
                    <div className={cn('relative', classColorBg, style.notch, style.rounded[0])}>
                        {notchBottomRight}
                    </div>
                )}
            </div>
        </div>
    )
}

export function ContainerNotch({ className, classContainer, ...rest }: NotchProps) {
    return (
        <Notch
            className={cn('mx-auto w-full max-w-7xl px-2 md:px-8 xl:px-0', className)}
            classContainer={cn('px-6 md:px-8 xl:px-16', classContainer)}
            {...rest}
        />
    )
}
