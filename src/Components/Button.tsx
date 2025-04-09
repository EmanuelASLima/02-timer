import { ButtonContainer, ButtonVariants } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariants;
}
export function Button({ variant = "Primary" }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>;
}
