import React, { useMemo } from 'react'
import { SocialLinks } from '~/components/SocialLinks'
import { ContainerNotch } from '~/components/ui/Notch'

export function Footer() {
    const year = useMemo(() => new Date().getFullYear(), [])

    return (
        <ContainerNotch
            classColor="bg-secondary text-secondary-fg"
            notchTopLeft={true}
            bottom={
                <div className="-mt-8 text-end pr-16 text-primary overflow-hidden rounded-b-4xl select-none">
                    <h1 className="font-bold text-[200px] mt-[100px] leading-[100px] -me-[25px]">svara</h1>
                </div>
            }
            className="mb-8 relative overflow-hidden"
        >
            <div className="flex flex-col gap-8 pt-32">
                <SocialLinks compact horizontal />

                <div className="text-md">
                    <a
                        href="https://github.com/svaraborut/website"
                        target="_blank"
                        className="hover:text-primary transition-colors"
                    >
                        Interested in how this website is made?&nbsp; Check out the repository
                    </a>
                </div>
                <div className="col-span-full flex justify-between">
                    <p>© Copyright {year.toFixed(0)}</p>
                    <p>{import.meta.env.VITE_WATERMARK}</p>
                </div>
            </div>
        </ContainerNotch>
    )
}
