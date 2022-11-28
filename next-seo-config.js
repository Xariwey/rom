const deploymentURL = process.env.NEXT_PUBLIC_VERCEL_URL ?? 'localhost:3000'

export const NEXT_SEO_DEFAULT = {
	title: 'Xary Rom',
	description: 'Ragnarok Online Mobile ET/MVP',
	openGraph: {
		type: 'website',
		locale: 'es_MX',
		url: `https://${deploymentURL}`,
		siteName: 'Xary Rom',
		images: [
			{
				url: `https://${deploymentURL}/seo.jpg`,
				width: 1280,
				height: 720,
				alt: 'Og Image Alt',
				type: 'image/jpeg',
				secureUrl: `https://${deploymentURL}/seo.jpg`,
			},
		],
	},
	twitter: {
		handle: '@',
		site: `${deploymentURL}`,
		cardType: 'summary_large_image',
	},
	facebook: {
		appId: '',
	},
}
