import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 24px;
  background: white;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  // max-width: 950px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: left;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
`;

const DetailBox = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  background: white;
  text-align: left;
  border: 1px solid #ddd;
`;

const ImagePlaceholder = styled.div`
  width: 50px;
  height: 50px;
  background: #ddd;
  border-radius: 4px;
  margin-right: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  color: gray;
  text-transform: capitalize;
  font-size: 0.9rem;
`;

const Value = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
`;

const VehicleInfo = ({ details }) => {
  return (
    <Container>
      <Title>Vehicle Details</Title>
      <Grid>
        {Object.entries(details).map(([key, value]) => (
          <DetailBox key={key}>
            <ImagePlaceholder />
            <TextContainer>
              <Label>{key.replace(/([A-Z])/g, ' $1').trim()}</Label>
              <Value>{value}</Value>
            </TextContainer>
          </DetailBox>
        ))}
      </Grid>
    </Container>
  );
};

export default VehicleInfo;