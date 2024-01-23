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
	font-weight: 700;
	border-style: none;
	background: ${theme.colors.secondary};
	color: ${theme.colors.btnText};
	transition: 0.4s;

	:hover {
		cursor: pointer;
		background-color: ${theme.colors.primary};
	}
`
