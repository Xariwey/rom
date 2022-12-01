import { ImageResponse } from '@vercel/og'
import { Text } from '@geist-ui/core'

export const config = {
	runtime: 'experimental-edge',
}

export default function handler(req) {
	try {
		const { searchParams } = new URL(req.url)
		const hasTitle = searchParams.has('title')
		const title = hasTitle
			? searchParams.get('title')?.slice(0, 100)
			: 'Hola Mundo'

		return new ImageResponse(
			(
				<div
					style={{
						fontSize: 128,
						background: 'white',
						width: '100%',
						height: '100%',
						display: 'flex',
						textAlign: 'center',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text>{title}</Text>
				</div>
			),
			{
				width: 1200,
				height: 630,
			}
		)
	} catch (e) {
		console.log(`${e.message}`)
		return new Response(`Failed to generate the image`, {
			status: 500,
		})
	}
}
