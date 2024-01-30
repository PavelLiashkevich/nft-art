import styled from 'styled-components'

import { CardButton } from '../buttons/CardButton'
import { FlexContainer } from '../FlexContainer'
import { theme } from '../../styles/Theme'

export const CardBid = () => {
	return (
		<StyledCardBid>
			<FlexContainer align={'center'} justify={'space-between'}>
				<InfoColumn>
					<span>Ends in</span>
					<Info>05:45:47</Info>
				</InfoColumn>
				<InfoColumn>
					<span>Current bid</span>
					<Info>0.24ETH</Info>
				</InfoColumn>
			</FlexContainer>
			<CardButton />
		</StyledCardBid>
	)
}

export const StyledCardBid = styled.div`
	padding: 20px;
	border-radius: 16px;
	border-top: 1px solid ${theme.colors.secondary};
	background: #131e3a;
	box-shadow: 0px 9px 50px 0px rgba(23, 36, 65, 0.04);
	max-width: 304px;
	color: ${theme.colors.secondary};
	position: absolute;
	width: 100%;
	right: -50px;
	top: 468px;

	@media screen and (max-width: 1181px) {
		right: -25px;
	}
	
	@media ${theme.media.tablet} {
		top: 320px;
		width: 90%;
	}

	@media ${theme.media.mobile} {
		top: 250px;
		right: -30px;		
	}
`

const InfoColumn = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 24px;
	gap: 8px;
`

const Info = styled.span`
	color: ${theme.colors.primary};
	font-weight: 700;
	line-height: 120%; 
`