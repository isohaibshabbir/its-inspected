import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Section = styled.div`
  margin-bottom: 16px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Text = styled.p`
  font-size: 14px;
  color: #4a4a4a;
  line-height: 1.5;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 8px;
  margin-top: 16px;
  height: 400px;
`;

const MainImage = styled.div`
  width: 100%;
  height: 100%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #777;
  border-radius: 4px;
`;

const SmallImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;

const PlaceholderImage = styled.button`
  width: 100%;
  height: 100px;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #777;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  position: relative;
`;

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CloseButton = styled.button`
  background: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 4px;
`;

const VehicleSummary = ({ title }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Container>
      <Section>
        <SectionTitle>{title}</SectionTitle>
        <ImageGrid>
          <MainImage>Main Image</MainImage>
          <SmallImagesGrid>
            {[...Array(7)].map((_, index) => (
              <PlaceholderImage key={index}>Image {index + 2}</PlaceholderImage>
            ))}
            <PlaceholderImage onClick={() => setShowPopup(true)}>
              +14 photos
            </PlaceholderImage>
          </SmallImagesGrid>
        </ImageGrid>
      </Section>
      {showPopup && (
        <Popup>
          <Text>All Images</Text>
          <CloseButton onClick={() => setShowPopup(false)}>Close</CloseButton>
        </Popup>
      )}
    </Container>
  );
};

export default VehicleSummary;
