if (!self.define) {
	let e,
		i = {}
	const a = (a, n) => (
		(a = new URL(a + '.js', n).href),
		i[a] ||
			new Promise(i => {
				if ('document' in self) {
					const e = document.createElement('script')
					;(e.src = a), (e.onload = i), document.head.appendChild(e)
				} else (e = a), importScripts(a), i()
			}).then(() => {
				let e = i[a]
				if (!e) throw new Error(`Module ${a} didn’t register its module`)
				return e
			})
	)
	self.define = (n, s) => {
		const c =
			e ||
			('document' in self ? document.currentScript.src : '') ||
			location.href
		if (i[c]) return
		let r = {}
		const d = e => a(e, c),
			b = { module: { uri: c }, exports: r, require: d }
		i[c] = Promise.all(n.map(e => b[e] || d(e))).then(e => (s(...e), r))
	}
}
define(['./workbox-588899ac'], function (e) {
	'use strict'
	importScripts(),
		self.skipWaiting(),
		e.clientsClaim(),
		e.precacheAndRoute(
			[
				{
					url: '/_next/app-build-manifest.json',
					revision: 'a7cecf12b432c263532d11dd91153b93',
				},
				{
					url: '/_next/static/chunks/155-1982a9d145b68c2b.js',
					revision: 'gzh1E26cONIqnBKYLQhnD',
				},
				{
					url: '/_next/static/chunks/17-c218824ffc74c383.js',
					revision: 'gzh1E26cONIqnBKYLQhnD',
				},
				{
					url: '/_next/static/chunks/190.ecc85eef471c3979.js',
					revision: 'ecc85eef471c3979',
				},
				{
					url: '/_next/static/chunks/473-12b4fc83c4b1020f.js',
					revision: 'gzh1E26cONIqnBKYLQhnD',
				},
				{
					url: '/_next/static/chunks/645-fe37b17845026d1b.js',
					revision: 'gzh1E26cONIqnBKYLQhnD',
				},
				{
					url: '/_next/static/chunks/app/et/page-f0bbc55612a40832.js',
					revision: 'gzh1E26cONIqnBKYLQhnD',
				},
				{
					url: '/_next/static/chunks/app/head-a2b11f21e4e2977c.js',
					revision: 'gzh1E26cONIqnBKYLQhnD',
				},
				{
					url: '/_next/static/chunks/app/layout-525a93966fcb6e26.js',
					revision: 'gzh1E26cONIqnBKYLQhnD',
				},
				{
					url: '/_next/static/chunks/app/mvp/page-4126bad7da9b1b0e.js',
					revision: 'gzh1E26cONIqnBKYLQhnD',
				},
				{
					url: '/_next/static/chunks/app/page-b1eb981e57cabdb0.js',
					revision: 'gzh1E26cONIqnBKYLQhnD',
				},
				{
					url: '/_next/static/chunks/main-32073f0b7bd3a94a.js',
					revision: 'gzh1E26cONIqnBKYLQhnD',
				},
				{
					url: '/_next/static/chunks/main-app-f7991bdf5a7d528d.js',
					revision: 'gzh1E26cONIqnBKYLQhnD',
				},
				{
					url: '/_next/static/chunks/pages/_app-9f5490aa3d56632f.js',
					revision: 'gzh1E26cONIqnBKYLQhnD',
				},
				{
					url: '/_next/static/chunks/pages/_error-91a854d9c9cfa29b.js',
					revision: 'gzh1E26cONIqnBKYLQhnD',
				},
				{
					url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
					revision: '837c0df77fd5009c9e46d446188ecfd0',
				},
				{
					url: '/_next/static/chunks/webpack-f2b031146904b8e2.js',
					revision: 'gzh1E26cONIqnBKYLQhnD',
				},
				{
					url: '/_next/static/css/c0421eff707859e2.css',
					revision: 'c0421eff707859e2',
				},
				{
					url: '/_next/static/gzh1E26cONIqnBKYLQhnD/_buildManifest.js',
					revision: 'e31ed336eeab5bdf67877e3ccba2bdfe',
				},
				{
					url: '/_next/static/gzh1E26cONIqnBKYLQhnD/_ssgManifest.js',
					revision: 'b6652df95db52feb4daf4eca35380933',
				},
				{ url: '/favicon.ico', revision: '13bcbb22e04f09f295d3d58ad3cb43e5' },
				{
					url: '/icon-192x192.png',
					revision: 'c6f7858e50d2ac6885749675b77168f0',
				},
				{
					url: '/icon-256x256.png',
					revision: '18154180170b15d12ca85750eb9aeec9',
				},
				{
					url: '/icon-384x384.png',
					revision: '60495d3d2188906db2e0254591db20de',
				},
				{
					url: '/icon-512x512.png',
					revision: 'be5a0a80c2d305a823cd3f8ddcac2b81',
				},
				{
					url: '/images/204000.png',
					revision: '2bf46b82b06e909b9bc95836d110a03f',
				},
				{
					url: '/images/204010.png',
					revision: '589ad6291d595186b89f91df794cb3ea',
				},
				{
					url: '/images/204020.png',
					revision: '49c390ea2ac5710222d4b8efa840ad72',
				},
				{
					url: '/images/204030.png',
					revision: 'b7a515d6bf04693679fd41e7191448b4',
				},
				{
					url: '/images/204040.png',
					revision: '5db90cec0d3d8c6419948b1b7c0d34d2',
				},
				{
					url: '/images/204050.png',
					revision: '3745933fd5efbcce0aa3256a50357e5b',
				},
				{
					url: '/images/204060.png',
					revision: 'c5d89c9e7ad3f16edefd24b41edcc51f',
				},
				{
					url: '/images/204070.png',
					revision: '17739f7ed126e8722b53eac342319a72',
				},
				{
					url: '/images/204080.png',
					revision: 'a4df125f689b09b055e6bf2aca9738ea',
				},
				{
					url: '/images/204090.png',
					revision: '1190f15249f6c8568d989d6f32a8cd74',
				},
				{
					url: '/images/204100.png',
					revision: '222de54db505db6ad8436d77e25aa350',
				},
				{
					url: '/images/204110.png',
					revision: '847c40fbb98957e3e59d939d7afa3503',
				},
				{
					url: '/images/204120.png',
					revision: 'f47618703d9218b93469cf8529c4bca6',
				},
				{
					url: '/images/204130.png',
					revision: '0f3bb33d679667ea3511223325d40f02',
				},
				{
					url: '/images/204140.png',
					revision: '8fbaba1725b6e1ae39cb76ebe428852e',
				},
				{
					url: '/images/204150.png',
					revision: 'b6cf13dc77344a854ab9b98420967a84',
				},
				{
					url: '/images/204160.png',
					revision: '2065579c432fd76d40290717a1e6588b',
				},
				{
					url: '/images/204170.png',
					revision: '0fd07f48c9d6d0af2a8bb980d06e43c9',
				},
				{
					url: '/images/204180.png',
					revision: '725cfd711bb533d27652c4530d314ec9',
				},
				{
					url: '/images/204190.png',
					revision: 'c7fff5bfd81ab417b2920143b5349e67',
				},
				{
					url: '/images/280500.png',
					revision: 'db338578a61c560586290453b15771c7',
				},
				{
					url: '/images/30001.png',
					revision: 'bcab1979019c98d1c8ce1e7022084c8e',
				},
				{
					url: '/images/30002.png',
					revision: 'c9e6c4b713a04aebd14048d1cd2b0c3c',
				},
				{
					url: '/images/30003.png',
					revision: '024a9ad0867af789239e206a7d23c28c',
				},
				{
					url: '/images/30004.png',
					revision: 'a0781e4ca74755243b1254c41177ac64',
				},
				{
					url: '/images/30005.png',
					revision: 'c1d519b144c110632287019225a1a157',
				},
				{
					url: '/images/30006.png',
					revision: '0a336a245dd0ad43e70af7b7fba01bb8',
				},
				{
					url: '/images/30007.png',
					revision: '78d5157a38b4ed84ad53461bbbea8dc4',
				},
				{
					url: '/images/30008.png',
					revision: '8e2e7bbf91360b87d1a326411f668472',
				},
				{
					url: '/images/30009.png',
					revision: '5ba3c045115ec347c144b7c40288ae3e',
				},
				{
					url: '/images/30011.png',
					revision: 'bda4b0b6892311966ee6ddde528c9402',
				},
				{
					url: '/images/30012.png',
					revision: '9cdd55b8de0c569a01914326eccaa2bf',
				},
				{
					url: '/images/30013.png',
					revision: 'd16377d2344898b71292a868fcf70c0c',
				},
				{
					url: '/images/30014.png',
					revision: '9cb57b97f8e7bb157781f2edaa9d241d',
				},
				{
					url: '/images/30015.png',
					revision: 'c1ac6f16eba74067493e93be1bc6cdc6',
				},
				{
					url: '/images/30016.png',
					revision: 'd0e4a55c948bf9fb057fa4f67f54046b',
				},
				{
					url: '/images/30017.png',
					revision: '4093b1d0cad155b717a3c6486375ef74',
				},
				{
					url: '/images/30018.png',
					revision: '1ba47cf6bbf16e6ed76d02ea6e651dd7',
				},
				{
					url: '/images/30019.png',
					revision: '6f3cc90fc7e4a4295bf5c9aae982a79f',
				},
				{
					url: '/images/30020.png',
					revision: '9e29c642ec5fb81a4fae97fe38994eb5',
				},
				{
					url: '/images/30021.png',
					revision: '8f501570d9cae09c2a50b5c2e44b359b',
				},
				{
					url: '/images/30023.png',
					revision: '989c66eb6fca8f7d27c348dd13cda1a6',
				},
				{
					url: '/images/30024.png',
					revision: 'bc6bb62b0055cf76d2c367998f0062fe',
				},
				{
					url: '/images/30029.png',
					revision: 'd85b940720b8bd0f1fec1db6b0dc5aa6',
				},
				{
					url: '/images/30030.png',
					revision: '024a9ad0867af789239e206a7d23c28c',
				},
				{
					url: '/images/30031.png',
					revision: 'f3cb0da0c06121866847756b0941242b',
				},
				{
					url: '/images/30032.png',
					revision: '1b1b86f71f3bb830102cbd0282569edf',
				},
				{
					url: '/images/30033.png',
					revision: '819286fbe1929d3c7a5aeb37909e3785',
				},
				{
					url: '/images/30034.png',
					revision: '4ea3a6037f46dddfdcbf19a5735a2936',
				},
				{
					url: '/images/30039.png',
					revision: 'ee89bff7706520e56e796b75fd94133b',
				},
				{
					url: '/images/30040.png',
					revision: '2724fe8b1890ed01d3497e1d1bdef849',
				},
				{
					url: '/images/30044.png',
					revision: 'dbb08ab063c82a60b5afe61d68429d8e',
				},
				{
					url: '/images/30045.png',
					revision: 'e5a1196ee036894e212717a68a3cc068',
				},
				{
					url: '/images/30048.png',
					revision: '64e486a38677bbd51b90b049913b49dd',
				},
				{
					url: '/images/30049.png',
					revision: 'fdea6a042e66f51d52d1e11cb4bb602e',
				},
				{
					url: '/images/30050.png',
					revision: 'b9648d88e3c0c360dd5b7f69921bf029',
				},
				{
					url: '/images/30051.png',
					revision: '32a02ad7142965286677e256ca5f05c7',
				},
				{
					url: '/images/30052.png',
					revision: '1be45909f96ba2707241d5e9e31f32cc',
				},
				{
					url: '/images/30053.png',
					revision: '33d187b8a8ff81379c6471be4abaf687',
				},
				{
					url: '/images/30054.png',
					revision: '1161b028c16fe128ee601e431361b614',
				},
				{
					url: '/images/30055.png',
					revision: 'eebeca747565d1c3df149cf8b1a18a99',
				},
				{
					url: '/images/30056.png',
					revision: 'd022d50f7097170be0918c9d476f0fba',
				},
				{
					url: '/images/30057.png',
					revision: '03a43a756f8100565e9b556e461fde3f',
				},
				{
					url: '/images/30058.png',
					revision: '6952251056243fe813997afeb527da7a',
				},
				{
					url: '/images/30059.png',
					revision: 'ba85e83ca4004b9714ae29b32278219d',
				},
				{
					url: '/images/30060.png',
					revision: '81da82be435bbdf95b519d6a804f22d4',
				},
				{
					url: '/images/30061.png',
					revision: '77a3f61c312611123eb0cf005576a601',
				},
				{
					url: '/images/30062.png',
					revision: 'faeb9cb3fb4de4848a1251556433e5c1',
				},
				{
					url: '/images/30063.png',
					revision: '273b25d44c68977454e244119e0f3fbb',
				},
				{ url: '/manifest.json', revision: '3a11575954a4eab136d3c7c677283164' },
				{ url: '/seo.jpg', revision: 'eb7e9d57ca94526daabdd5fa400b42d1' },
				{ url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' },
			],
			{ ignoreURLParametersMatching: [] }
		),
		e.cleanupOutdatedCaches(),
		e.registerRoute(
			'/',
			new e.NetworkFirst({
				cacheName: 'start-url',
				plugins: [
					{
						cacheWillUpdate: async ({
							request: e,
							response: i,
							event: a,
							state: n,
						}) =>
							i && 'opaqueredirect' === i.type
								? new Response(i.body, {
										status: 200,
										statusText: 'OK',
										headers: i.headers,
								  })
								: i,
					},
				],
			}),
			'GET'
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
			new e.CacheFirst({
				cacheName: 'google-fonts-webfonts',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
			new e.StaleWhileRevalidate({
				cacheName: 'google-fonts-stylesheets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-font-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-image-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\/_next\/image\?url=.+$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'next-image',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:mp3|wav|ogg)$/i,
			new e.CacheFirst({
				cacheName: 'static-audio-assets',
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:mp4)$/i,
			new e.CacheFirst({
				cacheName: 'static-video-assets',
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:js)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-js-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:css|less)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-style-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\/_next\/data\/.+\/.+\.json$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'next-data',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:json|xml|csv)$/i,
			new e.NetworkFirst({
				cacheName: 'static-data-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1
				const i = e.pathname
				return !i.startsWith('/api/auth/') && !!i.startsWith('/api/')
			},
			new e.NetworkFirst({
				cacheName: 'apis',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1
				return !e.pathname.startsWith('/api/')
			},
			new e.NetworkFirst({
				cacheName: 'others',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			({ url: e }) => !(self.origin === e.origin),
			new e.NetworkFirst({
				cacheName: 'cross-origin',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
				],
			}),
			'GET'
		)
})
