
export interface Host {
    name: string
    host: string
    url: string
}

export const HOSTNAME: Host = {
    name: 'svara.io',
    host: 'svara.io',
    url: 'https://svara.io',
}

export const HOSTNAME_ALL: Host[] = [
    HOSTNAME,
    // {
    //     name: 'svaraborut.com',
    //     host: 'svaraborut.com',
    //     url: 'https://svaraborut.io',
    // },
]
