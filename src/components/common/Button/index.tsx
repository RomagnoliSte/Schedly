import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Wrapper } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <Wrapper $variant={variant} {...props}>
      {children}
    </Wrapper>
  );
}
