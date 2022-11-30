'use client'

import NextLink from 'next/link'
import { Page, Text } from '@geist-ui/core'

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<Page.Footer
			style={{
				position: 'relative',
				textAlign: 'center',
			}}
		>
			{/* <Text>&copy;Derechos Reservados&nbsp;{year}&nbsp;&nbsp;Xariwey&reg;</Text> */}
			<Text>
				Created&nbsp;by&nbsp;
				<NextLink
					href="https://github.com/Xariwey"
					passHref
					rel="noreferrer"
					target="_blank"
				>
					Xariwey
				</NextLink>
				&nbsp;{year}&nbsp;&reg;
			</Text>
		</Page.Footer>
	)
}
