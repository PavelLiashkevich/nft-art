import React from 'react'
import styled from 'styled-components'
import { CardButton } from '../buttons/CardButton'
import { FlexContainer } from '../FlexContainer'

export const CardBid = () => {
	return (
		<StyledCardBid>
			<FlexContainer align={'center'} justify={'space-between'}>
				<InfoColumn>
					<span>Ends in</span>
					<span>05:45:47</span>
				</InfoColumn>
				<InfoColumn>
					<span>Current bid</span>
					<span>0.24ETH</span>
				</InfoColumn>
			</FlexContainer>
			<CardButton />
		</StyledCardBid>
	)
}

export const StyledCardBid = styled.div`
	padding: 20px;
	border-radius: 16px;
	border-top: 1px solid #d3f85a;
	background: #131e3a;
	box-shadow: 0px 9px 50px 0px rgba(23, 36, 65, 0.04);
	max-width: 304px;
	color: #d3f85a;
`

const InfoColumn = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 24px;
	gap: 8px;
`
