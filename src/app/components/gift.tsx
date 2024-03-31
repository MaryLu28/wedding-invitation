import { useState } from "react";

import { Modal } from "react-responsive-modal";
import styled from "styled-components";

import { colors } from "../shared/colors";
import { Button, Container, Title } from "../shared/common-components";

import iconGift from "../../../public/img/icono-regalo.svg";

import data from "../data.json";
import { tablet } from "../shared/breakpoints";

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
  margin: -40px 0 -20px;
`;

const Text = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${colors.darkerYellow};
  margin-bottom: 20px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BankInfo = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;

  @media (${tablet}) {
    width: 50%;
    min-width: 200px;
  }
`;

const BankTitle = styled(Title)`
  font-size: 18px;
  margin-bottom: 10px;
`;

const BankText = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${colors.darkerYellow};
`;

export default function Gift() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container
      $backgroundColor={colors.brightYellow1}
      $padding="40px 20px 60px"
    >
      <Content>
        <Icon src={iconGift.src} alt="Icono Regalo" />
        <Text>{data.gift.message}</Text>
        <Button onClick={handleShow}>Ver más</Button>
        <Modal
          open={show}
          onClose={handleClose}
          center
          classNames={{
            overlay: "customOverlay",
            modal: "customModal",
          }}
        >
          <ModalContent>
            {data.gift.bankInfo.map((bank, index) => (
              <BankInfo key={index}>
                <BankTitle>{bank.bank}</BankTitle>
                {bank.name && <BankText>{bank.name}</BankText>}
                {bank.id && <BankText>{bank.id}</BankText>}
                {bank.countType && <BankText>{bank.countType}</BankText>}
                {bank.countNumber && <BankText>Nº {bank.countNumber}</BankText>}
                {bank.SWIFT && <BankText>SWFIT: {bank.SWIFT}</BankText>}
                {bank.email && <BankText>{bank.email}</BankText>}
              </BankInfo>
            ))}
          </ModalContent>
        </Modal>
      </Content>
    </Container>
  );
}
