import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
  --background-color: #282C34;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
  }

  body { 
    font-family: system-ui;
    background-color:  var(--background-color);
    color:white;
  }
`;
