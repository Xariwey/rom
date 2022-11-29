import ETDB from '@lib/etdb'
import ETContainer from './et'

export default async function ET() {
	const data = await ETDB()

	return <ETContainer data={data} />
}
