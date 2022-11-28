'use client'

import { useState } from 'react'
import { Card, Divider, Grid, Image, Page, Select, Text } from '@geist-ui/core'
import ChevronUp from '@geist-ui/icons/chevronUp'
import ChevronDown from '@geist-ui/icons/chevronDown'
import { Loot } from './loot'

export default function MVPContainer({ data }) {
	const [sort, setSort] = useState('id-asc')

	function sorted(value) {
		setSort(() => value)
		const [key, dir] = value.split('-')

		data.sort((a, b) => {
			const result = dir === 'asc' ? a[key] < b[key] : a[key] > b[key]

			return result ? -1 : 1
		})
	}

	return (
		<Page>
			<Page.Header
				style={{
					display: 'flex',
					justifyContent: 'right',
				}}
			>
				<Select placeholder="Ordenar" initialValue={sort} onChange={sorted}>
					<Select.Option value={'id-asc'}>
						<ChevronUp size={18} />
						ID
					</Select.Option>
					<Select.Option value="id">
						<ChevronDown size={18} />
						ID
					</Select.Option>
					<Select.Option value={'name-asc'}>
						<ChevronUp size={18} />
						Name
					</Select.Option>
					<Select.Option value="name">
						<ChevronDown size={18} />
						Name
					</Select.Option>
					<Select.Option value={'total-asc'}>
						<ChevronUp size={18} />
						Total
					</Select.Option>
					<Select.Option value="total">
						<ChevronDown size={18} />
						Total
					</Select.Option>
				</Select>
			</Page.Header>
			<Page.Body>
				<Grid.Container gap={2} justify="center">
					{data.map(mvp => (
						<Grid key={mvp.id}>
							<Card type="dark" hoverable width="300px">
								<Card.Content>
									<Grid.Container justify="space-between" wrap>
										<Grid xs={6}>
											<Image
												alt={`ID ${mvp.id}`}
												src={`/images/${mvp.id}.png`}
												height="100%"
												width="auto"
											/>
										</Grid>
										<Grid>
											<Text
												h4
												style={{
													textAlignLast: 'right',
													margin: '0',
													padding: '0',
												}}
											>
												{mvp.name}
											</Text>
											<Text
												style={{
													textAlignLast: 'right',
													margin: '0',
													padding: '0',
												}}
											>
												{`Ƶ ${Intl.NumberFormat('en-US').format(mvp.total)}`}
											</Text>
										</Grid>
									</Grid.Container>
								</Card.Content>
								<Divider h={2} my={0} />
								<Card.Content>
									{[mvp.loot].map(loot => (
										<Grid.Container
											key={mvp.id}
											gap={1}
											justify="space-between"
										>
											<Loot arg={loot} />
										</Grid.Container>
									))}
								</Card.Content>
							</Card>
						</Grid>
					))}
				</Grid.Container>
			</Page.Body>
		</Page>
	)
}
