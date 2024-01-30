import styled from 'styled-components'

type SubscribeButtonPropsType = {
	text: string
	type?: string
}

export const SubscribeButton = (props: SubscribeButtonPropsType) => {
	return <StyledSubscribeButton>{props.text}</StyledSubscribeButton>
}

const StyledSubscribeButton = styled.button`
    font-size: 16px;
	padding: 12px 40px;
	border-radius: 8px;
	border-style: none;
	font-weight: 700;
	background: #d3f85a;
	position: absolute;
	right: 4px;
	top: 4px;

	:hover {
		cursor: pointer;
	}
`
