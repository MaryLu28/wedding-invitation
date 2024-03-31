import styled from "styled-components";
import { colors } from "../shared/colors";

import iconMusic from "../../../public/img/icono-canciones.svg";

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
  text-align: center;
  color: ${colors.darkerYellow};
  margin-bottom: 20px;
`;

const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const PlaylistBtn = styled(ButtonLink)`
  margin: 10px;
`;

export default function Music() {
  return (
    <Container
      $backgroundColor={colors.brightYellow7}
      $padding="40px 20px 60px"
    >
      <Content>
        <Icon src={iconMusic.src} alt="Icono calendario" />
        <Title>¿Qué canciones no pueden faltar?</Title>
        <Text>¡Queremos crear una lista inolvidable!</Text>
        <ButtonsGroup>
          <PlaylistBtn href={data.music.youtube} target="_blank">
            Youtube
          </PlaylistBtn>
          <PlaylistBtn href={data.music.spotify} target="_blank">
            Spotify
          </PlaylistBtn>
        </ButtonsGroup>
      </Content>
    </Container>
  );
}
