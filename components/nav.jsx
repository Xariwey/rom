'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Page, Tabs, useTheme } from '@geist-ui/core'
import { addColorAlpha } from '@lib/color'

export default function Nav() {
	const router = useRouter()
	const pathname = usePathname()
	const theme = useTheme()

	return (
		<Page.Header
			center
			style={{
				position: 'sticky',
				top: 0,
				left: 0,
				right: 0,
				zIndex: 999,
				backdropFilter: 'saturate(180%) blur(5px)',
				backgroundColor: theme.palette.background,
				backgroundColor: addColorAlpha(theme.palette.background, 0.8),
				boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.1)',
			}}
		>
			<nav>
				<Tabs
					value={pathname}
					hideDivider
					onChange={route => router.push(route)}
				>
					<Tabs.Item label="Home" value="/" />
					<Tabs.Item label="Endless Tower" value="/et" />
					<Tabs.Item label="MVP" value="/mvp" />
				</Tabs>
			</nav>
		</Page.Header>
	)
}
