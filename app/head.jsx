import { NextSeo } from 'next-seo'
import { NEXT_SEO_DEFAULT } from '../next-seo-config'

export default async function Head() {
	return (
		<>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width" />
			<title>Xary ROM</title>
			<meta name="description" content="Ragnarok Online Mobile ET/MVP" />
			<link rel="icon" href="/favicon.ico" />
			<link rel="manifest" href="/manifest.json" />
			<NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />
		</>
	)
}
