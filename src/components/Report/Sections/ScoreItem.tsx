import React from 'react';
import '../InspectionReport.css';

interface ScoreItemProps {
  label: string;
  score: string;
}

const ScoreItem: React.FC<ScoreItemProps> = ({ label, score }) => {
  return (
    <div className="score-item">
      <span>{label}</span>
      <span>{score}</span>
    </div>
  );
};

export default ScoreItem;