import React from 'react'
import styled from 'styled-components'

import { FlexContainer } from '../../../../components/FlexContainer'
import { Icon } from '../../../../components/icon/Icon'
import { CardBtn } from './CardBtn'
import { theme } from '../../../../styles/Theme'

type CardPropsType = {
	title: string
	price: number
	src: string
}

export const Card = (props: CardPropsType) => {
	return (
		<StyledCard>
			<PhotoWrapper>
				<Image src={props.src}></Image>
			</PhotoWrapper>
			<FlexContainer justify='space-between' marginBottom='16px'>
				<Title>{props.title}</Title>
				<Price>
					<Icon iconId={'ethereumLogo'} />
					<PriceEth>{props.price}ETH</PriceEth>
				</Price>
			</FlexContainer>

			<FlexContainer justify='space-between' align='center'>
				<FlexContainer direction='column'>
					<MiniTitle>Ending In</MiniTitle>
					<FlexContainer align='center'>
						<Icon iconId={'clock'} />
						<Time>03:24:56</Time>
					</FlexContainer>
				</FlexContainer>

				<CardBtn />
			</FlexContainer>
		</StyledCard>
	)
}

const StyledCard = styled.div`
	padding: 20px;
	border-radius: 16px;
	border-top: 1px solid ${theme.colors.secondary};
	background: #131e3a;
	box-shadow: 0px 9px 50px 0px rgba(23, 36, 65, 0.04);
	color: ${theme.colors.secondary};

	@media screen and (max-width: 375px) {
		width: 343px;
		padding: 16px;
	}
`

const PhotoWrapper = styled.div `
	width: 370px;
	height: 340px;
	margin-bottom: 24px;

	@media screen and (max-width: 410px) {
		width: 310px;
	}
`

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: 0 0;
	border-radius: 16px;
`

const Title = styled.h4`
	color: ${theme.colors.primary};
	line-height: 120%;
`

const Price = styled.div`
	align-items: center;
	display: flex;
`

const PriceEth = styled.span`
	font-size: 16px;
	font-weight: 700;
`

const MiniTitle = styled.span`
	color: #838382;
	margin-bottom: 4px;
	font-size: 14px;
	line-height: 160%;
`

const Time = styled.span`
	color: ${theme.colors.primary};
	margin-left: 12px;
	font-size: 16px;
	font-weight: 700;
	line-height: 120%;
`