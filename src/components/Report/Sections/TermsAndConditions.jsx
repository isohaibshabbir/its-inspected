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
      <Title>Terms of Service</Title>
      <Section>
        <Text>
          All services from BeSoji are provided on an as is, with all defects and as available basis without warranties of any kind, either
          expressed or implied, including without limitation, warranties of title, non infringement, or implied warranties of merchantability or
          fitness for a particular purpose. Nothing in these terms or in any description of products or services in the services shall constitute
          a representation or warranty with respect to such products or services.
        </Text>
      </Section>
      <Section>
        <Text>
          The inspection of the vehicle described in this report is external and we are unable to accept responsibility for failure to identify
          defects not present or apparent at the time of the inspection. Odometer readings may have been tampered with, although we
          report any signs that we notice of this happening during inspection. You acknowledge, by your use of the services, that such use
          is at your sole risk. In the event of dissatisfaction or a complaint, we reserve the right to re examine the vehicle prior to any
          rectifications to the vehicle. You agree that BeSoji s liability is limited to refunding the price you pay for the inspection in the event
          you are dissatisfied with BeSoji s service, or injuries occur due to an unreported defect in the vehicle. All requests should be sent
          to hello@besoji.com within 7 days notice of receiving the report.
        </Text>
      </Section>
      <Section>
        <Text>
          In no event shall either BeSoji or its affiliates or agents be liable for any direct, indirect, punitive, incidental, special or
          consequential damages arising out of or in any way connected with the use of the services, whether based on contract, tort, strict
          liability or otherwise, even if advised of the possibility of any such damages.
        </Text>
      </Section>
    </Container>
  );
};

export default VehicleSummary;
