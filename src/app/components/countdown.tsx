import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import { CountdownCircleTimer, Props } from "react-countdown-circle-timer";
import styled from "styled-components";
import { useMediaQuery } from "usehooks-ts";

import { colors } from "../shared/colors";

const Container = styled.section`
  width: 100%;
  background-color: ${colors.brightYellow7};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  justify-content: space-around;
  text-align: center;
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TimeNumber = styled.span`
  font-size: 24px;

  @media (min-width: 600px) {
    font-size: 32px;
  }
`;

const TimeDimension = styled.span`
  font-size: 12px;

  @media (min-width: 600px) {
    font-size: 18px;
  }
`;

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const renderTime = (dimension: string, time: number) => {
  return (
    <TimeContainer>
      <TimeNumber>{time}</TimeNumber>
      <TimeDimension>{dimension}</TimeDimension>
    </TimeContainer>
  );
};

const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time: number) =>
  ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time: number) => (time / daySeconds) | 0;

export default function Countdown() {
  const isMobileXl = useMediaQuery("(min-width: 425px)");
  const isDesktop = useMediaQuery("(min-width: 600px)");

  const timerProps: Props = {
    duration: minuteSeconds,
    isPlaying: true,
    size: isMobileXl ? (isDesktop ? 120 : 80) : 60,
    strokeWidth: 2,
    colors: "#CAA971",
    trailColor: "#E1D0B6",
    rotation: "counterclockwise",
  };

  const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = startTime + 243248;

  const remainingTime = endTime - startTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds; // use UNIX timestamp in seconds

  return (
    <Container>
      <Content>
        <CountdownCircleTimer
          {...timerProps}
          duration={daysDuration}
          initialRemainingTime={remainingTime}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>
              {renderTime("Días", getTimeDays(daysDuration - elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>
        <CountdownCircleTimer
          {...timerProps}
          duration={daySeconds}
          initialRemainingTime={remainingTime % daySeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
          })}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>
              {renderTime("Horas", getTimeHours(daySeconds - elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>
        <CountdownCircleTimer
          {...timerProps}
          duration={hourSeconds}
          initialRemainingTime={remainingTime % hourSeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
          })}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>
              {renderTime("Minutos", getTimeMinutes(hourSeconds - elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>
        <CountdownCircleTimer
          {...timerProps}
          duration={minuteSeconds}
          initialRemainingTime={remainingTime % minuteSeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime - totalElapsedTime > 0,
          })}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>
              {renderTime("Segundos", getTimeSeconds(elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>
      </Content>
    </Container>
  );
}
