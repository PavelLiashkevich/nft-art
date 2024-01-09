import React from 'react'
import styled from 'styled-components'

export const CardBtn = () => {
	return <StyledCardButton>Place A Bid</StyledCardButton>
}

const StyledCardButton = styled.a`
	padding: 12px 40px;
	border-radius: 8px;
	border: 1px solid #d3f85a;
	background: #131e3a;
`
