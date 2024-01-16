import { createGlobalStyle } from 'styled-components'
import { theme } from './Theme'

export const GlobalStyle = createGlobalStyle`
*, 
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	margin: 0;
	font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: ${theme.colors.bg};
	color: ${theme.colors.primary};
}

h1 {
	font-size: calc( (100vw - 375px) / (1512 - 375) * (64 - 39) + 39px);
}

h2 {
	font-size: calc( (100vw - 375px) / (1512 - 375) * (48 - 31) + 31px);
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
