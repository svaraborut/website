import React, {type ReactNode} from 'react';
import {type ReactComponentLike} from 'prop-types';
import {GitHubIcon, LinkedinIcons, StackOverflowIcon} from '@assets/icons.tsx';
import {SpanFlash} from '@comp/SpanFlash.tsx';
import {cn} from '../utils.ts';
import {PalmtreeIcon} from "lucide-react";

export interface HeaderLink {
    Icon: ReactComponentLike
    heroicons?: boolean
    mainOnly?: boolean
    disabled?: boolean
    name: string
    description?: ReactNode
    url: string
}

export function SocialLinks(
    {
        compact = false,
        horizontal = false,
    }: {
        compact?: boolean,
        horizontal?: boolean,
    }
) {

    const links: HeaderLink[] = [
        {
            Icon: LinkedinIcons,
            name: 'LinkedIn',
            description: <>Where I <SpanFlash>Meet</SpanFlash></>,
            url: 'https://www.linkedin.com/in/borutsvara',
        },
        {
            Icon: GitHubIcon,
            name: 'GitHub',
            description: <>Where I <SpanFlash>Build</SpanFlash></>,
            url: 'https://github.com/svaraborut',
        },
        {
            Icon: StackOverflowIcon,
            name: 'StackOverflow',
            description: <>Where I <SpanFlash>Share</SpanFlash></>,
            url: 'https://stackoverflow.com/users/5424426/newbie',
        },
        {
            Icon: PalmtreeIcon,
            heroicons: true,
            name: 'Aindo Spa',
            description: <>Where I <SpanFlash>Work</SpanFlash></>,
            url: 'https://aindo.com',
        },
        // {
        //     Icon: OnlyFansIcon,
        //     name: 'OnlyFans',
        //     mainOnly: true,
        //     disabled: true,
        //     description: <>Just <SpanFlash>Kidding</SpanFlash></>,
        //     url: '',
        // },
    ]

    return (
        <div
            className={cn(
                'flex',
                {
                    'space-x-2': horizontal && compact,
                    'flex-col space-y-2': !horizontal && compact,
                    'space-x-4': horizontal && !compact,
                    'flex-col space-y-4': !horizontal && !compact,
                })}
        >
            {links.filter(lk => !compact || !lk.mainOnly).map((lk, ix) => (
                <a
                    key={ix}
                    className={cn(
                        // hover:bg-white/5
                        'group flex items-center transition-all duration-300',
                        compact ? 'space-x-4 rounded p-2' : 'space-x-8 rounded-xl p-4'
                    )}
                    target='_blank'
                    rel='noreferrer'
                    href={lk.url}
                    onClick={lk.disabled ? (e => e.preventDefault()) : undefined}
                >
                    <lk.Icon
                        strokeWidth={1.3}
                        className={cn(
                            'shrink-0 grow-0  transition duration-300',
                            {
                                'group-hover:text-pink-600': lk.heroicons && compact,
                                'group-hover:fill-pink-600': !lk.heroicons && compact,
                                'group-hover:text-white': lk.heroicons && !compact,
                                'group-hover:fill-white': !lk.heroicons && !compact,
                            },
                            lk.heroicons ? 'text-gray-400' : 'fill-gray-400',
                            compact ? 'h-8 w-8' : 'h-16 w-16'
                        )}
                    />
                    <div>
                        <p
                            className={cn(
                                'font-bold text-gray-400 transition duration-300 group-hover:text-white',
                                compact ? 'text-xl' : 'text-2xl',
                            )}
                        >{lk.name}</p>
                        {!compact && (
                            <p className='-mb-7 opacity-0 transition-all duration-300 group-hover:mb-0 group-hover:opacity-100'>{lk.description}</p>
                        )}
                    </div>
                </a>
            ))}
        </div>
    )
}

