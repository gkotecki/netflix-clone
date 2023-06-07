'use client'

import Carousel from '@/components/carousel/Carousel'
import { styled } from 'styled-components'

export default function Page() {
	const items = new Array(20).fill(true).map((_, i) => i)

	return (
		<Wrapper>
			<Carousel title="Continue watching" items={items}/>
			<Carousel title="30-Minute Laughs" items={items}/>
			<Carousel title="Featured for you today" items={items}/>
			<Carousel title="New releases" items={items}/>
			<Carousel title="My list" items={items}/>
			<Carousel title="Top picks for you" items={items}/>
		</Wrapper>
	)
}

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	gap: 48px;
`
