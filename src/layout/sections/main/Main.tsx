import React from 'react'
import styled from 'styled-components'

import { BaseButton } from '../../../components/buttons/BaseButton'
import { FlexContainer } from '../../../components/FlexContainer'
import { CardBid } from '../../../components/cardBid/CardBid'
import { AdditionalButton } from '../../../components/buttons/AdditionalButton'
import { StyledDescription } from '../../../components/Description'
import { theme } from '../../../styles/Theme'
import { Container } from '../../../components/Container'

import photo from '../../../assets/images/others/mainImage.webp'
import { Icon } from '../../../components/icon/Icon'

export const Main = () => {
	return (
		<StyledMain>
			<Container>
				<FlexContainer align={'center'} justify={'space-around'} wrap={'wrap'}>
					<MainColumnInfo>
						<SectionMainTitle>
							Discover and Collect The Best NFTs <span>Digital Art.</span>
						</SectionMainTitle>
						<StyledDescription>
							Get started with the easiest and most secure platform to buy and
							trade digital ART and NFT's. Start exploring the world of digital
							art and NFTs today and take control of your digital assets with
							confidence!
						</StyledDescription>
						<FlexContainer align='center' marginBottom='72px'>
							<BaseButton text={'Explore Now'} />
							<AdditionalButton text={'Learn More'} />
						</FlexContainer>
						<FlexContainer justify={'space-between'}>
							<StyledStatisticsColumn>
								<h2>
									8.9
								</h2>
								<span>Art work</span>
							</StyledStatisticsColumn>
							<StyledStatisticsColumn>
								<h2>
									65
								</h2>
								<span>Artist</span>
							</StyledStatisticsColumn>
							<StyledStatisticsColumn>
								<h2>
									87
								</h2>
								<span>Collection</span>
							</StyledStatisticsColumn>
						</FlexContainer>
					</MainColumnInfo>
					<MainColumnDesign>
						<Photo src={photo} alt='Photo' />
						<CardBid />
						<StyledSvg viewBox='0 0 100 100' width='100' height='100'>
							<defs>
								<path
									id='circle'
									d='
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0'
								/>
							</defs>
							<text fontSize='14'>
								<textPath href='#circle'>
									ArtworkoftheweekArtworkoftheweek
								</textPath>
							</text>
						</StyledSvg>
						<IconWrapper>
							<Icon
								iconId='star'
								width='35px'
								height='35px'
								viewBox='0 0 35 35'
							/>
						</IconWrapper>
					</MainColumnDesign>
				</FlexContainer>
			</Container>
		</StyledMain>
	)
}

const StyledMain = styled.section``

const MainColumnInfo = styled.div`
	max-width: 544px;
`

const MainColumnDesign = styled.div`
	padding: 0 55px 0 150px;
	position: relative;	
	
	@media screen and (max-width: 1244px){
		margin-top: 48px;
	}

	@media screen and (max-width: 1164px){
		margin-top: 48px;
	}

	@media ${theme.media.mobile} {
		padding: 0 155px 0 155px;
	}

	@media screen and (max-width: 375px){
		padding: 0 55px 0 70px;
	}
`

const SectionMainTitle = styled.h1`
	font-family: 'Lora';
	font-weight: 500;
	line-height: 120%;
	margin-bottom: 20px;

	span {
		color: #d3f85a;
	}
`

const Photo = styled.img`
	width: 464px;
	height: 544px;
	
	border-radius: 24px;
	object-fit: cover;
	object-position: 0 0;

	@media ${theme.media.tablet} {
		width: 354px;
		height: 404px;
	}

	@media ${theme.media.mobile} {
		width: 294px;
		height: 344px;
	}
`

const StyledStatisticsColumn = styled.div`
	display: flex;
	flex-direction: column;
	font-family: 'Lora';
	gap: 8px;
	padding-right: 28px;

	:not(:last-child) {
		border-right: 1px solid ${theme.colors.secondary};
	}

	h2 {
		color: ${theme.colors.secondary};
		::after {
			content: 'K';
			color: ${theme.colors.primary};
			font-family: 'Lora';
			font-size: calc( (100vw - 375px) / (1512 - 375) * (48 - 31) + 31px);
		}
	}

	span {
		font-family: 'Inter';
		font-size: 16px;
	}
`

const StyledSvg = styled.svg`
	font-family: 'Lora';
	fill: currentColor;
	height: auto;
	max-width: 172px;
	transform-origin: center;
	width: 100%;
	position: absolute;
	top: 223px;
	left: 90px;

	@media ${theme.media.tablet} {
		max-width: 130px;
		top: 140px;
		left: 110px
	}

	@media ${theme.media.mobile} {
		max-width: 110px;
		left: 120px
	}

	@media screen and (max-width: 375px){
		left: 40px
	}
`

const IconWrapper = styled.div`
	position: absolute;
	top: 290px;
	left: 157px;

	@media ${theme.media.tablet} {
		max-width: 130px;
		top: 187px;
	}

	@media ${theme.media.mobile} {
		top: 176px;
		left: 157px
	}

	@media screen and (max-width: 375px){
		left: 78px
	}
`
