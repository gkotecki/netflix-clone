'use client'

import NextLink from 'next/link'
import { styled } from 'styled-components'

export default function Navbar() {
	return (
		<>
			<Nav>
				<Logo>NETFLIX</Logo>

				<Links style={{ marginRight: 'auto' }}>
					<Link href="/browse">Home</Link>
					<Link href="/browse/genre/83">TV Shows</Link>
					<Link href="/browse/genre/34399">Movies</Link>
					<Link href="/latest">New & Popular</Link>
					<Link href="/browse/my-list">My List</Link>
					<Link href="/browse/original-audio">Browse by Languages</Link>
				</Links>

				<Links>
					<span>search</span>
					<span>kids</span>
					<span>ntfcns</span>
					<span>profile</span>
				</Links>
			</Nav>
		</>
	)
}

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 5%;
	padding: 0 5%;
	height: 68px;
	color: #fff;
	background: linear-gradient(black 0%, rgba(0, 0, 0, 0.1) 90%);
`

const Logo = styled.span`
	color: red;
	font-size: 2rem;
	font-weight: 700;
`

const Links = styled.div`
	display: flex;
	gap: 20px;
`

const Link = styled(NextLink)`
	font-size: 14px;
	color: #ccc;
	transition: 0.2s;
	text-decoration: none;
	&:hover {
		color: #999;
	}
	&:visited {
		color: #fff;
	}
`
