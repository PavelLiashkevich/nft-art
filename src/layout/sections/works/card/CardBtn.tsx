import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'

export const CardBtn = () => {
	return <StyledCardButton>Place A Bid</StyledCardButton>
}

const StyledCardButton = styled.a`
	padding: 12px 40px;
	border-radius: 8px;
	border: 1px solid #d3f85a;
	background: #131e3a;
	font-weight: 700;
	transition: 0.4s;

	:hover {
		cursor: pointer;
		background-color: ${theme.colors.primary};
		color: ${theme.colors.btnText};
		font-weight: bold;
	}

	@media ${theme.media.tablet} {
		padding: 12px 32px;
	}

	@media ${theme.media.mobile} {
		padding: 12px 30px;
	}
`