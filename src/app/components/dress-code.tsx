import styled from "styled-components";
import { colors } from "../shared/colors";

import iconDressCode from "../../../public/img/icono-dresscode.svg";
import { Container, Title } from "../shared/common-components";

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  width: 240px;
  margin-bottom: -40px;
`;

const Text = styled.p`
  font-size: 20px;
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
    <Container
      $backgroundColor={colors.brightYellow1}
      $padding="40px 20px 60px"
    >
      <Content>
        <Icon src={iconDressCode.src} alt="Icono Dress Code" />
        <Title>Código de Vestimenta</Title>
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
