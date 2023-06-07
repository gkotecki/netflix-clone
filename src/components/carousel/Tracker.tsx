'use client'

import styled from 'styled-components'

type Props = {
	count: number
	active: number
}

export default function Tracker({ count, active }: Props) {
	return (
		<Wrapper>
			{new Array(count).fill(true).map((_, i) => (
				<Item key={i} style={{ background: i == active ? '#888' : '#444' }} />
			))}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	gap: 2px;
	position: absolute;
	right: 5%;
	top: 8px;
`

const Item = styled.div`
	height: 2px;
	width: 20px;
`
