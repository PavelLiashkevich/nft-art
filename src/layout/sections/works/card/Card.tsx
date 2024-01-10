import React from 'react'
import styled from 'styled-components'

import { FlexContainer } from '../../../../components/FlexContainer'
import { Icon } from '../../../../components/icon/Icon'
import { CardBtn } from './CardBtn'

type CardPropsType = {
	title: string
	price: number
	src: string
}

export const Card = (props: CardPropsType) => {
	return (
		<StyledCard>
			<Image src={props.src}></Image>
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
	max-height: 340px;
	border-radius: 16px;
	margin-bottom: 24px;
`

const Title = styled.h4`
	color: #fffffd;
	font-size: 24px;
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
	color: #fffffd;
	margin-left: 12px;
	font-size: 16px;
	font-weight: 700;
	line-height: 120%;
`
