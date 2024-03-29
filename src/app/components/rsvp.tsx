import styled from "styled-components";
import { colors } from "../shared/colors";

import iconCalendar from "../../../public/img/icono-calendario.svg";

import data from "../data.json";

const Container = styled.section`
  width: 100%;
  background-color: ${colors.brightYellow8};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20px 60px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  width: 240px;
  margin: -40px 0;
`;

const Title = styled.h4`
  font-size: 28px;
  margin-bottom: 16px;
  color: ${colors.yellow1};
  text-align: center;
  font-weight: 400;
`;

const Text = styled.p`
  font-size: 18px;
  margin-bottom: 6px;
  text-align: center;
  color: ${colors.darkerYellow};
  margin-bottom: 20px;
`;

const Button = styled.a`
  font-size: 16px;
  padding: 10px;
  color: ${colors.brightYellow8};
  background-color: ${colors.yellow1};
  margin: 20px auto 0;
`;

export default function RSVP() {
  return (
    <Container>
      <Content>
        <Title>RSVP</Title>
        <Text>
          Esperamos que seas parte de esta gran celebración. <br /> ¡Confírmanos
          tu asistencia!
        </Text>
        <Button href={data.rsvpLink} target="_blank">
          Confirmar asistencia
        </Button>
        <Icon src={iconCalendar.src} alt="Icono calendario" />
        <Text>¡Agenda la fecha en tu calendario!</Text>
        <Button href={data.calendarLink} target="_blank">
          Agendar evento
        </Button>
      </Content>
    </Container>
  );
}
