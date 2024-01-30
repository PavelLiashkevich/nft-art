import styled from 'styled-components'

import { FlexContainer } from '../../components/FlexContainer'
import { theme } from '../../styles/Theme'

export const Copyright = () => {
	return (
		<FlexContainer justify='space-between' align='center' marginTop='48px' wrap='wrap'>
			<CopyrightText>© Copyright 2023 - Creativeart</CopyrightText>
			<Additional>
				<AdditionalList>
					<AdditionalItem>
						<AdditionalLink href='#'>Privacy Policy</AdditionalLink>
					</AdditionalItem>
					<AdditionalItem>
						<AdditionalLink href='#'>Terms & Conditions</AdditionalLink>
					</AdditionalItem>
				</AdditionalList>
			</Additional>
		</FlexContainer>
	)
}

const CopyrightText = styled.span`
	color: ${theme.colors.primary};
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
`

const Additional = styled.div`
	@media screen and (max-width: 546px) {
		margin-top: 16px;
	}
`

const AdditionalList = styled.ul`
	display: flex;
`

const AdditionalItem = styled.li`
	color: ${theme.colors.primary};
	text-align: center;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	
	:first-child {
		margin-right: 24px;
	}
`

const AdditionalLink = styled.a`
	color: ${theme.colors.primary};

	:hover {
		cursor: pointer;
	}
`
