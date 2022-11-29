import GCP from '@lib/gcp'

export default async function ETDB() {
	const spreadsheetId = process.env.ET_SHEET_ID
	const range = 'ET List'
	const majorDimension = 'COLUMNS'

	const res = await GCP(spreadsheetId, range, majorDimension)

	let data = {}

	res.data.values.forEach((col, i) => {
		if (i === 0) {
			data = {
				week: col[0],
				channels: {},
			}
			return
		}

		if (i !== 0) {
			data.channels[i] = {
				total: col[1],
				10: {
					1: col[5],
					total: col[6],
				},
				20: {
					1: col[9],
					total: col[10],
				},
				30: {
					1: col[14],
					total: col[15],
				},
				40: {
					1: col[19],
					total: col[20],
				},
				50: {
					1: col[25],
					2: col[26],
					total: col[27],
				},
				60: {
					1: col[32],
					2: col[33],
					total: col[34],
				},
				70: {
					1: col[39],
					2: col[40],
					total: col[41],
				},
				80: {
					1: col[52],
					2: col[53],
					total: col[54],
				},
				90: {
					1: col[65],
					2: col[66],
					total: col[67],
				},
				100: {
					1: col[79],
					2: col[80],
					3: col[81],
					total: col[82],
				},
			}
			return
		}

		return
	})

	return data
}
