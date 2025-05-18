import React from "react";
import styled from "styled-components";
// import BackRimTyreLine from "./components/BackRimTyreLine";
// import FrontRimTyreLine from "./components/FrontRimTyreLine";
import CarTyres from '../../../images/Tyres.png'
const RimAnnotation = () => {
  const details = {
    front: {
      right: {
        Side: "Right",
        Manufacturer: "Dunlop",
        Date: "2023",
        Size: "255/40R19",
        Condition: " 5/7 mm"
      },
      left: {
        Side: "Left",
        Manufacturer: "Dunlop",
        Date: "2023",
        Size: "255/40R19",
        Condition: " 5/7 mm"
      }
    },
    back: {
      right: {
        Side: "Right",
        Manufacturer: "Dunlop",
        Date: "2023",
        Size: "255/40R19",
        Condition: " 5/7 mm"
      },
      left: {
        Side: "Left",
        Manufacturer: "Dunlop",
        Date: "2023",
        Size: "255/40R19",
        Condition: " 5/7 mm"
      }
    }
  }
  const Anotation = (props) => {
    const {
      Side,
      Manufacturer,
      Date,
      Size,
      Condition } = props;
    return <Annotation>
      <Title>⭘{Side}</Title>
      <div>
        <HeadingText>Manufacturer:</HeadingText> <DetailText>{Manufacturer}</DetailText>
      </div>
      <div>
        <HeadingText>Date:</HeadingText> <DetailText>{Date}</DetailText>
      </div >
      <div>
        <HeadingText>Size:</HeadingText><DetailText> {Size}</DetailText >
      </div >
      <div>
        <HeadingText>Condition:</HeadingText> <DetailText>{Condition}</DetailText >
      </div >
    </Annotation >
  };

  return (
    <CarContainer>
      <TitleContainer>
        <SectionTitle>Tyres</SectionTitle>
      </TitleContainer>
      <CarImage src={CarTyres} alt="Car" />
      <AnnotationContainer>
        <LeftAnnotations>
          {
            Object.entries(details.back).map(([side, details]) => (
              <Anotation key={`back-${side}`} side={`back ${side}`} {...details} />
            ))
          }
        </LeftAnnotations>
        <RightAnnotations>
          {
            Object.entries(details.front).map(([side, details]) => (
              <Anotation key={`front-${side}`} side={`front ${side}`} {...details} />
            ))
          }
        </RightAnnotations>
      </AnnotationContainer>
    </CarContainer>
  );
};

const Rims = () => {
  return <RimAnnotation />;
};

export default Rims;

const CarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  position: relative;
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

const CarImage = styled.img`
  width: 100%;
  position: relative;
`;

const AnnotationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;
      position: absolute;
    top: 75%;
`;

const LeftAnnotations = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
`;

const RightAnnotations = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  text-align: right;
`;

const Annotation = styled.div`
  background: white;
  padding: 10px;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 10px;
  position: relative;
`;

const Title = styled.div`
  font-size: 14px;
  color: gray;
  font-weight: bold;
  margin-bottom: 5px;
`;

const HeadingText = styled.span`
  font-weight: 400;
  color: #606264;
`;

const DetailText = styled.span`
  font-weight: 700;
  color: #000000;
`;
