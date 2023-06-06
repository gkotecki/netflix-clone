'use client'

import { Button } from '@/components/Button'
import Navbar from '@/components/navbar/Navbar'
import { styled } from 'styled-components'

export default function Page() {
  return (
    <>
      <Navbar />
      <Title>Browse page</Title>
      <Button>Test</Button>
    </>
  )
}

const Title = styled.h1`
  color: red;
`
