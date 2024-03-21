"use client";

import styled from "styled-components";

import Header from "./components/header";
import Countdown from "./components/countdown";

const MainContainer = styled.main`
  min-height: 100vh;
  width: 100vw;
  background-color: #f2f2f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export default function Home() {
  return (
    <MainContainer>
      <Header />
      <Countdown />
    </MainContainer>
  );
}
