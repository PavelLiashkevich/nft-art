import React from 'react'
import work1 from '../../../../assets/images/artists/popularWork1.webp'
import author1 from '../../../../assets/images/artists/artistLogo1.webp'
import styled from 'styled-components'

type ImagePropsType = {
	src: string
}

export const Artist = (props: ImagePropsType) => {
	return (
		<StyledArtist>
			<Image src={props.src}/>
			{/*<ImageAuthor src={props.src}/>*/}
		</StyledArtist>
	)
}

const StyledArtist = styled.div`
	display: flex;
	align-items: flex-end;
	position: relative;
	max-width: 350px;
`

const Image = styled.img`
	width: 100%;
	object-fit: cover;
	border-radius: 16px;
`

const ImageAuthor = styled.img`
	object-fit: cover;
	width: 48px;
	height: 48px;
	position: absolute;
	border-radius: 48px;
	bottom: 30px;
    left: 30px;
`
