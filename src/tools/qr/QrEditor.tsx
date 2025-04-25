import { QrCode } from './QrCode.tsx'
import { useState } from 'react'
import { type QrCodeEcLevels, renderQrToDataUrl } from './render.ts'
import { useAsync, useDownload } from '@reactit/hooks'

export function QrEditor() {
    const [level, setLevel] = useState<QrCodeEcLevels>('M')
    const [value, setValue] = useState<string>('https://svara.io')

    const download = useDownload()
    const task = useAsync(async () => {
        const url = await renderQrToDataUrl({
            level,
            value,
        })
        download(url, 'qr.svg')
    })

    return (
        <div className='flex gap-8'>
            <QrCode className='size-60' level={level} value={value} />
            <div className='flex flex-col gap-4'>
                <div>
                    <button className={level === 'L' ? 'text-red-600' : ''} onClick={() => setLevel('L')}>L</button>
                    <button className={level === 'M' ? 'text-red-600' : ''} onClick={() => setLevel('M')}>M</button>
                    <button className={level === 'H' ? 'text-red-600' : ''} onClick={() => setLevel('H')}>H</button>
                    <button className={level === 'Q' ? 'text-red-600' : ''} onClick={() => setLevel('Q')}>Q</button>
                </div>
                <div>
                    <input placeholder='Value' className='text-black' value={value} onChange={(e) => setValue(e.target.value)} />
                </div>
                <div>
                    <button onClick={() => task.run()}>Download</button>
                </div>
            </div>
        </div>
    )
}