import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before,
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
  }
  
  body,
  html {
    background-color: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.primary};
  }

  ::-webkit-scrollbar {
    display: none;
    background-color: transparent;
  }

  ul,
  li {
    list-style: none;
  }
  
  img {
    display: block;
    max-width: 100%;
  }

  /* Texts and fonts */
  h1 { 
    text-transform: uppercase;
    font-size: min(9rem, 19vw);
    font-weight: 400;
  }
  
  h2 { 
    text-transform: uppercase;
    font-size: min(6rem, 16vw);
    font-weight: 400;
  }

  h5 {
    text-transform: uppercase;
    font-size: min(2rem, 5vw); 
    font-weight: 300;
    letter-spacing: 4.725px;
  }


  h3 { font-size: ${({ theme: { textSize } }) => textSize?.h3}px; }
  h4 { font-size: ${({ theme: { textSize } }) => textSize?.h4}px; }

  span.sub--1 {
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    font-weight: 400;
    font-size: min(2rem, 4vw);
  }

  span.sub--2 {
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    font-size: min(0.9rem, 2vw);
    font-weight: 400;
    letter-spacing: 2.3625px;
  }

  p {
    font-family: 'Barlow', sans-serif;
    font-size: min(1.1rem, 3.5vw);
    font-weight: 400;
    line-height: min(32px, 6vw);
    color: ${({ theme }) => theme.colors.text};
  }

  span.stage {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 700;
  }

  li.nav-text {
    text-transform: uppercase;
		font-size: min(1.1rem, 3vw);
		font-weight: 400;
    letter-spacing: 1.7px;
  }

  h1, h2, h3, h4, span.sub--1 {
    font-family: 'Bellefair', serif;
  }
  
  h5, span.sub--2, li.nav-text {
    font-family: 'Barlow Condensed', sans-serif;
  }
`;
