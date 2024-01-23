import styled from 'styled-components'

type DescriptionPropsType = {
	marginBottom?: string
	marginTop?: string
}

export const StyledDescription = styled.p<DescriptionPropsType>`
	margin-bottom: ${props => props.marginBottom || '40px'};
	margin-top: ${props => props.marginTop || '20px'};
	font-size: 16px;
	line-height: 160%;
`