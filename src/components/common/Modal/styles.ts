import styled from "styled-components";

type OverlayProps = {
  $isOpen: boolean;
};

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 100;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 50rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 2.4rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const CloseButton = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};

  svg {
    font-size: 2.2rem;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
  margin-top: 2.4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column-reverse;
  }
`;
