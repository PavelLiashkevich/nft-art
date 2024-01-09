import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export const FooterMenu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledMenu>
			<ul>
				{props.menuItems.map((item, index) => {
					return (
						<ListItem key={index}>
							<Link href=''>{item}</Link>
						</ListItem>
					)
				})}
			</ul>
		</StyledMenu>
	)
}

const StyledMenu = styled.nav``

const ListItem = styled.li`
:not(:last-child) {
	margin-bottom: 8px;
}
`

const Link = styled.a`
	color: ${theme.colors.primary};
`
