import React from 'react'
import styled from 'styled-components'

import { Icon } from '../icon/Icon'
import { theme } from '../../styles/Theme'

export const Logo = () => {
	return (
		<StyledLink href=''>
			<Icon iconId={'logo'} width='28' height='28' viewBox='0 0 28 28' />
			<StyledText>
				Creative<span>art</span>
			</StyledText>
		</StyledLink>
	)
}

const StyledLink = styled.a`
	display: flex;
`

const StyledText = styled.div`
	color: ${theme.colors.primary};
	font-family: 'Loro';
	font-size: 32px;
	margin-top: 10px;

	span {
		color: ${theme.colors.secondary};	
	}
`