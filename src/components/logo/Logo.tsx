import React from 'react'
import { Icon } from '../icon/Icon'
import styled from 'styled-components'

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
	color: #fff;
	font-size: 32px;
	font-style: normal;
	font-weight: 500;
	span {
		color: #d3f85a;
	}
`
