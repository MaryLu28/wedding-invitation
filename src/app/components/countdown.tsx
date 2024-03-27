import { forwardRef, useEffect, useState } from "react";
import { CountdownCircleTimer, Props } from "react-countdown-circle-timer";
import styled from "styled-components";
import { useMediaQuery } from "usehooks-ts";

import { tablet } from "../shared/breakpoints";
import { colors } from "../shared/colors";

import heartIcon from "../../../public/img/heart-icon.svg";

import data from "../data.json";

const Container = styled.section`
  width: 100%;
  background-color: ${colors.brightYellow7};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 20px;

  @media (${tablet}) {
    margin-bottom: 40px;
  }
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

const Icon = styled.img`
  width: 100px;
  margin-bottom: 20px;

  @media (${tablet}) {
    width: 150px;
  }
`;

const Text = styled.p`
  color: ${colors.darkerYellow};
  font-size: 18px;
  text-align: center;

  @media (${tablet}) {
    font-size: 24px;
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

export default forwardRef<HTMLElement>(function Countdown(props, ref) {
  const isMobileXl = useMediaQuery("(min-width: 425px)");
  const isDesktop = useMediaQuery("(min-width: 600px)");

  const [startTime, setStartTime] = useState(0);
  const [timerProps, setTimerProps] = useState<Props>({
    duration: minuteSeconds,
    isPlaying: true,
    size: 65,
    strokeWidth: 2,
    colors: "#CAA971",
    trailColor: "#E1D0B6",
    rotation: "counterclockwise",
  });
  const [minutesText, setMinutesText] = useState("");
  const [secondsText, setSecondsText] = useState("");

  useEffect(() => {
    setStartTime(Date.now() / 1000);
    setTimerProps({
      ...timerProps,
      size: isMobileXl ? (isDesktop ? 120 : 80) : 65,
    });

    setMinutesText(isMobileXl ? "Minutos" : "Min");
    setSecondsText(isMobileXl ? "Segundos" : "Seg");
  }, [isMobileXl, isDesktop]);

  // use UNIX timestamp in seconds
  const endTime = Math.floor(new Date(data.date).getTime() / 1000);

  const remainingTime = endTime - startTime;

  const days = Math.ceil(remainingTime / daySeconds);
  // use UNIX timestamp in seconds
  const daysDuration = days * daySeconds;

  return (
    <Container ref={ref}>
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
              {renderTime(
                minutesText,
                getTimeMinutes(hourSeconds - elapsedTime)
              )}
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
              {renderTime(secondsText, getTimeSeconds(elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>
      </Content>
      <Icon src={heartIcon.src} alt="icono corazón" />
      <Text>
        Queremos celebrar junto a ti este momento tan especial para nosotros...
      </Text>
    </Container>
  );
});
