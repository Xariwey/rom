'use client'

import { Page, Text } from '@geist-ui/core'

export default function Home() {
	return (
		<Page>
			<Page.Header>
				<Text h1>Hello, Everyone.</Text>
			</Page.Header>
			<Page.Body>
				<Text p>
					This is a simulated page, you can click anywhere to close it.
				</Text>
			</Page.Body>
		</Page>
	)
}
