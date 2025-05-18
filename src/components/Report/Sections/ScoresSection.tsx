import React from 'react';
import '../InspectionReport.css';
import { Card, CardContent } from './components/Card';
import { ProgressBarContainer, ProgressFill, ProgressText } from './components/ProgressBar';
import styled from 'styled-components';

const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ScoreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

interface ScoreCardProps {
  name: string;
  value: number;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ name, value }) => (
  <Card>
    <CardContent>
      <h3>{name}</h3>
      <ProgressBarContainer>
        <ProgressFill value={value}>
          <ProgressText>{value}%</ProgressText>
        </ProgressFill>
      </ProgressBarContainer>
    </CardContent>
  </Card>
);

const ScoresSection: React.FC = () => {
  const scores = [
    { label: 'Body Frame', score: 91.2 },
    { label: 'Engine Compartment & Transmission', score: 98.2 },
    { label: 'Brakes', score: 78 },
    { label: 'OBD Scanner Report', score: 94 },
    { label: 'Electrical Controls', score: 98.4 },
    { label: 'Suspension/Steering', score: 78 },
    { label: 'Interior', score: 95.4 },
    { label: 'Exterior', score: 98.2 },
    { label: 'Tyres', score: 56 },
    { label: 'Road Test and Final Checks', score: 87.7 },
  ];

  return (
    <Container>

      <h2>Overall Scores</h2>
      <ScoreGrid>
        {scores.map((item, index) => (
          <ScoreCard key={index} name={item.label} value={item.score} />
        ))}
      </ScoreGrid>
    </Container>
  );
};

export default ScoresSection;