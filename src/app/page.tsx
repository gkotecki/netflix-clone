'use client'

import { Button } from '@/components/Button'
import { styled } from 'styled-components'

export default function Home() {
  return (
    <>
      <Title>Hello world</Title>
      <Button>Test</Button>
    </>
  )
}

const Title = styled.h1`
  color: red;
`
