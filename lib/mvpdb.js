import GCP from '@lib/gcp'

export default async function MVPDB() {
	const spreadsheetId = process.env.MVP_SHEET_ID
	const range = 'mvpbestloot!A2:T'

	const res = await GCP(spreadsheetId, range)

	const data = res.data.values.map(row => ({
		id: Number(row[0].replace(/[\D]/g, '')),
		name: row[1].toUpperCase(),
		total: Number(row[2].replace(/[\D]/g, '')),
		loot: {
			material: {
				drop1: { name: row[3], price: row[4] },
				drop2: { name: row[5], price: row[6] },
			},
			equipment: {
				drop1: { name: row[7], price: row[8] },
				drop2: { name: row[9], price: row[10] },
			},
			blueprint: {
				drop1: { name: row[11], price: row[12] },
				drop2: { name: row[13], price: row[14] },
			},
			card: {
				drop1: { name: row[15], price: row[16] },
				drop2: { name: row[17], price: row[18] },
			},
		},
	}))

	return data
}
