import React from 'react'
import styled from 'styled-components'

import { FlexContainer } from '../../components/FlexContainer'
import { Icon } from '../../components/icon/Icon'
import { Logo } from '../../components/logo/Logo'
import { StyledDescription } from '../../components/Description'
import { FooterMenu } from './FooterMenu'
import { Container } from '../../components/Container'
import { Copyright } from './Copyright'
import { theme } from '../../styles/Theme'

const exploreItems = ['Art Sign In', 'Collectibles', 'Domain Name', 'Utility']
const statisticItems = ['Ranking', 'Collectibles', 'Activity']
const companyItems = ['About Us', 'Career', 'Support', 'Partners']
const resourcesItems = ['Help Center', 'Platform Status', 'Blog']

export const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<Border>
					<FlexContainer justify='space-between' marginBottom='48px' wrap='wrap'>
						<SocialLinks>
							<Logo />
							<StyledDescription marginBottom='24px'>
								Discover NFTs by category, track the latest drop, and and follow
								the collections you love. Enjoy it!
							</StyledDescription>
							<SocialList>
								<SocialItem>
									<SocialIconLink>
										<Icon iconId='facebook' />
									</SocialIconLink>
								</SocialItem>
								<SocialItem>
									<SocialIconLink>
										<Icon iconId='telegram' />
									</SocialIconLink>
								</SocialItem>
								<SocialItem>
									<SocialIconLink>
										<Icon iconId='twitter' />
									</SocialIconLink>
								</SocialItem>
								<SocialItem>
									<SocialIconLink>
										<Icon iconId='linkedin' />
									</SocialIconLink>
								</SocialItem>
							</SocialList>
						</SocialLinks>
						<OtherLinks>
							<LinksColumn>
								<ListName>Explore</ListName>
								<FooterMenu menuItems={exploreItems} />
							</LinksColumn>
							<LinksColumn>
								<ListName>Statistic</ListName>
								<FooterMenu menuItems={statisticItems} />
							</LinksColumn>
							<LinksColumn>
								<ListName>Company</ListName>
								<FooterMenu menuItems={companyItems} />
							</LinksColumn>
							<LinksColumn>
								<ListName>Resources</ListName>
								<FooterMenu menuItems={resourcesItems} />
							</LinksColumn>
						</OtherLinks>
					</FlexContainer>
				</Border>
				<Copyright />
			</Container>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
	padding: 92px 0;
`

const Border = styled.div`
	border-bottom: 1px solid #838382;
`

const SocialLinks = styled.div`
	max-width: 272px;
`

const SocialList = styled.ul`
	display: flex;
	li + li {
		margin-left: 12px;
	}
`

const SocialItem = styled.li``

const SocialIconLink = styled.a``

const OtherLinks = styled.div`
	display: flex;

	@media screen and (max-width: 990px) {
		margin-top: 48px;
	}

	@media ${theme.media.tablet} {
		flex-direction: column;
		margin-top: 0;
	}

	@media screen and (max-width: 473px) {
		margin-top: 48px;
	}
`

const LinksColumn = styled.div`
	:not(:last-child) {
		margin-right: 94px;
	}

	@media ${theme.media.tablet} {
		:not(:last-child) {
			margin-right: 64px;
			margin-bottom: 20px;
		}
		
	}
`

const ListName = styled.h4`
	color: #fff;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	margin-bottom: 24px;

	@media ${theme.media.tablet} {
		margin-bottom: 10px;
	}
`
