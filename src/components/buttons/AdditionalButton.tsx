import React from 'react'
import styled from 'styled-components'

type AdditionalButtonPropsType = {
	text: string
}

export const AdditionalButton = (props: AdditionalButtonPropsType) => {
	return <StyledAdditionalButton>{props.text}</StyledAdditionalButton>
}

const StyledAdditionalButton = styled.a`
	color: #fffffd;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 120%;
	background-color: transparent;
	border: none;
	margin-left: 36px;

	:hover {
		cursor: pointer;
	}
`
