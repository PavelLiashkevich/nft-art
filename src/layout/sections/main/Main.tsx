import React from 'react'
import styled from 'styled-components'

import photo from '../../../assets/images/others/mainImage.webp'

import { BaseButton } from '../../../components/buttons/BaseButton'
import { FlexContainer } from '../../../components/FlexContainer'
import { CardBid } from '../../../components/cardBid/CardBid'
import { AdditionalButton } from '../../../components/buttons/AdditionalButton'
import { StyledDescription } from '../../../components/Description'

export const Main = () => {
	return (
		<StyledMain>
			<FlexContainer align={'center'} justify={'space-between'}>
				<MainColumn>
					<SectionMainTitle>
						Discover and Collect The Best NFTs <span>Digital Art.</span>
					</SectionMainTitle>
					<StyledDescription>
						Get started with the easiest and most secure platform to buy and
						trade digital ART and NFT's. Start exploring the world of digital
						art and NFTs today and take control of your digital assets with
						confidence!
					</StyledDescription>
					<div>
						<BaseButton text={'Explore Now'} />
						<AdditionalButton text={'Learn More'} />
					</div>

					<FlexContainer justify={'space-between'}>
						<StyledStatisticsColumn>
							<span>8.9K</span>
							<span>Art work</span>
						</StyledStatisticsColumn>
						<StyledStatisticsColumn>
							<span>65K</span>
							<span>Artist</span>
						</StyledStatisticsColumn>
						<StyledStatisticsColumn>
							<span>87K</span>
							<span>Collection</span>
						</StyledStatisticsColumn>
					</FlexContainer>
				</MainColumn>
				<MainColumn>
					<Photo src={photo} alt='' />
					<CardBid />
				</MainColumn>
			</FlexContainer>
		</StyledMain>
	)
}

const StyledMain = styled.section`
	min-height: 100vh;
`

const MainColumn = styled.div`
	max-width: 544px;
`

const SectionMainTitle = styled.h1`
	color: #fffffd;
	font-size: 64px;
	font-style: normal;
	font-weight: 500;
	line-height: 120%;

	span {
		color: #d3f85a;
	}
`

const Photo = styled.img`
	max-width: 464px;
	height: 554px;
	object-fit: cover;
	object-position: 0 0;
`

const StyledStatisticsColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	border-right: 1px solid #d3f85a;
	padding-right: 28px;
	span {
		color: #fffffd;
		font-size: 30px;
	}
`
