import styled from 'styled-components'
import { theme } from '../styles/Theme'

type SectionTitlePropsType = {
	maxWidth?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
	font-family: 'Lora';
	font-weight: 500;
	max-width: ${props => props.maxWidth};

	span {
		color: ${theme.colors.secondary};
	}
`
