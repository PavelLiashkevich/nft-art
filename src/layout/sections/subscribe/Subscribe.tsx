import React from 'react'
import styled from 'styled-components'

import { SectionTitle } from '../../../components/SectionTitle'
import { StyledDescription } from '../../../components/Description'
import { SubscribeButton } from '../../../components/buttons/SubscribeButton'

import subscribeImg1 from '../../../assets/images/others/subscribeImg1.webp'
import subscribeImg2 from '../../../assets/images/others/subscribeImg2.webp'

export const Subscribe = () => {
	return (
		<StyledSubscribe>
			<MainColumn>
				<Photo src={subscribeImg1} />
				<Photo src={subscribeImg2} />
			</MainColumn>
			<MainColumn>
				<SectionTitle>
					Subscribe And <span>get our Updates</span> Every Week
				</SectionTitle>
				<StyledDescription>
					We have a blog related to NFT so we can share thoughts and routines on
					our blog which is updated weekly
				</StyledDescription>
				<StyledInput type='email' placeholder='Enter your e-mail' />
				<SubscribeButton text='Subscribe' type={'submit'} />
			</MainColumn>
		</StyledSubscribe>
	)
}

const StyledSubscribe = styled.section`
	min-height: 100vh;
	background-color: #826969;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const MainColumn = styled.div`
	max-width: 630px;
`

const Photo = styled.img`
	height: 340px;
	max-width: 410px;
	object-fit: cover;
	object-position: 0 0;
	border-radius: 20px;
`

const StyledInput = styled.input.attrs(props => ({
	type: props.type || 'text',
	placeholder: props.placeholder || 'NFT Art',
}))`
	padding: 16px 24px;
	border-radius: 8px;
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
