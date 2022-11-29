import MVPDB from '@lib/mvpdb'
import MVPContainer from './mvp'

export default async function MVP() {
	const data = await MVPDB()

	return <MVPContainer data={data} />
}
