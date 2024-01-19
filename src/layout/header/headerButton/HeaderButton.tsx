import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const HeaderButton = styled.a `
	padding: 12px 40px;
	border-radius: 8px;
	font-weight: 700;
	border-style: none;
	background: ${theme.colors.secondary};
	color: ${theme.colors.btnText};

	@media ${theme.media.tablet} {
		display: none;
	}
`