import { Card, Divider, Text } from '@geist-ui/core'

export default function Floors(data) {
	console.log(data)
	return (
		<Card
			width="300px"
			style={{
				minWidth: '300px',
			}}
		>
			<Card.Content>
				<Text b>Description</Text>
			</Card.Content>
			<Divider my={0} />
			<Card.Content>
				<Text>
					The Object constructor creates an object wrapper for the given value.
				</Text>
				<Text>
					When called in a non-constructor context, Object behaves identically
					to.
				</Text>
			</Card.Content>
		</Card>
	)
}
