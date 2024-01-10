import React from 'react'
import styled from 'styled-components'

import { FlexContainer } from '../../components/FlexContainer'

export const Copyright = () => {
	return (
		<FlexContainer justify='space-between' align='center' marginTop='48px'>
			<CopyrightText>© Copyright 2023 - Creativeart</CopyrightText>
			<Additional>
				<AdditionalList>
					<AdditionalItem>
						<AdditionalLink>Privacy Policy</AdditionalLink>
					</AdditionalItem>
					<AdditionalItem>
						<AdditionalLink>Terms & Conditions</AdditionalLink>
					</AdditionalItem>
				</AdditionalList>
			</Additional>
		</FlexContainer>
	)
}

const CopyrightText = styled.span`
	color: #fffffd;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
`

const Additional = styled.div``

const AdditionalList = styled.ul`
	display: flex;
`

const AdditionalItem = styled.li`
	color: #fffffd;
	text-align: center;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	:first-child {
		margin-right: 24px;
	}
`

const AdditionalLink = styled.a``
