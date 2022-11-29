import { Nav, Providers } from '@components'
import '@styles/globals.css'
import Footer from 'components/footer'

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<head />
			<body>
				<Providers>
					<Nav />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
