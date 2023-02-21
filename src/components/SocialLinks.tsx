import React, { ReactNode } from 'react';
import { GitHubIcon, LinkedinIcons, StackOverflowIcon } from '@/components/icons';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { ReactComponentLike } from 'prop-types';
import classNames from 'classnames';
import { SpanFlash } from '@/components/SpanFlash';

export interface HeaderLink {
    Icon: ReactComponentLike
    heroicons?: boolean
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
            Icon: BuildingOffice2Icon,
            heroicons: true,
            name: 'Aindo Srl',
            description: <>Where I <SpanFlash>Work</SpanFlash></>,
            url: 'https://aindo.com',
        },
    ]

    return (
        <div
            className={classNames(
                'flex',
                {
                    'space-x-2': horizontal && compact,
                    'flex-col space-y-2': !horizontal && compact,
                    'space-x-4': horizontal && !compact,
                    'flex-col space-y-4': !horizontal && !compact,
                })}
        >
            {links.map((lk, ix) => (
                <a
                    key={ix}
                    className={classNames(
                        // hover:bg-white/5
                        'group flex items-center transition-all duration-300',
                        compact ? 'p-2 space-x-4 rounded' : 'p-4 space-x-8 rounded-xl'
                    )}
                    href={lk.url}
                >
                    <lk.Icon
                        className={classNames(
                            'shrink-0 grow-0  transition duration-300',
                            {
                                'group-hover:text-pink-600': lk.heroicons && compact,
                                'group-hover:fill-pink-600': !lk.heroicons && compact,
                                'group-hover:text-white': lk.heroicons && !compact,
                                'group-hover:fill-white': !lk.heroicons && !compact,
                            },
                            lk.heroicons ? 'text-gray-400' : 'fill-gray-400',
                            compact ? 'w-8 h-8' : 'w-16 h-16'
                        )}
                    />
                    <div>
                        <p
                            className={classNames(
                                'font-bold text-gray-400 group-hover:text-white transition duration-300',
                                compact ? 'text-xl' : 'text-2xl',
                            )}
                        >{lk.name}</p>
                        {!compact && (
                            <p className='opacity-0 group-hover:opacity-100 -mb-7 group-hover:mb-0 transition-all duration-300'>{lk.description}</p>
                        )}
                    </div>
                </a>
            ))}
        </div>
    )
}

