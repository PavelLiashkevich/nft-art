import React from 'react'
import styled from 'styled-components'

import { FlexContainer } from '../../../components/FlexContainer'
import { SectionTitle } from '../../../components/SectionTitle'
import { StyledDescription } from '../../../components/Description'
import { BaseButton } from '../../../components/buttons/BaseButton'
import { AdditionalButton } from '../../../components/buttons/AdditionalButton'

import photoOne from '../../../assets/images/others/createNft1.webp'
import photoTwo from '../../../assets/images/others/createNft2.webp'

export const CreateNft = () => {
	return (
		<StyledCreateNft>
			<FlexContainer align={'center'} justify={'space-between'}>
				<MainColumn>
					<SectionTitle>Create And Sell Your <span>Best NFTs</span></SectionTitle>
					<StyledDescription>
						Start exploring the world of digital art and NFTs today and take
						control of your digital assets with confidence!
					</StyledDescription>
					<div>
						<BaseButton text={'Create Now'} />
						<AdditionalButton text={'Learn More'} />
					</div>
				</MainColumn>
				<MainColumn>
					<Photo src={photoOne} />
					<Photo src={photoTwo} />
				</MainColumn>
			</FlexContainer>
		</StyledCreateNft>
	)
}

const StyledCreateNft = styled.section`
	min-height: 100vh;
	background-color: #eca5a5;
`

const MainColumn = styled.div`
	max-width: 426px;
`

const Photo = styled.img`
	height: 554px;
	max-width: 410px;
	object-fit: cover;
	object-position: 0 0;
	border-radius: 24px;
`
