import React from "react";
import styled from "styled-components";
// import BackRimTyreLine from "./components/BackRimTyreLine";
// import FrontRimTyreLine from "./components/FrontRimTyreLine";
import CarRims from '../../../images/Rims.png'

const RimAnnotation = () => {
  return (
    <CarContainer>
      <TitleContainer>
        <SectionTitle>Rims</SectionTitle>
      </TitleContainer>
      <CarImage src={CarRims} alt="Car" />
      <AnnotationContainer>
        <LeftAnnotations>
          <Annotation>
            <Title>⭘ Right</Title>
            <div>
              <HeadingText>Brand:</HeadingText> <DetailText>Original</DetailText>
            </div>
            <div>
              <HeadingText>Condition:</HeadingText> <DetailText>Good</DetailText>
            </div>
          </Annotation>
          <Annotation>
            <Title>⭘ Left</Title>
            <div>
              <HeadingText>Brand:</HeadingText> <DetailText>Original</DetailText>
            </div>
            <div>
              <HeadingText>Condition:</HeadingText> <DetailText>Scratches</DetailText>
            </div>
          </Annotation>
        </LeftAnnotations>
        <RightAnnotations>
          <Annotation>
            <Title>⭘ Right</Title>
            <div>
              <HeadingText>Brand:</HeadingText> <DetailText>Original</DetailText>
            </div>
            <div>
              <HeadingText>Condition:</HeadingText> <DetailText>Good</DetailText>
            </div>
          </Annotation>
          <Annotation>
            <Title>⭘ Left</Title>
            <div>
              <HeadingText>Brand:</HeadingText> <DetailText>Original</DetailText>
            </div>
            <div>
              <HeadingText>Condition:</HeadingText> <DetailText>Scratches</DetailText>
            </div>
          </Annotation>
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