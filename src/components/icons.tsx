import { SVGProps } from 'react';

// https://github.com/ionic-team/ionicons/blob/main/src/svg/logo-linkedin.svg
export function LinkedinIcons(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 512 512">
            <path
                d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"/>
        </svg>
    )
}

// https://github.com/ionic-team/ionicons/blob/main/src/svg/logo-github.svg
export function GitHubIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 512 512">
            <path
                d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"/>
        </svg>
    )
}


// https://github.com/ionic-team/ionicons/blob/main/src/svg/logo-stackoverflow.svg
export function StackOverflowIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 512 512">
            <path d="M392,440V320h40V480H64V320h40V440Z"/>
            <path
                d="M149.1,308.77l198.57,40.87,8.4-39.32L157.5,269.45Zm26.27-93.12L359.22,300,376,263.76,192.18,178.92Zm50.95-89,156,127.78,25.74-30.52-156-127.78ZM328,32,294.61,55.8,415.43,216.17,448,192ZM144,400H348V360H144Z"/>
        </svg>
    )
}

// https://commons.wikimedia.org/wiki/File:OnlyFans_Icon_2022.svg
export function OnlyFansIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="12.5 75 375 250">
            <path d="M137.5 75a125 125 0 1 0 125 125 125 125 0 0 0-125-125Zm0 162.5A37.5 37.5 0 1 1 175 200a37.45 37.45 0 0 1-37.5 37.5Z" />
            <path d="M278 168.75c31.76 9.14 69.25 0 69.25 0-10.88 47.5-45.38 77.25-95.13 80.87A124.73 124.73 0 0 1 137.5 325L175 205.81C213.55 83.3 233.31 75 324.73 75h62.77c-10.5 46.25-46.69 81.58-109.5 93.75Z" />
        </svg>
    )
}
