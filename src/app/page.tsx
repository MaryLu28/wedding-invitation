"use client";

import { useRef } from "react";
import styled from "styled-components";

import CeremonyAndParty from "./components/ceremony-and-party";
import Countdown from "./components/countdown";
import DressCode from "./components/dress-code";
import Gift from "./components/gift";
import Header from "./components/header";
import Music from "./components/music";
import RSVP from "./components/rsvp";
import Thanks from "./components/thanks";
import UsefulInfo from "./components/useful-info";

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
      <DressCode />
      <RSVP />
      <Music />
      <Gift />
      <UsefulInfo />
      <Thanks />
    </MainContainer>
  );
}
