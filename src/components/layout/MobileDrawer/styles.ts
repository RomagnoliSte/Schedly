import styled from "styled-components";
import { NavLink } from "react-router-dom";

type OverlayProps = {
  $isOpen: boolean;
};

type DrawerProps = {
  $isOpen: boolean;
};

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.overlay};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: 0.25s;
  z-index: 30;
`;

export const Drawer = styled.aside<DrawerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 28rem;
  max-width: 85%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.surface};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: 0.25s;
  z-index: 40;
  padding: 2rem 1.6rem;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Logo = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CloseButton = styled.button`
  width: 4rem;
  height: 4rem;
  display: grid;
  place-items: center;

  svg {
    font-size: 2.4rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.4rem 1.6rem;
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};

  svg {
    font-size: 2rem;
  }

  &.active {
    background: ${({ theme }) => theme.colors.blueSoft};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
