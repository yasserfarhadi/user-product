import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyls: React.FC = () => {
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
          width: 100vw;
          height: 100vh;
          overflow-x: hidden;
        }
        body {
          width: 100%;
          height: 100%;
        }
        #root {
          width: 100%;
          height: 100%;
        }
        .App {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        a {
          text-decoration: none;
          color: unset;
        }
      `}
    />
  );
};

export default GlobalStyls;
