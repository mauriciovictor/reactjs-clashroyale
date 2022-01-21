import styled, { createGlobalStyle } from "styled-components";
import LocationsImg from "../../assets/img/backgrounds/locations.png";

export const GlobalStyle = createGlobalStyle`
  body {
    background-size: cover;
    background-image: url(${LocationsImg}) !important;
    background-size: 100% 100%;
  }
  `;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(var(--background), 0.5);
`;
