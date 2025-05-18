import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 35px;
   background: repeating-linear-gradient(
    75deg, /* Angle of the lines */
    #C6C6C6,   /* Light Gray */
    #C6C6C6 2px, /* Thickness of light gray */
    white 1px, /* Space before next line */
    white 6px /* Thickness of white */
  );
  border-radius: 8px;
  overflow: hidden;
`;

interface ProgressFillProps {
  value: number;
}

export const ProgressFill = styled.div<ProgressFillProps>`
  height: 100%;
  background-color: ${({ value }) =>
    value < 50 ? "#FF4D4D" : value < 80 ? "#FFB144" : "#46C360"};
  width: ${({ value }) => `${value}%`};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8px;
  transition: width 0.3s ease-in-out;
`;

export const ProgressText = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: black;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 2px 6px;
  border-radius: 4px;
`;
