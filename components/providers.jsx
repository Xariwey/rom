'use client'

import { Analytics } from '@vercel/analytics/react'
import { useServerInsertedHTML } from 'next/navigation'
import { GeistProvider, CssBaseline } from '@geist-ui/core'

export default function Providers({ children }) {
	useServerInsertedHTML(() => {
		return <>{CssBaseline.flush()}</>
	})

	return (
		<>
			<GeistProvider themeType="dark">
				<CssBaseline />
				{children}
			</GeistProvider>
			<Analytics />
		</>
	)
}
