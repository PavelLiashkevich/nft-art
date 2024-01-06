import React from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../components/FlexContainer'
import { Icon } from '../../components/icon/Icon'
import { Logo } from '../../components/logo/Logo'
import { StyledDescription } from '../../components/Description'

export const Footer = () => {
	return (
		<StyledFooter>
			<Border>
				<FlexContainer justify='space-between'>
					<SocialLinks>
						<Logo />
						<StyledDescription>
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
							<FooterList>
								<FooterItem>
									<FooterLink>Art Sign In</FooterLink>
								</FooterItem>
								<FooterItem>
									<FooterLink>Collectibles</FooterLink>
								</FooterItem>
								<FooterItem>
									<FooterLink>Domain Name</FooterLink>
								</FooterItem>
								<FooterItem>
									<FooterLink>Utility</FooterLink>
								</FooterItem>
							</FooterList>
						</LinksColumn>
						<LinksColumn>
							<ListName>Statistic</ListName>
							<FooterList>
								<FooterItem>
									<FooterLink>Ranking</FooterLink>
								</FooterItem>
								<FooterItem>
									<FooterLink>Collectibles</FooterLink>
								</FooterItem>
								<FooterItem>
									<FooterLink>Activity</FooterLink>
								</FooterItem>
							</FooterList>
						</LinksColumn>
						<LinksColumn>
							<ListName>Company</ListName>
							<FooterList>
								<FooterItem>
									<FooterLink>About Us</FooterLink>
								</FooterItem>
								<FooterItem>
									<FooterLink>Career</FooterLink>
								</FooterItem>
								<FooterItem>
									<FooterLink>Support</FooterLink>
								</FooterItem>
								<FooterItem>
									<FooterLink>Partners</FooterLink>
								</FooterItem>
							</FooterList>
						</LinksColumn>
						<LinksColumn>
							<ListName>Resources</ListName>
							<FooterList>
								<FooterItem>
									<FooterLink>Help Center</FooterLink>
								</FooterItem>
								<FooterItem>
									<FooterLink>Platform Status</FooterLink>
								</FooterItem>
								<FooterItem>
									<FooterLink>Blog</FooterLink>
								</FooterItem>
							</FooterList>
						</LinksColumn>
					</OtherLinks>
				</FlexContainer>
			</Border>
			<FlexContainer justify='space-between' align='center'>
				<Copyright>© Copyright 2023 - Creativeart</Copyright>
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
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
	min-height: 40vh;
`

const Border = styled.div`
	border-bottom: 1px solid #838382;
`

const SocialLinks = styled.div`
	max-width: 272px;
`

const SocialList = styled.ul`
	display: flex;
`

const SocialItem = styled.li``

const SocialIconLink = styled.a``

const OtherLinks = styled.div`
	display: flex;
`

const LinksColumn = styled.div`
	:not(:last-child) {
		margin-right: 94px;
	}
`

const ListName = styled.h4`
	color: #fff;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
`

const FooterList = styled.ul``

const FooterItem = styled.li`
	color: #ffffff;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
`

const FooterLink = styled.a``

const Copyright = styled.span`
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
