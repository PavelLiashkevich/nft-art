import React from 'react'
import styled from 'styled-components'

import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
import { Container } from '../../components/Container'
import { FlexContainer } from '../../components/FlexContainer'
import { MobileMenu } from './mobileMenu/MobileMenu'
import { HeaderButton } from './headerButton/HeaderButton'

const items = ['Marketplace', 'Artists', 'Community', 'Collections']

export const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<FlexContainer justify={'space-between'} align={'center'}>
					<Logo />
					<Menu menuItems={items} />
					<MobileMenu menuItems={items}/>
					<HeaderButton>Contact</HeaderButton>
				</FlexContainer>
			</Container>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	padding: 28px 0;
`