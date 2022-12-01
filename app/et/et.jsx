'use client'

import { useState } from 'react'
import { Button, Drawer, Page, Spacer, Text } from '@geist-ui/core'
import Floors from './floors'

export default function ETContainer({ data }) {
	const [state, setState] = useState(false)
	const [route, setRoute] = useState({})
	const routeFloors = Object.keys(route)
		.map(k => k)
		.reverse()

	return (
		<Page
			style={{
				width: '100vw',
			}}
		>
			<Page.Header center>
				<Text
					h1
					style={{
						textAlign: 'center',
						margin: 0,
						padding: 0,
					}}
				>
					Endless Tower
				</Text>
			</Page.Header>
			<Text
				style={{
					textAlign: 'center',
					margin: 0,
					padding: 0,
				}}
			>
				{data.week}
			</Text>
			<Page.Body>
				<div
					style={{
						width: '100%',
						display: 'flex',
						position: 'sticky',
						top: '65px',
						justifyContent: 'right',
						margin: '-50px 0 30px auto',
						transition: 'all 0.2s ease-in',
						zIndex: '1',
					}}
				>
					<Button type="success" onClick={() => setState(true)}>
						Ver Ruta
					</Button>
				</div>
				<div
					style={{
						position: 'relative',
						width: '100%',
						height: '100%',
						display: 'flex',
						flex: 1,
						flexWrap: 'nowrap',
						overflowY: 'hidden',
						overflowX: 'scroll',
						alignItems: 'center',
						justifyContent: 'left',
					}}
				>
					{data.channels.map((data, i) => (
						<Floors key={i} data={data} ch={i} props={{ route, setRoute }} />
					))}
				</div>
			</Page.Body>
			<Page.Footer>
				<Drawer
					visible={state}
					onClose={() => setState(false)}
					placement="right"
				>
					<Drawer.Title>Endless Tower</Drawer.Title>
					<Drawer.Subtitle>{data.week}</Drawer.Subtitle>
					<Drawer.Content
						style={{
							textAlign: 'center',
						}}
					>
						<Text h3>
							Piso
							<Spacer w={2} inline />
							Canal
						</Text>
						{routeFloors.map(floor => (
							<Text key={floor}>
								{floor}
								<Spacer w={4} inline />
								{route[floor] + 1}
							</Text>
						))}
					</Drawer.Content>
					<Drawer.Content>
						<Button disabled type="success" onClick={() => setState(false)}>
							Compartir
						</Button>
					</Drawer.Content>
				</Drawer>
			</Page.Footer>
		</Page>
	)
}
