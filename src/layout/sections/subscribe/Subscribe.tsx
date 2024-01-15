import React from 'react'
import styled from 'styled-components'

import { SectionTitle } from '../../../components/SectionTitle'
import { StyledDescription } from '../../../components/Description'
import { SubscribeButton } from '../../../components/buttons/SubscribeButton'
import { FlexContainer } from '../../../components/FlexContainer'
import { Container } from '../../../components/Container'

import subscribeImg1 from '../../../assets/images/others/subscribeImg1.webp'
import subscribeImg2 from '../../../assets/images/others/subscribeImg2.webp'

export const Subscribe = () => {
	return (
		<StyledSubscribe>
			<Container>
				<FlexContainer align='center' justify='space-between'>
					<SubscribeColumn>
						<PhotoOne src={subscribeImg1} />
						<PhotoTwo src={subscribeImg2} />
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
							<StyledInput type='email' placeholder='Enter your e-mail' />
							<SubscribeButton text='Subscribe' type={'submit'} />
						</FormContainer>
					</SubscribeColumnTwo>
				</FlexContainer>
			</Container>
		</StyledSubscribe>
	)
}

const StyledSubscribe = styled.section`
	padding: 92px 0 124px;
`

const SubscribeColumn = styled.div`
	max-width: 630px;
	position: relative;
`

const SubscribeColumnTwo = styled.div`
	max-width: 520px;
`

const PhotoOne = styled.img`
	max-width: 410px;
	height: 376px;
	width: 100%;

	object-fit: cover;
	object-position: 0 0;
	border-radius: 20px;

	transform: rotate(-11.188deg);
	margin-left: 30px;
`

const PhotoTwo = styled.img`
	max-width: 282px;
	height: 348px;
	width: 100%;

	object-fit: cover;
	object-position: 0 0;
	border-radius: 20px;

	position: absolute;
	left: 237px;
	top: 110px;
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
