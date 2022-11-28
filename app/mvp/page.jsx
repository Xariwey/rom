import MVPContainer from './mvp'
import MVPDB from './mvpdb'

export default async function MVP() {
	const data = await MVPDB()
	return <MVPContainer data={data} />
}
