'use client'

import { Button } from '@/components/Button'
import Link from 'next/link'
import { styled } from 'styled-components'

export default function Home() {
  return (
    <>
      <Link href='/browse'>Browse</Link>
    </>
  )
}

const Title = styled.h1`
  color: red;
`
