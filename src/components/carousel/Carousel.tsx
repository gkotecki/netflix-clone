'use client'

import { useMemo, useState } from 'react'
import { styled } from 'styled-components'
import Tracker from './Tracker'

type Props = {
	title: string
	items: any[]
}

export default function Carousel({ title, items }: Props) {
	const [page, setPage] = useState(0)
	const pageCount = useMemo(() => Math.ceil(items.length / 5), [items])

	return (
		<Wrapper>
			<CarouselTitle>{title}</CarouselTitle>
			<Tracker count={pageCount} active={page} />
			<Button style={{ left: 0 }} onClick={() => setPage(p => (p ? p - 1 : pageCount - 1))}>
				{'<<'}
			</Button>
			<Body>
				{new Array(20).fill(true).map((_, i) => (
					<MockItem key={i}>{i}</MockItem>
				))}
			</Body>
			<Button style={{ right: 0 }} onClick={() => setPage(p => (p == pageCount - 1 ? 0 : p + 1))}>
				{'>>'}
			</Button>
		</Wrapper>
	)
}

const Button = styled.button`
	position: absolute;
	top: 50%;
	padding: 4px;
`

const Wrapper = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 8px;
`

const CarouselTitle = styled.label`
	color: #e5e5e5;
	font-size: 17px;
	font-weight: 500;
	margin-left: 5%;
`

const Body = styled.main`
	display: flex;
	gap: 4px;
	padding: 0 5%;
	width: 100%;
	overflow-x: scroll;

	&::-webkit-scrollbar {
		display: none;
	}
`

const MockItem = styled.div`
	--item-width: calc((100vw / 5) - (5vw / 2));
	width: var(--item-width);
	min-width: var(--item-width);
	aspect-ratio: 16/9;
	border-radius: 6px;
	background: #333;
	color: #aaa;
	padding: 4px;
`
