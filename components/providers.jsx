'use client'

import { Analytics } from '@vercel/analytics/react'
import { useServerInsertedHTML } from 'next/navigation'
import { GeistProvider, CssBaseline, Themes } from '@geist-ui/core'

export default function Providers({ children }) {
	useServerInsertedHTML(() => {
		return <>{CssBaseline.flush()}</>
	})

	const breakpoints = {
		us: { min: '0', max: '390px' },
		xs: { min: '390px', max: '650px' },
		sm: { min: '650px', max: '900px' },
		md: { min: '900px', max: '1280px' },
		lg: { min: '1280px', max: '1920px' },
		xl: { min: '1920px', max: '10000px' },
	}

	const myTheme = Themes.createFromLight({
		type: 'myTheme',
		breakpoints,
	})

	return (
		<>
			<GeistProvider themes={[myTheme]} themeType="myTheme">
				<CssBaseline />
				{children}
			</GeistProvider>
			<Analytics />
		</>
	)
}
