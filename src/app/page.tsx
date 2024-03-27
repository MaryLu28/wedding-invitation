"use client";

import styled from "styled-components";

import Header from "./components/header";
import Countdown from "./components/countdown";
import { useRef } from "react";
import CeremonyAndParty from "./components/ceremony-and-party";

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
  const ref = useRef<HTMLElement>(null);

  const onScroll = () => ref.current?.scrollIntoView({ behavior: "smooth" });
  return (
    <MainContainer>
      <Header onScroll={onScroll} />
      <Countdown ref={ref} />
      <CeremonyAndParty />
    </MainContainer>
  );
}
