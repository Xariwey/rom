'use client'

import { Page, Text } from '@geist-ui/core'

export default function Home() {
	return (
		<Page
			style={{
				width: '100vw',
			}}
		>
			<Page.Header center>
				<Text h1>Ragnarok M</Text>
			</Page.Header>
			<Page.Body
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<div className="video-container">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/videoseries?list=PLLDEypVXW3PjnblJxWH7o-dG2lSFd-Pb8"
						title="Xarywey ROM"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
			</Page.Body>
		</Page>
	)
}
