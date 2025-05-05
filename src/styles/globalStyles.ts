import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  :root {
    --color-primary: #19719C; /* Azul principal */
    --color-secondary: #83B3CA; /* Azul claro */
    --color-dark: #000013; /* Negro/azul oscuro */
    --color-light: #FFFFFF; /* Blanco para textos */
    --color-accent: #5C5C68; /* Gris azulado para acentos */
    --color-background: #000013; /* Fondo negro/azul muy oscuro */
  }

  body {
    background: var(--color-background);
    color: var(--color-light);
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
  
  @media (max-width: 480px) {
    html {
      font-size: 12px;
    }
  }
`;

export default GlobalStyles; 