import { createGlobalStyle } from 'styled-components'
import { theme } from './Theme'
import bg from '../assets/images/others/bg.png'

export const GlobalStyle = createGlobalStyle`
*, 
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

*::selection {
	background-color: ${theme.colors.secondary};
	color: ${theme.colors.selection};
}

body {
	margin: 0;
	font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: #02040e;
	color: ${theme.colors.primary};
	position: relative;

	::before {
		content: '';
		background: url(${bg});
		object-fit: cover;
		mix-blend-mode: overlay;
		width: 100%;
		height: 100%;
		background-size: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -9999;
	}
}

h1 {
	font-size: calc( (100vw - 375px) / (1512 - 375) * (64 - 39) + 39px);
}

h2 {
	font-size: calc( (100vw - 375px) / (1512 - 375) * (48 - 31) + 31px);
}

h4 {
	font-size: calc( (100vw - 375px) / (1512 - 375) * (24 - 20) + 20px);
}

a {
	text-decoration: none;
}

ul {
	list-style: none;
}

button {
	background-color: unset;
	border: none;
}

section {
	padding: 92px 0;
}
`
