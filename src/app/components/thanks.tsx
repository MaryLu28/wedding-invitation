import styled from "styled-components";
import localFont from "next/font/local";

import { colors } from "../shared/colors";
import { Container } from "../shared/common-components";
import { desktop, tablet } from "../shared/breakpoints";

import iconHeart from "../../../public/img/heart-icon.svg";

const eyesomeScriptFont = localFont({
  src: "../../../public/fonts/Eyesome/Eyesome Script.otf",
});

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  flex-direction: column;
  align-items: center;

  @media (${desktop}) {
    max-width: 800px;
  }
`;

const Icon = styled.img`
  width: 100px;

  @media (${tablet}) {
    width: 150px;
  }
`;

const Text = styled.p`
  font-family: ${eyesomeScriptFont.style.fontFamily};
  font-size: 24px;
  text-align: center;
  color: ${colors.darkerYellow};

  @media (${tablet}) {
    font-size: 32px;
  }
`;

export default function Thanks() {
  return (
    <Container
      $backgroundColor={colors.brightYellow7}
      $padding="40px 20px 60px"
    >
      <Content>
        <Icon src={iconHeart.src} alt="Icono corazón" />
        <Text>¡Gracias por acompañarnos en este momento tan importante!</Text>
      </Content>
    </Container>
  );
}
