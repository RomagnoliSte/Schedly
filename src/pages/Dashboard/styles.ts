import styled from "styled-components";
import { Card } from "../../components/common/Card";

export const Header = styled.div`
  margin-bottom: 3.2rem;
`;

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

export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;
  margin-bottom: 3.2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const SummaryCard = styled(Card)`
  padding: 2.4rem;
`;

export const SummaryTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.2rem;
`;

export const SummaryLabel = styled.span`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const SummaryValue = styled.strong`
  display: block;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.8rem;
`;

export const SummaryInfo = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const AppointmentsCard = styled(Card)`
  padding: 2.4rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2.4rem;
`;

export const AppointmentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const AppointmentItem = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const AppointmentMain = styled.div``;

export const AppointmentName = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  strong {
    font-size: 1.8rem;
  }
`;

export const Badge = styled.span<{ $status: "confirmed" | "pending" }>`
  padding: 0.6rem 1rem;
  border-radius: 999px;
  font-size: 1.2rem;
  font-weight: 600;
  background: ${({ theme, $status }) =>
    $status === "confirmed"
      ? theme.colors.successSoft
      : theme.colors.warningSoft};
  color: ${({ theme, $status }) =>
    $status === "confirmed" ? "#15803D" : "#A16207"};
`;

export const AppointmentMeta = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const AppointmentDate = styled.div`
  text-align: right;

  strong {
    display: block;
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }

  span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: left;
  }
`;
