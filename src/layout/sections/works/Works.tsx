import React from 'react'
import styled from 'styled-components'

import { FlexContainer } from '../../../components/FlexContainer'
import { BaseButton } from '../../../components/buttons/BaseButton'
import { SectionTitle } from '../../../components/SectionTitle'
import { Container } from '../../../components/Container'
import { Slider } from '../../../components/slider/Slider'
import { Fade } from "react-awesome-reveal";

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
				<Fade>
					<FlexContainer justify='center'>
						<Slider/>
					</FlexContainer>
				</Fade>
			</Container>
		</StyledWorks>
	)
}

const StyledWorks = styled.section``