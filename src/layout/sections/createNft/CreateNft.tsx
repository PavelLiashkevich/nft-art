import React from 'react'
import styled from 'styled-components'

import { FlexContainer } from '../../../components/FlexContainer'
import { SectionTitle } from '../../../components/SectionTitle'
import { StyledDescription } from '../../../components/Description'
import { BaseButton } from '../../../components/buttons/BaseButton'
import { AdditionalButton } from '../../../components/buttons/AdditionalButton'
import { Container } from '../../../components/Container'

import photoOne from '../../../assets/images/others/createNft1.webp'
import photoTwo from '../../../assets/images/others/createNft2.webp'

export const CreateNft = () => {
	return (
		<StyledCreateNft>
			<Container>
				<FlexContainer align={'center'} justify={'space-between'}>
					<MainColumnInfo>
						<SectionTitle>
							Create And Sell Your <span>Best NFTs</span>
						</SectionTitle>
						<StyledDescription>
							Start exploring the world of digital art and NFTs today and take
							control of your digital assets with confidence!
						</StyledDescription>
						<FlexContainer align='center'>
							<BaseButton text={'Create Now'} />
							<AdditionalButton text={'Learn More'} />
						</FlexContainer>
					</MainColumnInfo>
					<MainColumnPhoto>
						<PhotoWrapperOne>
							<PhotoOne src={photoOne} />
						</PhotoWrapperOne>
						<PhotoWrapperTwo>
						<	PhotoTwo src={photoTwo} />
						</PhotoWrapperTwo>
					</MainColumnPhoto>
				</FlexContainer>
			</Container>
		</StyledCreateNft>
	)
}

const StyledCreateNft = styled.section`
	padding-bottom: 176px;
`

const MainColumnInfo = styled.div`
	max-width: 426px;
`

const MainColumnPhoto = styled.div`
	max-width: 740px;
	padding-left: 330px;
	position: relative;
`

const PhotoWrapperOne = styled.div`
	width: 410px;
	height: 400px;

	position: absolute;
	right: 330px;
	top: 160px;
`

const PhotoWrapperTwo = styled.div`
	width: 410px;
	height: 475px;
`

const PhotoOne = styled.img`
	width: 100%;
	height: 100%;

	object-fit: cover;
	object-position: 0 0;
	border-radius: 24px;

	z-index: 999;
`

const PhotoTwo = styled.img`
	width: 100%;
	height: 100%;

	object-fit: cover;
	object-position: 0 50%;
	border-radius: 24px;
`
