import React, { useState } from "react";
import styled from "styled-components";
import CarTyres from '../../../images/CarPaint.svg'

const Container = styled.div`
  position: relative;
  width: 80vw;
  height: auto;
  padding-bottom: 20px;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: left;
    width: 100%;

`;
const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: left;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Indicator = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.color};
  top: ${(props) => `calc(${props.top} - 8px)`};
  left: ${(props) => `calc(${props.left} - 8px)`};
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const Tooltip = styled.div`
  position: absolute;
  top: calc(${(props) => props.top} - 15px);
  left: ${(props) => props.left};
  transform: translate(-50%, -100%);
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: ${(props) => (props.visible ? "block" : "none")};
  width: 250px;
  text-align: center;
  z-index: 10;

  &::after {
    content: "";
    position: absolute;
    bottom: -18px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -24px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 12px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.1) transparent transparent transparent;
  }

`;

const Legend = styled.ul`
  margin-top: 20px;
  padding-left: 20px;
  list-style-type: disc;
`;

const FullImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: ${(props) => (props.visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const PaintReport = () => {
  const [tooltip, setTooltip] = useState({ visible: false, top: "0px", left: "0px", type: "" });
  const [modalVisible, setModalVisible] = useState(false);

  const indicators = [
    { top: "15%", left: "20%", color: "red", type: "Scratch" },
    { top: "22.5%", left: "30%", color: "red", type: "Scratch" },
    { top: "22.5%", left: "42.5%", color: "red", type: "Scratch" },
    { top: "22.5%", left: "58.5%", color: "red", type: "Scratch" },
    { top: "22.5%", left: "75%", color: "red", type: "Scratch" },
    { top: "15%", left: "85%", color: "red", type: "Scratch" },

    { top: "51%", left: "10%", color: "blue", type: "Small dent" },
    { top: "51%", left: "20%", color: "blue", type: "Small dent" },
    { top: "51%", left: "50%", color: "blue", type: "Small dent" },
    { top: "51%", left: "80%", color: "blue", type: "Small dent" },
    { top: "51%", left: "95%", color: "blue", type: "Small dent" },

    { top: "85%", left: "20%", color: "green", type: "Scratch" },
    { top: "79.5%", left: "30%", color: "green", type: "Scratch" },
    { top: "79.5%", left: "42.5%", color: "green", type: "Scratch" },
    { top: "79.5%", left: "58.5%", color: "green", type: "Scratch" },
    { top: "79.5%", left: "75%", color: "green", type: "Scratch" },
    { top: "85%", left: "85%", color: "green", type: "Scratch" },
  ];

  return (
    <Container>
      <TitleContainer>
        <SectionTitle>Paint Condition Report</SectionTitle>
      </TitleContainer>
      <ImageWrapper>
        <Image src={CarTyres} alt="Car" />
        {indicators.map((indicator, index) => (
          <Indicator
            key={index}
            top={indicator.top}
            left={indicator.left}
            color={indicator.color}
            onMouseEnter={(e) =>
              setTooltip({
                visible: true,
                top: e.target.offsetTop + "px",
                left: e.target.offsetLeft + "px",
                type: indicator.type,
              })
            }
          />
        ))}
        <Tooltip
          top={tooltip.top}
          left={tooltip.left}
          visible={tooltip.visible}
          onMouseEnter={() => setTooltip((prev) => ({ ...prev, visible: true }))}
          onMouseLeave={() => setTooltip({ visible: false, top: "0px", left: "0px", type: "" })}
        >
          <img src="https://via.placeholder.com/250" alt="Indicator" style={{ width: "250px", height: "250px" }} />
          <p>{tooltip.type}</p>
          <button onClick={() => setModalVisible(true)}>View Full Image</button>
        </Tooltip>
      </ImageWrapper>
      <Legend>
        <li>Scratch</li>
        <li>Small Scratch</li>
        <li>Big Scratch</li>
        <li>Small dent with scratch (size like a thumb)</li>
        <li>Dent with scratch (size like flat of the hand)</li>
        <li>Small Dent</li>
        <li>Paint marked</li>
      </Legend>
      <FullImageModal visible={modalVisible}>
        <ModalContent>
          <CloseButton onClick={() => setModalVisible(false)}>X</CloseButton>
          <img src="https://via.placeholder.com/500" alt="Full Indicator" style={{ width: "100%", height: "auto" }} />
        </ModalContent>
      </FullImageModal>
    </Container>
  );
};

export default PaintReport;
