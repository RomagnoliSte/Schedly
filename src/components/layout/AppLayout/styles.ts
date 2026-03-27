import styled from "styled-components";

export const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.colors.background};
`;

export const SidebarArea = styled.aside`
  width: 25.2rem;
  min-width: 25.2rem;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const ContentArea = styled.div`
  flex: 1;
  min-width: 0;
`;

export const MobileTop = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    position: sticky;
    top: 0;
    z-index: 20;
  }
`;

export const Main = styled.main`
  padding: 4rem 3.2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3.2rem 2rem;
  }
`;
