import React from 'react'
import styled from 'styled-components'

type SubscribeButtonPropsType = {
	text: string
	type?: string
}

export const SubscribeButton = (props: SubscribeButtonPropsType) => {
	return <StyledSubscribeButton>{props.text}</StyledSubscribeButton>
}

const StyledSubscribeButton = styled.button`
	padding: 12px 40px;
	border-radius: 8px;
	border-style: none;
	background: #d3f85a;
`