import React from 'react'
import styled from 'styled-components'

import { FlexContainer } from '../../../components/FlexContainer'
import { BaseButton } from '../../../components/buttons/BaseButton'
import { Card } from './card/Card'
import { SectionTitle } from '../../../components/SectionTitle'
import { Container } from '../../../components/Container'

import ImageCard1 from '../../../assets/images/others/image1.webp'
import ImageCard2 from '../../../assets/images/others/image2.webp'
import ImageCard3 from '../../../assets/images/others/image3.webp'

export const Works = () => {
	return (
		<StyledWorks>
			<Container>
				<FlexContainer
					justify={'space-between'}
					align={'center'}
					marginBottom='64px'
				>
					<SectionTitle maxWidth='550px'>
						<span>Amazing</span> and Super Unique Art of This <span>Week</span>
					</SectionTitle>
					<BaseButton text={'See All'} />
				</FlexContainer>
				<FlexContainer justify='center'>
					<Wrap>
					<Card src={ImageCard1} title={'Cyberpunk Cocomo'} price={490} />
					<Card src={ImageCard2} title={'Charge, Qi tiao yu'} price={590} />
					<Card src={ImageCard3} title={'Surgeon, Josh Rife'} price={390} />
				</Wrap>
				</FlexContainer>
				
			</Container>
		</StyledWorks>
	)
}

const StyledWorks = styled.section``

const Wrap = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(410px, 1fr));
	grid-auto-rows: 498px;
	gap: 20px;

	@media screen and (max-width: 1290px){
		justify-items: center;
	}
`
