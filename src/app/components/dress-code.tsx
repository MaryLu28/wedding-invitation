import styled from "styled-components";
import { colors } from "../shared/colors";

import iconDressCode from "../../../public/img/icono-dresscode.svg";

const Container = styled.section`
  width: 100%;
  background-color: ${colors.brightYellow1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px 60px;
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
  margin-bottom: -40px;
`;

const Title = styled.h4`
  font-size: 28px;
  margin-bottom: 16px;
  color: ${colors.yellow1};
  text-align: center;
  font-weight: 400;
`;

const Text = styled.p`
  font-size: 20px;
  margin-bottom: 6px;
  text-align: center;
  color: ${colors.darkerYellow};
  margin-bottom: 20px;
`;

const Tips = styled.p`
  font-size: 14px;
  margin-bottom: 6px;
  text-align: center;
  color: ${colors.darkerYellow};
`;

export default function DressCode() {
  return (
    <Container>
      <Content>
        <Icon src={iconDressCode.src} alt="Icono Dress Code" />
        <Title>Dress Code</Title>
        <Text>Vestimenta formal, elegante</Text>
        <Tips>
          Recuerda que para esa fecha estaremos iniciando el invierno.
        </Tips>
        <Tips>
          Puedes traer unos zapatos extras para estar más cómodo/a en la pista
          de baile.
        </Tips>
      </Content>
    </Container>
  );
}
