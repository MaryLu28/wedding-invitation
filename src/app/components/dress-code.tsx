import styled from "styled-components";

import Modal from "react-responsive-modal";
import { useState } from "react";

import {
  Button,
  ButtonLink,
  Container,
  Title,
} from "../shared/common-components";
import { colors } from "../shared/colors";
import { mobile, tablet } from "../shared/breakpoints";

import iconDressCode from "../../../public/img/icono-dresscode.svg";
import imageBg from "../../../public/img/dress-code.png";

import data from "../data.json";

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

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-image: url(${imageBg.src});
  width: 230px;
  min-height: 200px;
  background-size: contain;
  background-position: center top;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  padding-top: 250px;

  @media (${mobile}) {
    width: 330px;
    padding-top: 0;
  }

  @media (min-width: 520px) {
    width: 430px;
  }

  @media (${tablet}) {
    width: 600px;
    height: 300px;
  }
`;

const ModalColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;

  @media (${mobile}) {
    max-width: 20%;
  }

  @media (min-width: 520px) {
    max-width: 30%;
  }
`;

const ModalText = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
  text-align: center;
  color: ${colors.yellow1};
  font-weight: 500;

  @media (${mobile}) {
    font-size: 14px;
    max-width: 450px;
  }

  @media (${tablet}) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export default function DressCode() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        <Button onClick={handleShow}>Más detalles</Button>
        <Modal
          open={show}
          onClose={handleClose}
          center
          classNames={{
            overlay: "customOverlay",
            modal: "customModal dressCodeModal",
          }}
        >
          <ModalContainer>
            <Title>Vestimenta formal, elegante</Title>
            <ModalWrapper>
              <ModalContent>
                <ModalColumn>
                  <ModalText>Traje</ModalText>
                  <ModalText>Corbata / Moño</ModalText>
                  <ModalText>Zapatos Formales</ModalText>
                </ModalColumn>
                <ModalColumn>
                  <ModalText>Vestido largo</ModalText>
                  <ModalText>No blanco, no nude, no crema</ModalText>
                  <ModalText>Tacones, clutch y accesorios de noche</ModalText>
                </ModalColumn>
              </ModalContent>
            </ModalWrapper>
            <ModalText>
              Recuerda que puedes traer unos zapatos cómodos extras para
              cambiarte durante la fiesta
            </ModalText>
            <ButtonLink target="_blank" href={data.dressCodeExamples}>
              Ver ejemplos
            </ButtonLink>
          </ModalContainer>
        </Modal>
      </Content>
    </Container>
  );
}
