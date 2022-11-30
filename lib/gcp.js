import { sheets, auth } from '@googleapis/sheets'

export default async function GCP(spreadsheetId, range, majorDimension) {
	const authClient = await auth.fromAPIKey(process.env.GOOGLE_API_KEY)

	const service = await sheets({
		version: 'v4',
		scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
		auth: authClient,
	})

	try {
		const res = await service.spreadsheets.values.get({
			spreadsheetId,
			range,
			majorDimension,
		})
		console.log('Fetching Data Success')
		return res
	} catch (err) {
		console.log('Fetching Data Fail')
		throw err
	}
}
