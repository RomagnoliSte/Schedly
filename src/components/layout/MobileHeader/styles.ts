import styled from "styled-components";

export const Wrapper = styled.header`
  height: 6rem;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const MenuButton = styled.button`
  width: 4rem;
  height: 4rem;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.text};

  svg {
    font-size: 2.6rem;
  }
`;
