import React, { type ReactNode } from 'react'
import { GitHubIcon, LinkedinIcons, StackOverflowIcon } from '~/assets/icons'
import { SpanFlash } from '~/components/SpanFlash'
import { cn } from '~/lib/utils'

export interface HeaderLink {
    Icon: any
    lucide?: boolean
    mainOnly?: boolean
    disabled?: boolean
    name: string
    description?: ReactNode
    url?: string
}

const links: HeaderLink[] = [
    {
        Icon: LinkedinIcons,
        name: 'LinkedIn',
        description: (
            <>
                Where I <SpanFlash>Meet</SpanFlash>
            </>
        ),
        url: 'https://www.linkedin.com/in/borutsvara'
    },
    {
        Icon: GitHubIcon,
        name: 'GitHub',
        description: (
            <>
                Where I <SpanFlash>Build</SpanFlash>
            </>
        ),
        url: 'https://github.com/svaraborut'
    },
    {
        Icon: StackOverflowIcon,
        name: 'StackOverflow',
        description: (
            <>
                Where I <SpanFlash>Share</SpanFlash>
            </>
        ),
        url: 'https://stackoverflow.com/users/5424426/newbie'
    }
    // {
    //     Icon: Building2Icon,
    //     lucide: true,
    //     name: 'Aindo Spa',
    //     description: <>Where I <SpanFlash>Work</SpanFlash></>,
    //     url: 'https://aindo.com',
    // },
    // {
    //     Icon: PalmtreeIcon,
    //     lucide: true,
    //     name: 'Desert',
    //     description: <>My <SpanFlash>Career Break</SpanFlash></>,
    // },
    // {
    //     Icon: Building2Icon,
    //     lucide: true,
    //     name: 'Docebo',
    //     description: (
    //         <>
    //             Where I <SpanFlash>Work</SpanFlash>
    //         </>
    //     ),
    //     url: 'https://www.docebo.com/'
    // }
]

export function SocialLinks({ compact = false, horizontal = false }: { compact?: boolean; horizontal?: boolean }) {
    return (
        <div
            className={cn('flex', {
                'space-x-2 max-md:flex-col': horizontal && compact,
                'flex-col space-y-2': !horizontal && compact,
                'space-x-4 flex-wrap justify-center': horizontal && !compact,
                'flex-col space-y-4': !horizontal && !compact
            })}
        >
            {links
                .filter((lk) => !compact || !lk.mainOnly)
                .map((lk, ix) => (
                    <a
                        key={ix}
                        className={cn(
                            'group flex items-center transition-all duration-300 ',
                            compact ? 'space-x-4 rounded p-2 hover:text-primary' : 'space-x-8 rounded-xl p-4'
                        )}
                        target="_blank"
                        rel="noreferrer"
                        href={lk.url}
                        onClick={lk.disabled ? (e) => e.preventDefault() : undefined}
                    >
                        <lk.Icon
                            strokeWidth={compact ? 1.6 : 1.0}
                            className={cn(
                                'shrink-0 grow-0 transition duration-300',
                                lk.lucide ? '' : 'fill-current',
                                compact ? 'h-8 w-8' : 'h-16 w-16'
                            )}
                        />
                        <div>
                            <p className={cn('font-bold  transition duration-300', compact ? 'text-xl' : 'text-2xl')}>
                                {lk.name}
                            </p>
                            {!compact && (
                                <p className="-mb-7 opacity-0 transition-all duration-300 group-hover:mb-0 font-bold group-hover:opacity-100">
                                    {lk.description}
                                </p>
                            )}
                        </div>
                    </a>
                ))}
        </div>
    )
}
