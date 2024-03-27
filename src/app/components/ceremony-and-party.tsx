import styled from "styled-components";
import { colors } from "../shared/colors";
import { tablet } from "../shared/breakpoints";

import data from "../data.json";

const Container = styled.section`
  width: 100%;
  background-color: ${colors.brightYellow8};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
`;

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

const Title = styled.h4`
  font-size: 28px;
  margin-bottom: 12px;
  color: ${colors.yellow1};
  text-align: center;
  font-weight: 400;
`;

const DateText = styled.p`
  font-size: 18px;
  margin-bottom: 6px;
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

const MapsBtn = styled.a`
  font-size: 16px;
  padding: 10px;
  color: ${colors.brightYellow8};
  background-color: ${colors.brightYellow1};
  margin: 20px auto 0;
`;

export default function CeremonyAndParty() {
  const ceremonyDate = new Date(data.ceremony.date);
  const ceremonyDateStr = ceremonyDate.toLocaleDateString("es-VE");
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
    <Container>
      <Content>
        <Info>
          <Title>Ceremonia</Title>
          <DateText>{ceremonyDateStr}</DateText>
          <DateText>{ceremonyTimeStr}</DateText>
          <Text>{data.ceremony.church}</Text>
          <Text>{data.ceremony.address}</Text>
          <MapsBtn href={data.ceremony.mapsLink} target="_blank">
            Cómo llegar
          </MapsBtn>
        </Info>
        <Info>
          <Title>Fiesta</Title>
          <DateText>{partyDateStr}</DateText>
          <DateText>{partyTimeStr}</DateText>
          <Text>{data.party.venue}</Text>
          <Text>{data.party.address}</Text>
          <MapsBtn href={data.party.mapsLink} target="_blank">
            Cómo llegar
          </MapsBtn>
        </Info>
      </Content>
    </Container>
  );
}
