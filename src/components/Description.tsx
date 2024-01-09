import styled from 'styled-components'
import { theme } from '../styles/Theme'

type DescriptionPropsType = {
	marginBottom?: string
	marginTop?: string
}

export const StyledDescription = styled.p<DescriptionPropsType>`
	color: ${theme.colors.primary};
	margin-bottom: ${props => props.marginBottom || '40px'};
	margin-top: ${props => props.marginTop || '20px'};
	font-size: 16px;
	font-weight: 400;
	line-height: 160%;
`
