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

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2.4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled(Card)<{ $accentColor: string }>`
  padding: 0;
  overflow: hidden;
  position: relative;
  min-height: 20rem;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 0.8rem;
    background: ${({ $accentColor }) => $accentColor};
  }
`;

export const ServiceContent = styled.div`
  padding: 2.4rem;
`;

export const ServiceTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.6rem;
  margin-bottom: 2.4rem;
`;

export const ServiceName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const IconButton = styled.button<{ $variant?: "primary" | "danger" }>`
  width: 3.6rem;
  height: 3.6rem;
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
    font-size: 1.8rem;
  }
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

export const InfoIcon = styled.div<{
  $accentColor: string;
  $softColor: string;
}>`
  width: 4rem;
  height: 4rem;
  border-radius: ${({ theme }) => theme.radius.md};
  display: grid;
  place-items: center;
  background: ${({ $softColor }) => $softColor};
  color: ${({ $accentColor }) => $accentColor};
  flex-shrink: 0;

  svg {
    font-size: 2rem;
  }
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const InfoLabel = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const InfoValue = styled.strong`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
`;

export const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
`;

export const ColorButton = styled.button<{
  $color: string;
  $selected: boolean;
}>`
  width: 100%;
  height: 4.8rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ $color }) => $color};
  border: ${({ $selected, theme }) =>
    $selected ? `3px solid ${theme.colors.text}` : "3px solid transparent"};
  box-shadow: ${({ $selected, theme }) =>
    $selected ? `0 0 0 2px ${theme.colors.surface}` : "none"};
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
