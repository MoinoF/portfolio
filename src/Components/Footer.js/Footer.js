import React from 'react'
import { styled } from 'styled-components'

const FooterDiv = styled.footer`
  height: 7rem;
  display: grid;
  place-content: center;
  place-items: center;
  /* background: #131313; */
`;

const Paragraph = styled.p`
  color: #444;
  font-size: 2rem;
  @font-face {
  font-family: "Tipografica";
  src: url("../../assets/fonts/Typographica-Blp5.ttf");
  };
  font-family: "Tipografica";
  text-transform: lowercase;

`;

const Footer = () => {
  return (
    <FooterDiv>
      <Paragraph>
        Scogo ©
      </Paragraph>
    </FooterDiv>
  )
}

export default Footer