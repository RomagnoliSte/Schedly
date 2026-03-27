import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  height: 100vh;
  padding: 3.2rem 1.6rem;
  position: sticky;
  top: 0;
`;

export const Brand = styled.div`
  margin-bottom: 3.2rem;
`;

export const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.8rem;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 16rem;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.4rem 1.6rem;
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.6rem;
  transition: 0.2s;

  svg {
    font-size: 2rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }

  &.active {
    background: ${({ theme }) => theme.colors.blueSoft};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
