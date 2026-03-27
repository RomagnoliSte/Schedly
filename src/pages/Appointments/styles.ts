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

export const Filters = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-bottom: 2.4rem;
  max-width: 38rem;

  > * {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    max-width: 100%;
  }
`;

export const AppointmentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const AppointmentCard = styled(Card)`
  padding: 2.4rem;
`;

export const AppointmentRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const AppointmentMain = styled.div`
  flex: 1;
`;

export const ClientBlock = styled.div`
  margin-bottom: 1.8rem;
`;

export const ClientName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.4rem;
`;

export const ClientPhone = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ServiceBlock = styled.div`
  margin-bottom: 1.8rem;
`;

export const ServiceName = styled.h4`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.4rem;
`;

export const ServiceMeta = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const DateTimeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  flex-wrap: wrap;
`;

export const InfoItem = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const AppointmentActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.6rem;
  min-width: 14rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    align-items: stretch;
  }
`;

export const DeleteButton = styled.button`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 1.8rem;
  align-self: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-self: flex-start;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
