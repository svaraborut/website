import React, { type ReactNode } from 'react'
import { NavLink } from 'react-router'
import { ContainerNotch } from '~/components/ui/Notch'
import { cn } from '~/lib/utils'

export function Header({ children }: { children?: ReactNode }) {
    return (
        <ContainerNotch
            notchTopLeft={
                <div className="flex gap-8 text-white pl-6 md:pl-8 xl:pl-16 px-16 py-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            cn(
                                'text-4xl cursor-pointer transition-colors',
                                isActive ? 'text-primary' : 'hover:text-primary'
                            )
                        }
                    >
                        svara_
                    </NavLink>
                    {/*<NavLink*/}
                    {/*    to="/consulting"*/}
                    {/*    className={({ isActive }) =>*/}
                    {/*        cn(*/}
                    {/*            'text-4xl cursor-pointer transition-colors',*/}
                    {/*            isActive ? 'text-primary' : 'hover:text-primary'*/}
                    {/*        )*/}
                    {/*    }*/}
                    {/*>*/}
                    {/*    consulting_*/}
                    {/*</NavLink>*/}
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            cn(
                                'text-4xl cursor-pointer transition-colors',
                                isActive ? 'text-primary' : 'hover:text-primary'
                            )
                        }
                    >
                        git_
                    </NavLink>
                </div>
            }
            notchBottomRight={true}
            className="group pt-8 md:pt-16 relative overflow-hidden text-primary-fg"
        >
            <div className="grid grid-cols-1 gap-8 pt-32 pb-24 xl:gap-24">
                <p className="text-6xl font-bold md:text-7xl lg:col-span-2 lg:text-8xl xl:text-8xl">
                    {children ?? <div className="max-w-3xl">I&apos;m Borut Svara, a tech expert based in UAE.</div>}
                </p>
            </div>
            {/*<div className="absolute right-0 bottom-0 z-[1]">*/}
            {/*    <Metaballs*/}
            {/*        width={500}*/}
            {/*        height={1000}*/}
            {/*        colors={['#010202']}*/}
            {/*        colorBack="#ffffff00"*/}
            {/*        count={17}*/}
            {/*        size={0.78}*/}
            {/*        speed={0.6}*/}
            {/*        scale={1.64}*/}
            {/*        offsetX={0.3}*/}
            {/*        offsetY={0.04}*/}
            {/*    />*/}
            {/*</div>*/}
        </ContainerNotch>
    )
}
