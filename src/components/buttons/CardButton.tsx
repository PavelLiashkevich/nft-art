import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export const CardButton = () => {
	return <StyledCardButton>Place A Bid</StyledCardButton>
}

const StyledCardButton = styled.a`
	padding: 12px 40px;
	border-radius: 8px;
	font-weight: 700;
	border: 1px solid ${theme.colors.secondary};
	background: #131e3a;
	display: inline-block;
	width: 100%;
	text-align: center;
	transition: 0.4s;

	:hover {
		cursor: pointer;
		background-color: ${theme.colors.primary};
		color: ${theme.colors.btnText};
		font-weight: bold;
	}
`
