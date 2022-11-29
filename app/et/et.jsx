'use client'

import { useState } from 'react'
import { Button, Drawer, Page, Text } from '@geist-ui/core'
import Floors from './floors'

export default function ETContainer({ data }) {
	const [state, setState] = useState(false)

	return (
		<Page
			style={{
				width: '90%',
			}}
		>
			<Page.Header center>
				<Text
					h1
					style={{
						textAlign: 'center',
					}}
				>
					ET List
				</Text>
			</Page.Header>
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
					}}
				>
					<Button type="success" onClick={() => setState(true)}>
						Ver Mapa
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
						paddingLeft: '12px',
					}}
				>
					<Floors data={data} />
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
					<Drawer.Content>
						<Text p>Lista de boses aqui</Text>
					</Drawer.Content>
				</Drawer>
			</Page.Footer>
		</Page>
	)
}
