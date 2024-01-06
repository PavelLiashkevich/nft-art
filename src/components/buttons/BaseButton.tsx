import React from 'react'
import styled from 'styled-components'

type BaseButtonPropsType = {
	text: string
}

export const BaseButton = (props: BaseButtonPropsType) => {
	return <StyledBaseButton>{props.text}</StyledBaseButton>
}

const StyledBaseButton = styled.a`
	padding: 12px 40px;
	border-radius: 8px;
	border-style: none;
	background: #d3f85a;
`
