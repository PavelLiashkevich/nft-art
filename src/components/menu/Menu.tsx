import React from 'react'
import styled from 'styled-components'

export const Menu = () => {
	return (
		<StyledMenu>
			<ul>
				<li>
					<a href=''>Marketplace</a>
				</li>
				<li>
					<a href=''>Artists</a>
				</li>
				<li>
					<a href=''>Community</a>
				</li>
				<li>
					<a href=''>Collections</a>
				</li>
			</ul>
		</StyledMenu>
	)
}

const StyledMenu = styled.nav`
	ul {
		display: flex;
		gap: 40px;
	}
`
