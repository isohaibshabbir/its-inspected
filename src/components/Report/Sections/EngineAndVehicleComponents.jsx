import React, { useState } from "react";
import styled from "styled-components";
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";


const Container = styled.div`
  padding: 24px;
  background: white;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  // border-radius: 12px;
  max-width: 80vw;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: left;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  gap: 16px;
  align-items: start;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 8px;
  background: #F4F4F4;
  text-align: left;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Label = styled.span`
  font-weight: bold;
`;

const StatusBadge = styled.span`
  padding: 11px;
  border-radius: 5px;
  color: ${(props) => (props.status === "Pass" ? "#20AE92" : "white")};;
  background: ${(props) => (props.status === "Pass" ? "white" : props.status === "Fault" ? "#FF2323" : "#FBBC22")};
`;

const ExpandButton = styled.button`
  font-size: 1rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: #FFFFFF;
  border-radius: 8px;
  border:none;
`;

const Content = styled.div`
  margin-top: 10px;
  display: ${({ expanded }) => (expanded ? "block" : "none")};
`;

const ViewImage = styled.a`
  color: #1175D8;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 0;
  display: block;
  font-size:14px;
`;

const Modal = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index:1;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ImagePlaceholder = styled.div`
  width: 500px;
  height: 500px;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const NavButton = styled.button`
  padding: 10px;
  border: none;
  background: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
`;

const CloseButton = styled.button`
  padding: 10px;
  border: none;
  background: red;
  color: white;
  cursor: pointer;
  border-radius: 5px;
`;

const ExpandableItem = ({ label, details, status, images }) => {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <ItemBox style={{ alignSelf: "start" }}>
      <Header onClick={() => setExpanded(!expanded)}>
        <Label>{label}</Label>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <StatusBadge status={status}>{status}</StatusBadge>
          {details && details.length > 0 && <ExpandButton>
            {expanded ? <MdExpandLess size={30} />
              : <MdExpandMore size={30} />
            }</ExpandButton>}
        </div>
      </Header>
      {images && images.length > 0 && (
        <ViewImage onClick={() => setShowModal(true)}>View Images</ViewImage>
      )}
      {details && details.length > 0 && (
        <Content expanded={expanded}>
          <ul>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </Content>
      )}
      <Modal show={showModal}>
        <ModalContent>
          <ImagePlaceholder>{`Image ${currentImageIndex + 1}`}</ImagePlaceholder>
          <ButtonContainer>
            <NavButton onClick={handlePrev}>←</NavButton>
            <CloseButton onClick={() => setShowModal(false)}>Close</CloseButton>
            <NavButton onClick={handleNext}>→</NavButton>
          </ButtonContainer>
        </ModalContent>
      </Modal>
    </ItemBox>
  );
};

const EngineAndVehicleComponents = () => {
  const components = [
    { label: "Brake Pads", status: "Pass", images: ["brake1.jpg"] },
    { label: "Battery Health", status: "Fault", images: ["battery1.jpg", "battery2.jpg"] },
    { label: "Engine Upper Cover", details: ["No Dipstick Available To Check", "Needs to be topped up with same oil grade"], status: "Pass", images: ["image1.jpg", "image2.jpg"] },
    { label: "Oil Condition", details: ["Needs to be topped up"], status: "Fault", images: [] },
    { label: "Coolant Level", status: "Pass", images: [] }
  ];

  return (
    <Container>
      <Title>Engine and Vehicle Components</Title>
      <GridContainer>
        {components.map((item, index) => (
          <ExpandableItem key={index} {...item} />
        ))}
      </GridContainer>
    </Container>
  );
};

export default EngineAndVehicleComponents;
