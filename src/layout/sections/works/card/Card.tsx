import React from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../../../components/FlexContainer'
import { Icon } from '../../../../components/icon/Icon'
import { CardButton } from '../../../../components/buttons/CardButton'

type CardPropsType = {
	title: string
	price: number
	src: string
}

export const Card = (props: CardPropsType) => {
	return (
		<StyledCard>
			<Image src={props.src}></Image>
			<FlexContainer justify='space-between' align='center'>
				<Title>{props.title}</Title>
				<Price>
					<Icon iconId={'ethereumLogo'} />
					<PriceEth>{props.price}ETH</PriceEth>
				</Price>
			</FlexContainer>

			<FlexContainer justify='space-between' align='center'>
				<FlexContainer direction='column'>
					<MiniTitle>Ending In</MiniTitle>
					<FlexContainer>
						<Icon iconId={'clock'} />
						<Time>03:24:56</Time>
					</FlexContainer>
				</FlexContainer>

				<CardButton />
			</FlexContainer>
		</StyledCard>
	)
}

const StyledCard = styled.div`
	padding: 20px;
	border-radius: 16px;
	border-top: 1px solid #d3f85a;
	background: #131e3a;
	box-shadow: 0px 9px 50px 0px rgba(23, 36, 65, 0.04);
	max-width: 410px;
	width: 100%;
	color: #d3f85a;
`

const Image = styled.img`
	width: 100%;
	object-fit: cover;
	object-position: 0 0;
	height: 340px;
	border-radius: 16px;
`

const Title = styled.h4`
	color: #fffffd;
	font-family: Inter;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 120%;
`

const Price = styled.div``

const PriceEth = styled.span``

const MiniTitle = styled.span`
	color: #838382;
	font-family: Inter;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 160%;
`

const Time = styled.span`
	color: #fffffd;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 120%;
`
