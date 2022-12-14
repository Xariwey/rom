import { Card, Divider, Grid, Text, useTheme } from '@geist-ui/core'

export default function Floors({ data, ch, props }) {
	const theme = useTheme()
	if (ch > 7) return
	const { route, setRoute } = props
	const channel = Object.keys(data).map(d => data[d])
	const floor = Object.keys(data).map(c => c)
	channel.pop()
	floor.pop()

	const selectedRoute = (i, ch) => {
		if (route.hasOwnProperty(floor[i]) && route[floor[i]] === ch) {
			delete route[floor[i]]
			setRoute({ ...route })
			return
		}

		setRoute({ ...route, [floor[i]]: ch })
	}

	const bgSelectedColor = (f, i) => {
		if (route[f] === i) return theme.palette.successLighter
	}

	const css = {
		textAlign: 'right',
		width: '100%',
		height: '100%',
		margin: 'auto',
		padding: 'auto',
		whiteSpace: 'nowrap',
		cursor: 'pointer',
		userSelect: 'none',
	}

	return (
		<Card width="100%" style={css}>
			<Card.Content
				style={{
					...css,
					cursor: 'default',
					backgroundColor: theme.palette.successLight,
				}}
			>
				<Text h4 style={{ ...css, cursor: 'default', textAlign: 'center' }}>
					Canal {ch + 1}
				</Text>
				<Text h5 style={{ ...css, cursor: 'default' }}>
					{data.total}
				</Text>
			</Card.Content>
			{channel.map((f, i) => (
				<>
					<Divider my={0} />
					<Card.Content
						onClick={() => selectedRoute(i, ch)}
						style={{
							...css,
							backgroundColor: bgSelectedColor(floor[i], ch),
						}}
					>
						<Grid.Container gap={1} justify="space-between" wrap="nowrap">
							<Grid xs={6} style={css}>
								<Text h4 style={{ ...css, textAlign: 'left' }}>
									{floor[i]}
								</Text>
							</Grid>
							<Grid style={css}>
								<Grid.Container direction="column" style={css}>
									<Text small style={css}>
										{f[1]}
									</Text>
									<Divider type="warning" my={0} mx={0} />
									<Text small style={css}>
										{f[2]}
									</Text>
									{f[2] && <Divider type="warning" my={0} mx={0} />}
									<Text small style={css}>
										{f[3]}
									</Text>
									{f[3] && <Divider type="warning" my={0} mx={0} />}
									<Text small style={css}>
										{f.total}
									</Text>
								</Grid.Container>
							</Grid>
						</Grid.Container>
					</Card.Content>
				</>
			))}
		</Card>
	)
}
