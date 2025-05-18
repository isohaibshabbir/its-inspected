import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const BaseButton = styled.button<{ variant: "default" | "outline" }>`
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  ${({ variant }) =>
    variant === "default"
      ? `
        background: #007bff;
        color: white;
        border: none;

        &:hover {
          background: #0056b3;
        }
      `
      : `
        background: transparent;
        color: #007bff;
        border: 2px solid #007bff;

        &:hover {
          background: #e7f0ff;
        }
      `}
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button: React.FC<ButtonProps> = ({ children, variant = "default", ...props }) => {
  return (
    <BaseButton variant={variant} {...props}>
      {children}
    </BaseButton>
  );
};
