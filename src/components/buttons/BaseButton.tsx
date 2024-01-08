import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'

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
	background: ${theme.colors.secondary};
	color: ${theme.colors.btnText};
`
