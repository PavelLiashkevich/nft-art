import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
import { BaseButton } from '../../components/buttons/BaseButton'

export const Header = () => {
	return (
		<StyledHeader>
			<Logo />
			<Menu />
			<BaseButton text='Contact'/>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	background-color: #edb3b3;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
