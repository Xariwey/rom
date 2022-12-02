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
				<div
					style={{
						width: '100%',
						maxWidth: '720px',
					}}
				>
					<div
						style={{
							position: 'relative',
							width: '100%',
							height: 0,
							paddingTop: '30px',
							paddingBottom: '56.25%',
						}}
					>
						<iframe
							title="Xarywey ROM"
							src="https://www.youtube.com/embed/videoseries?list=PLLDEypVXW3PjnblJxWH7o-dG2lSFd-Pb8"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								height: '100%',
							}}
						></iframe>
					</div>
				</div>
			</Page.Body>
		</Page>
	)
}
