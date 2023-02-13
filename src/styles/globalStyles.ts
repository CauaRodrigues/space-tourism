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
    font-family: 'Barlow', sans-serif;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
  }
  
  body,
  html {
    background-color: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.primary};
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
  h1 { font-size: ${({ theme: { textSize } }) => textSize.h1}px; }
  h2 { font-size: ${({ theme: { textSize } }) => textSize.h2}px; }
  h3 { font-size: ${({ theme: { textSize } }) => textSize.h3}px; }
  h4 { font-size: ${({ theme: { textSize } }) => textSize.h4}px; }
  h5 { font-size: ${({ theme: { textSize } }) => textSize.h5}px; }

  span.sub--1 { font-size: ${({ theme }) => theme.textSize.sub1}px;}
  span.sub--2 { font-size: ${({ theme }) => theme.textSize.sub2}px;}
  span.nav-text { font-size: ${({ theme }) => theme.textSize.navText}px;}

  h1, h2, h3, h4, span.sub--1 {
    font-family: 'Bellefair', serif;
  }

  h5, span.sub--2, span.nav-text {
    font-family: 'Barlow Condensed', sans-serif;
  }

  p {
    font-family: 'Barlow', sans-serif;
    font-size: ${({ theme: { textSize } }) => textSize.bodyText}px;
  }
`;
