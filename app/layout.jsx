import { Nav, Providers } from '@components'
import '@styles/globals.css'

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<head />
			<body>
				<Providers>
					<Nav />
					{children}
					<h2>Footer</h2>
				</Providers>
			</body>
		</html>
	)
}
