import React, { type ReactNode, useMemo } from 'react'
import { NavLink } from 'react-router'
import { ContainerNotch } from '~/components/ui/Notch'
import { cn } from '~/lib/utils'
import { Container } from '~/components/ui/Container'

const NAV_LINKS = [
    { to: '/', label: 'svara_', mobile: 'sv_' },
    { to: '/fractional', label: 'fractional_', mobile: 'fr_' },
    { to: '/projects', label: 'git_', mobile: 'gi_' },
    { to: '/blog', label: 'blog_', mobile: 'bl_' }
] as const

function NavLinks({ mobile }: { mobile?: boolean }) {
    return (
        <>
            {NAV_LINKS.map((link) => (
                <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                        cn(
                            'text-4xl cursor-pointer transition-colors',
                            isActive ? 'text-primary' : 'hover:text-primary'
                        )
                    }
                >
                    {mobile ? link.mobile : link.label}
                </NavLink>
            ))}
        </>
    )
}

export function Header({ children, bare }: { children?: ReactNode; bare?: boolean }) {
    const props = useMemo(
        () => ({
            offsetX: 2 * Math.random() - 1,
            offsetY: 2 * Math.random() - 1
        }),
        []
    )

    const mobileNav = (
        <Container className="mt-8 flex flex-row gap-6 md:hidden">
            <NavLinks mobile />
        </Container>
    )

    if (bare) {
        return (
            <>
                {mobileNav}
                <Container className="mt-8 hidden md:flex flex-row gap-8 text-white">
                    <NavLinks />
                </Container>
            </>
        )
    }

    return (
        <>
            {mobileNav}
            <ContainerNotch
                notchTopLeft={
                    <div className="max-md:hidden relative flex gap-8 text-white pl-6 md:pl-8 xl:pl-16 px-16 py-4 z-10">
                        <NavLinks />
                    </div>
                }
                notchBottomRight={true}
                className="group pt-8 md:pt-16 relative overflow-hidden text-primary-fg"
            >
                {/*<div className="absolute right-0 bottom-0 z-[1]">*/}
                {/*    <Dithering*/}
                {/*        width={1280}*/}
                {/*        height={720}*/}
                {/*        colorBack="#00000000"*/}
                {/*        colorFront="#00000014"*/}
                {/*        // colorFront="#ffb300"*/}
                {/*        shape="ripple"*/}
                {/*        type="4x4"*/}
                {/*        size={16.4}*/}
                {/*        speed={0.05}*/}
                {/*        {...props}*/}
                {/*    />*/}
                {/*</div>*/}
                <div className="relative grid grid-cols-1 gap-8 pt-32 pb-24 xl:gap-24 z-[1]">
                    <p className="text-6xl font-bold md:text-7xl lg:col-span-2 lg:text-8xl xl:text-8xl">
                        {children ?? <div className="max-w-3xl">I&apos;m Borut Svara, a tech expert based in UAE.</div>}
                    </p>
                </div>
            </ContainerNotch>
        </>
    )
}
