import { Section, type SectionProps } from '~/components/ui/Section'
import { ConstructionIcon, LockIcon } from 'lucide-react'
import React from 'react'
import { GitHubBadge, GitHubCopilot, NpmBadge } from '~/assets/stackicons'

export type RepoTag = 'wip' | 'private'
export type RepoType = 'github' | 'npm' | 'copilot'

export interface RepoItem {
    type?: RepoType
    tag?: RepoTag
    title: string
    description: string
    url?: string
}

export type SectionRepoProps = Omit<SectionProps, 'children'> & {
    children: RepoItem[]
}

function RepoIcon({ className, type }: { className?: string } & RepoItem) {
    if (type === 'npm') {
        return <NpmBadge className={className} />
    } else if (type === 'copilot') {
        return <GitHubCopilot className={className} />
    } else {
        return <GitHubBadge className={className} />
    }
}

function RepoTag({ className, tag }: { className?: string } & RepoItem) {
    if (tag === 'wip') {
        return <ConstructionIcon className={className} />
    } else if (tag === 'private') {
        return <LockIcon className={className} />
    } else {
        return null
    }
}

export function SectionRepo({ children, direction = 'column', ...rest }: SectionRepoProps) {
    return (
        <Section direction={direction} {...rest}>
            <div className="grid grid-cols-1 gap-24 sm:grid-cols-2">
                {children.map((ex, ix) => (
                    <a key={ix} className="group flex gap-6" href={ex.url} target="_blank">
                        <RepoIcon
                            {...ex}
                            className="group-hover:fill-primary transition duration-500 h-14 w-14 shrink-0 grow-0"
                        />
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-2 group-hover:text-primary transition duration-500">
                                <RepoTag {...ex} className="h-6 w-6" />
                                <p className="font-mono text-2xl font-bold leading-none">{ex.title}</p>
                            </div>
                            <p className="leading-relaxed text-gray-500">{ex.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </Section>
    )
}
