import styled from "styled-components";
import { Card } from "../../components/common/Card";

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2.4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const HeaderContent = styled.div``;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.8rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SearchWrapper = styled.div`
  margin-bottom: 2.4rem;
`;

export const SearchField = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 5rem;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: #f8fafc;
  padding: 0 1.6rem 0 4.6rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.surface};
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 1.6rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textLight};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 2rem;
  }
`;

export const ClientsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const ClientCard = styled(Card)`
  padding: 2.4rem;
`;

export const ClientRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const ClientMain = styled.div`
  flex: 1;
`;

export const ClientName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.6rem;
`;

export const ClientSince = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.6rem;
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.5rem;

  svg {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-self: flex-end;
  }
`;

export const IconButton = styled.button<{ $variant?: "primary" | "danger" }>`
  width: 3.8rem;
  height: 3.8rem;
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme, $variant }) =>
    $variant === "danger" ? theme.colors.danger : theme.colors.primary};
  transition: 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }

  svg {
    font-size: 1.9rem;
  }
`;
