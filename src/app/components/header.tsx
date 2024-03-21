import localFont from "next/font/local";
import styled, { css } from "styled-components";

import background from "../../../public/img/bg.png";
import logo from "../../../public/img/logo-without-bg.png";
import decoration from "../../../public/img/bg-decoration-wobg.png";

import { desktop, mobile, tablet } from "../shared/breackpoints";
import { colors } from "../shared/colors";

const eyesomeScriptFont = localFont({
  src: "../../../public/fonts/Eyesome/Eyesome Script.otf",
});

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${background.src});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 300px;
  height: auto;
  margin: 0 auto;

  @media (${mobile}) {
    width: 350px;
  }

  @media (${tablet}) {
    width: 400px;
  }
`;

const Decoration = styled.div<{
  position: string;
}>`
  position: absolute;
  background-image: url(${decoration.src});
  width: 150px;
  height: 322px;
  background-size: contain;
  background-repeat: no-repeat;

  @media (${mobile}) {
    width: 150px;
    height: 322px;
  }

  @media (${tablet}) {
    width: 180px;
    height: 342px;
  }

  @media (${desktop}) {
    width: 250px;
    height: 422px;
  }

  ${(props) =>
    props.position == "left" &&
    css`
      top: -170px;
      left: -90px;
      transform: rotate(140deg);

      @media (${mobile}) {
        top: -150px;
      }

      @media (${tablet}) {
        top: -90px;
        left: -90px;
      }
    `}

  ${(props) =>
    props.position == "right" &&
    css`
      bottom: -160px;
      right: -90px;
      transform: rotate(-45deg);

      @media (${mobile}) {
        bottom: -160px;
        right: -90px;
      }

      @media (${tablet}) {
        bottom: -90px;
        right: -90px;
      }
    `}
`;

const Title = styled.h2`
  font-family: ${eyesomeScriptFont.style.fontFamily};
  font-weight: normal;
  text-align: center;
  color: ${colors.darkerYellow};
  font-size: 34px;

  &:first-of-type {
    margin-top: 20px;
  }
  &:last-of-type {
    margin-bottom: 20px;
  }

  @media (${mobile}) {
    font-size: 46px;
  }

  @media (${tablet}) {
    font-size: 64px;
  }
`;

export default function Header() {
  return (
    <Container>
      <Decoration position="left" />
      <Title>Matrimonio</Title>
      <Logo src={logo.src} alt="logo" />
      <Title>MaryLu & Manuel</Title>
      <Decoration position="right" />
    </Container>
  );
}
