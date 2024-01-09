import React from 'react'
import styled from 'styled-components'
import { BaseButton } from '../../../components/buttons/BaseButton'
import { FlexContainer } from '../../../components/FlexContainer'
import { SectionTitle } from '../../../components/SectionTitle'
import { Artist } from './artist/Artist'


export const Artists = () => {
	return (
		<StyledArtists>
			<FlexContainer justify={'space-between'} align={'center'}>
				<SectionTitle maxWidth='307px'>
					Popular <span>Artists</span> On This Week
				</SectionTitle>
				<BaseButton text={'See All'} />
			</FlexContainer>
			<FlexContainer align={'center'}>
				<Artist src={'../../../assets/images/artists/popularWork1.webp'}/>
				{/*<Artist />
				<Artist />
				<Artist />*/}
			</FlexContainer>
		</StyledArtists>
	)
}

const StyledArtists = styled.section`
	min-height: 100vh;
	background-color: lightgray;
`
