import styled from "styled-components";
import { colors } from "../shared/colors";

import iconCalendar from "../../../public/img/icono-calendario.svg";

import data from "../data.json";
import { ButtonLink, Container, Title } from "../shared/common-components";

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  width: 240px;
  margin: -40px 0;
`;

const Text = styled.p`
  font-size: 18px;
  margin-bottom: 6px;
  text-align: center;
  color: ${colors.darkerYellow};
  margin-bottom: 20px;
`;

export default function RSVP() {
  return (
    <Container
      $backgroundColor={colors.brightYellow8}
      $padding="80px 20px 60px"
    >
      <Content>
        <Title>RSVP</Title>
        <Text>
          Esperamos que seas parte de esta gran celebración. <br /> ¡Confírmanos
          tu asistencia!
        </Text>
        <ButtonLink href={data.rsvpLink} target="_blank">
          Confirmar asistencia
        </ButtonLink>
        <Icon src={iconCalendar.src} alt="Icono calendario" />
        <Text>¡Agenda la fecha en tu calendario!</Text>
        <ButtonLink href={data.calendarLink} target="_blank">
          Agendar evento
        </ButtonLink>
      </Content>
    </Container>
  );
}
