import React from 'react'
import styled from 'styled-components'

import { SectionTitle } from '../../../components/SectionTitle'
import { StyledDescription } from '../../../components/Description'
import { SubscribeButton } from '../../../components/buttons/SubscribeButton'
import { FlexContainer } from '../../../components/FlexContainer'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'

import subscribeImg1 from '../../../assets/images/others/subscribeImg1.webp'
import subscribeImg2 from '../../../assets/images/others/subscribeImg2.webp'

export const Subscribe = () => {
	return (
		<StyledSubscribe>
			<Container>
				<FlexContainer align={'center'} justify={'space-around'} wrap={'wrap'}>
					<SubscribeColumn>
						<PhotoWrapperOne>
							<PhotoOne src={subscribeImg1} />
						</PhotoWrapperOne>
						<PhotoWrapperTwo>
							<PhotoTwo src={subscribeImg2} />
						</PhotoWrapperTwo>
					</SubscribeColumn>
					<SubscribeColumnTwo>
						<SectionTitle>
							Subscribe And <span>get our Updates</span> Every Week
						</SectionTitle>
						<StyledDescription>
							We have a blog related to NFT so we can share thoughts and
							routines on our blog which is updated weekly
						</StyledDescription>
						<FormContainer>
							<StyledInput type='email' placeholder={'Enter your e-mail'} />
							<SubscribeButton text='Subscribe' type={'submit'} />
						</FormContainer>
					</SubscribeColumnTwo>
				</FlexContainer>
			</Container>
		</StyledSubscribe>
	)
}

const StyledSubscribe = styled.section`
	padding: 92px 0 184px;
`

const SubscribeColumn = styled.div`
	max-width: 630px;
	position: relative;

	margin-right: 170px;

	@media screen and (max-width: 1131px) {
		order: 1;
		margin-top: 130px;
	}

	@media ${theme.media.mobile} {
		margin-top: 100px;
		margin-right: 130px;
	}
`

const PhotoWrapperOne = styled.div`
	width: 410px;
	height: 376px;

	@media ${theme.media.tablet} {
		width: 380px;
		height: 360px;
	}

	@media ${theme.media.mobile} {
		width: 320px;
		height: 290px;
	}

	@media screen and (max-width: 430px) {
		width: 260px;
		height: 250px;
	}
  
	@media screen and (max-width: 375px) {
		width: 220px;
    	height: 200px;
	}
`
const PhotoOne = styled.img`
	width: 100%;
	height: 100%;

	object-fit: cover;
	object-position: 0 30%;
	border-radius: 20px;

	transform: rotate(-11.188deg);
	margin-left: 30px;
`

const PhotoWrapperTwo = styled.div`
	width: 282px;
	height: 348px;

	position: absolute;
	top: 170px;
	left: 270px;

	@media ${theme.media.tablet} {
		width: 260px;
		height: 310px;

		right: 70px;
		top: 190px;
	}

	@media ${theme.media.mobile} {
		width: 240px;
		height: 270px;

		left: 200px;
		top: 190px;
	}

	@media screen and (max-width: 430px) {
		width: 200px;
		height: 230px;

		left: 170px;
	}

	@media screen and (max-width: 375px) {
		width: 150px;
    	height: 190px;

		top: 160px;
		left: 180px;
	}
`

const PhotoTwo = styled.img`
	width: 100%;
	height: 100%;

	object-fit: cover;
	object-position: 0 0;
	border-radius: 20px;

	z-index: 999;
`

const SubscribeColumnTwo = styled.div`
	max-width: 520px;
`

const FormContainer = styled.div`
	display: flex;
	position: relative;
`

const StyledInput = styled.input.attrs(props => ({
	type: props.type || 'text',
	placeholder: props.placeholder || 'NFT Art',
}))`
	width: 100%;
	padding: 16px 24px;
	border-radius: 8px;
	border-style: none;
	background: #131e3a;
	color: rgba(255, 255, 253, 0.72);
	font-size: 16px;

	:focus {
		outline: none;
	}

	::placeholder {
		color: rgba(255, 255, 253, 0.72);
	}
`