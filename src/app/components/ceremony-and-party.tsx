import styled from "styled-components";

import { colors } from "../shared/colors";
import { ButtonLink, Container, Title } from "../shared/common-components";
import { tablet } from "../shared/breakpoints";

import churchIcon from "../../../public/img/icono-ceremonia.svg";
import partyIcon from "../../../public/img/icono-fiesta.svg";

import data from "../data.json";

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Info = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${tablet}) {
    width: 50%;
  }
`;

const Icon = styled.img`
  width: 240px;
  margin-bottom: -40px;
`;

const DateInfo = styled.div`
  margin-bottom: 24px;
`;

const DateText = styled.p`
  font-size: 18px;
  text-align: center;
  color: ${colors.darkerYellow};
  font-weight: 500;
`;

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 6px;
  text-align: center;
  color: ${colors.darkerYellow};
`;

export default function CeremonyAndParty() {
  const ceremonyDate = new Date(data.ceremony.date);
  const ceremonyDateStr = ceremonyDate.toLocaleDateString("es-VE", {
    dateStyle: "long",
  });
  const ceremonyTimeStr = ceremonyDate.toLocaleTimeString("es-VE", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Argentina/Buenos_Aires",
  });

  const partyDate = new Date(data.party.date);
  const partyDateStr = partyDate.toLocaleDateString("es-VE", {
    dateStyle: "long",
  });
  const partyTimeStr = partyDate.toLocaleTimeString("es-VE", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Argentina/Buenos_Aires",
  });

  return (
    <Container
      $backgroundColor={colors.brightYellow8}
      $padding="20px 20px 60px"
    >
      <Content>
        <Info>
          <Icon src={churchIcon.src} alt="icono iglesia" />
          <Title>Ceremonia</Title>
          <DateInfo>
            <DateText>{ceremonyDateStr}</DateText>
            <DateText>{ceremonyTimeStr}</DateText>
          </DateInfo>
          <Text>{data.ceremony.church}</Text>
          <Text>{data.ceremony.address}</Text>
          <ButtonLink href={data.ceremony.mapsLink} target="_blank">
            Cómo llegar
          </ButtonLink>
        </Info>
        <Info>
          <Icon src={partyIcon.src} alt="icono fiesta" />
          <Title>Fiesta</Title>
          <DateInfo>
            <DateText>{partyDateStr}</DateText>
            <DateText>{partyTimeStr}</DateText>
          </DateInfo>
          <Text>{data.party.venue}</Text>
          <Text>{data.party.address}</Text>
          <ButtonLink href={data.party.mapsLink} target="_blank">
            Cómo llegar
          </ButtonLink>
        </Info>
      </Content>
    </Container>
  );
}
