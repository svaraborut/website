import { createCanvas, registerFont } from 'canvas';
import colors from 'tailwindcss/colors'
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

export interface OgImageProps {
    path: string // Path to store the image
    slug?: string
    title: string
    subtitle: string
}

function hashObject(obj: any) {
    return crypto.createHash('sha1').update(JSON.stringify(obj)).digest().toString('hex')
}

export async function saveFile(pth: string, buffer: any) {
    // Create directory
    const dir = path.dirname(pth)
    try {
        await fs.promises.stat(dir)
    } catch (e) {
        await fs.promises.mkdir(dir, {recursive: true})
    }
    // Store file
    await fs.promises.writeFile(pth, buffer)
}

/**
 * An OG image generation strategy based on the idea found here
 * https://focux.dev/post/generating-open-graph-images-at-build-time-for-your-nextjs-blog
 *
 * Uses a Node.js implementation of the Canvas to create the OB image at build time,
 * currently works only for statically exported websites like this one.
 */
export async function createOgImage(props: OgImageProps): Promise<string> {

    // Our custom font (todo : this is not working)
    registerFont(path.resolve(__dirname, '../../../public/fonts/sen-bold.otf'), {family: 'Sen'})

    const width = 1200
    const height = 630
    const margin = 50

    // create an empty canvas
    const canvas = createCanvas(width, height)
    const context = canvas.getContext('2d')

    // Background
    context.fillStyle = colors.zinc[900]
    context.fillRect(0, 0, width, height)

    // Head gradient
    const grd = context.createLinearGradient(0, 0, width - 2 * margin, 0)
    grd.addColorStop(0, colors.pink[600])
    grd.addColorStop(width, colors.fuchsia[600])
    context.fillStyle = grd
    context.fillRect(margin, 0, width - 2 * margin, 8)

    // Bottom text in the corner
    context.font = 'bold 100px Sen'
    context.fillStyle = colors.white
    context.fillText(props.title, margin, 300)

    context.font = 'bold 60px Sen'
    context.fillStyle = colors.gray[500]
    context.fillText(props.subtitle, margin, 390)

    context.font = 'bold 30px Sen'
    context.fillStyle = colors.gray[500]
    context.fillText('svaraborut.com', margin, 550)

    // Save
    const buff = canvas.toBuffer('image/png');
    const hash = hashObject(props).slice(0, 16)
    const code = props.slug ? `${props.slug}_${hash}` : hash
    const name = `og_${code}.png`
    await saveFile(path.resolve(props.path, name), buff)

    return name
}

