import React from 'react'
import styled from 'styled-components'

import { theme } from '../../styles/Theme'

export const Menu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledMenu>
			<ul>
				{props.menuItems.map((item, index) => {
					return (
						<ListItem key={index}>
							<Link href='#'>{item}</Link>
						</ListItem>
					)
				})}
			</ul>
		</StyledMenu>
	)
}

const StyledMenu = styled.nav`
	ul {
		display: flex;
		gap: 40px;

		li > a {
			color: ${theme.colors.disable};
		}

		@media screen and (max-width: 992px) {
			gap: 18px;
		}
	}

	@media ${theme.media.tablet} {
		display: none;
	}
`

const ListItem = styled.li`
	padding-bottom: 1px;
	:hover {
		border-bottom: 1px solid ${theme.colors.secondary};
	}
`

const Link = styled.a`
	:hover {
		color: ${theme.colors.primary};
	}
`
