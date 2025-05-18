import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
  color: #465469;
`;

const Text = styled.p`
  font-size: 16px;
  color: #465469;
  line-height: 1.5;
`;

const VehicleSummary = () => {
  return (
    <Container>
      <Title>Vehicle Summary</Title>
      <Section>
        <SectionTitle>Chassis/Subframe Damage</SectionTitle>
        <Text>
          IMPORTANT: Chassis damage found. Chassis damage refers to structural harm to the frame or underbody of a vehicle,
          compromising its integrity and safety. Repair costs for chassis damage can vary significantly. A vehicle is not guaranteed
          to pass Government Inspection if the chassis was damaged or repaired.
        </Text>
      </Section>
      <Section>
        <SectionTitle>Engine Oil Condition</SectionTitle>
        <Text>
          Engine Oil Condition Faulty. It is highly recommended to do a major service on the vehicle when buying a used car that
          doesn't have service history and warranty. Labor Cost: Medium.
        </Text>
      </Section>
      <Section>
        <SectionTitle>Inspector Comments</SectionTitle>
        <Text>
          Accident history available at left rear. Left door and quarter panel are changed & repainted.
        </Text>
      </Section>
    </Container>
  );
};

export default VehicleSummary;
