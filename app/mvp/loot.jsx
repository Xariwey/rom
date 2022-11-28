import { Grid, Text } from '@geist-ui/core'

export function Loot({ arg }) {
	const loots = Object.keys(arg).map(i => arg[i])

	const item = loots.map(items => {
		const drops = Object.keys(items).map(i => items[i])
		return (
			<>
				{drops.map(drop => (
					<>
						<Grid xs={12}>
							<Text
								style={{
									margin: '0',
									padding: '0',
								}}
							>
								{drop.name}
							</Text>
						</Grid>
						<Grid>
							<Text
								style={{
									margin: '0',
									padding: '0',
								}}
							>
								{drop.price}
							</Text>
						</Grid>
					</>
				))}
			</>
		)
	})

	return item
}
