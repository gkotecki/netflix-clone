'use client'

import { Button } from '@/components/Button'
import { styled } from 'styled-components'

export default function Page() {
	return (
		<>
			<CarouselTitle>Browse page</CarouselTitle>
			<Button>Test</Button>
		</>
	)
}

const CarouselTitle = styled.h1`
	color: red;
`
