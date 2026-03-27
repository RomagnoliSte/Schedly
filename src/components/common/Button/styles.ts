import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "secondary";

type WrapperProps = {
  $variant: ButtonVariant;
};

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primaryDark};
    color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  height: 4.8rem;
  padding: 0 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 1.5rem;
  font-weight: 700;
  transition: 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  ${({ $variant }) => variants[$variant]};

  &:hover {
    transform: translateY(-1px);
    opacity: 0.96;
  }

  svg {
    font-size: 1.8rem;
  }
`;
