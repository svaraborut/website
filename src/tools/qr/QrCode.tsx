import { type SVGProps } from 'react'
import { renderQrInternalData, type RenderQrInternalProps } from './render.ts'

export interface QrCodeProps
	extends RenderQrInternalProps,
		Omit<SVGProps<SVGSVGElement>, 'viewBox' | 'children'> {
	size?: number
	title?: string
	bgColor?: string
	fgColor?: string
}

export function QrCode({
	value,
	level = 'M',
	size,
	width,
	height,
	gutter = 2,
	title,
	bgColor = '#ffffff',
	fgColor = '#000000',
	xmlns = 'http://www.w3.org/2000/svg',
	...rest
}: QrCodeProps) {
	const { bgPath, fgPath, viewBox } = renderQrInternalData({ value, level, gutter })
	return (
		<svg
			xmlns={xmlns}
			viewBox={viewBox}
			width={width ?? size}
			height={height ?? size}
			{...rest}
		>
			{title && <title>{title}</title>}
			{bgColor && <path d={bgPath} fill={bgColor} />}
			<path d={fgPath} fill={fgColor} />
		</svg>
	)
}
