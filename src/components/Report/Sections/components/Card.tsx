import React, { ReactNode } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
    border: 1px solid #E9EBEB;
`;

const CardContentWrapper = styled.div`
  padding: 8px;
`;

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return <CardWrapper className={className}>{children}</CardWrapper>;
};

export const CardContent: React.FC<CardProps> = ({ children, className }) => {
  return <CardContentWrapper className={className}>{children}</CardContentWrapper>;
};
