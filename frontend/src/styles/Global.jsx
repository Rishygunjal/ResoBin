import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		
		font-family: 'Mulish', sans-serif;
		font-size: 16px;
  		letter-spacing: 1px;
		
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		overflow:hidden;
	}
	
	body {
		background: ${({ theme }) => theme.primary};
		color: ${({ theme }) => theme.textColor};
	}
	
	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
	}
`
