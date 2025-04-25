/**
 * Render a QR Code to various medias using qr.js. The library is quite undocumented
 * therefore this https://github.com/rosskhanas/react-qr-code/blob/master/src/index.js
 * has been used as a base but improved to remove wasteful background cells and dummy
 * spaces.
 */

// @ts-ignore
import QRCodeImpl from 'qr.js/lib/QRCode'
// @ts-ignore
import ErrorCorrectLevel from 'qr.js/lib/ErrorCorrectLevel'

export type QrCodeEcLevels = 'L' | 'M' | 'Q' | 'H'

export interface RenderQrInternalProps {
    value: string
    // Error correction levels as per (defaults to M)
    level?: QrCodeEcLevels
    // Qr code gutter in dot units
    gutter?: number
    // todo : qr.js does not expose functions for this. Qr code encoding mode (defaults to Byte)
    // copy them from https://kazuhikoarase.github.io/qrcode-generator/js/demo/
    // mode?: 'Numeric' | 'Alphanumeric' | 'Byte' | 'Kanji'
}

/**
 * Internal utility for rendering, shared with JSX components
 */
export function renderQrInternalData({ value, level = 'M', gutter = 2 }: RenderQrInternalProps): {
    bgPath: string
    fgPath: string
    viewBox: string
    dots: number
    pixelPerfect?: boolean
} {
    const qr = new QRCodeImpl(-1, ErrorCorrectLevel[level])
    qr.addData(value)
    qr.make()
    // Build
    const cells = qr.modules as boolean[][]
    const s = cells.length + gutter * 2
    return {
        bgPath: `M 0 0 l ${s} 0 0 ${s} -${s} 0 Z`,
        fgPath: cells
            .flatMap((row, rowIndex) =>
                row.map((cell, cellIndex) =>
                    cell ? `M ${gutter + cellIndex} ${gutter + rowIndex} l 1 0 0 1 -1 0 Z` : ''
                )
            )
            .filter(p => !!p) // prevent blank lines
            .join(' '),
        viewBox: `0 0 ${s} ${s}`,
        dots: s,
    }
}

export interface RenderQrToSvgProps extends RenderQrInternalProps {
    // Size in pixel units
    size?: number
    // Optional svg tittle
    title?: string
    // Background color in web format
    bgColor?: string
    // Foreground color in web format
    fgColor?: string
    // When specified the image will not fully respect the size and will use the closes
    // smaller size that has an exact pixel size for each qr code dot. This useful to
    // generate lossy images without aliasing
    pixelPerfect?: boolean
}

/**
 * Render a QRCode to an SVG string, with plenty of handy configurations that are not
 * available under other libraries. Works both in FE and SSG
 */
export function renderQrToSvg({
    value,
    level = 'M',
    size = 200,
    gutter = 2,
    title,
    bgColor = '#ffffff',
    fgColor = '#000000',
    pixelPerfect = false,
}: RenderQrToSvgProps): string {
    const { bgPath, fgPath, viewBox, dots } = renderQrInternalData({ value, level, gutter })
    // Correct for pixel perfectness
    size = pixelPerfect ? Math.floor(size / dots) * dots : size
    // To svg string
    const sizeString = size !== undefined ? `height="${size}" width="${size}" ` : ``
    const titleString = title !== undefined ? `<title>${title}</title>` : ``
    const bgString = bgColor ? `<path d="${bgPath}" fill="${bgColor}" />` : ``
    const fgString = `<path d="${fgPath}" fill="${fgColor}" />`
    return `<svg xmlns="http://www.w3.org/2000/svg" ${sizeString}viewBox="${viewBox}">${titleString}${bgString}${fgString}</svg>`
}

/**
 * Render a QRCode to an SVG in Blob with the proper mime type
 */
export async function renderQrToBlob(props: RenderQrToSvgProps): Promise<Blob> {
    const svgString = renderQrToSvg(props)
    return new Blob([new TextEncoder().encode(svgString)], { type: 'image/svg+xml' })
}

/**
 * Render a QRCode to an SVG in Data URL format
 */
export async function renderQrToDataUrl(props: RenderQrToSvgProps): Promise<string> {
    const svgString = renderQrToSvg(props)
    return `data:image/svg+xml;base64,${btoa(svgString)}`
}
