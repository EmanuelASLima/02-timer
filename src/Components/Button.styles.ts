import styled, { css } from "styled-components";

export type ButtonVariants = "Primary" | "Secondary" | "Success" | "Danger";

interface ButtonContainerProps {
  variant: ButtonVariants;
}

const ButtonVariants = {
  Primary: "purple",
  Secondary: "orange",
  Success: "red",
  Danger: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 6.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  margin: 0.5rem;

  background-color: ${(props) => props.theme["green-500"]};
`;
