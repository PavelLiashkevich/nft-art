import React from 'react'
import styled from 'styled-components'

import { FlexContainer } from '../../../components/FlexContainer'
import { BaseButton } from '../../../components/buttons/BaseButton'
import { Card } from './card/Card'
import { SectionTitle } from '../../../components/SectionTitle'

import ImageCard1 from '../../../assets/images/others/image1.webp'
import ImageCard2 from '../../../assets/images/others/image2.webp'
import ImageCard3 from '../../../assets/images/others/image3.webp'
import { Container } from '../../../components/Container'

export const Works = () => {
	return (
		<StyledWorks>
			<Container>
				<FlexContainer justify={'space-between'} align={'center'} marginBottom='64px'>
					<SectionTitle maxWidth='550px'>
						<span>Amazing</span> and Super Unique Art of This <span>Week</span>
					</SectionTitle>
					<BaseButton text={'See All'} />
				</FlexContainer>
				<FlexContainer justify='space-between'>
					<Card src={ImageCard1} title={'Cyberpunk Cocomo'} price={490} />
					<Card src={ImageCard2} title={'Charge, Qi tiao yu'} price={590} />
					<Card src={ImageCard3} title={'Surgeon, Josh Rife'} price={390} />
				</FlexContainer>
			</Container>
		</StyledWorks>
	)
}

const StyledWorks = styled.section`
	padding: 92px 0;
`
