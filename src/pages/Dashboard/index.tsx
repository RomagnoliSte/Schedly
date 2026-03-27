import { PiCalendarBlank, PiUsers, PiHandbag, PiTrendUp } from "react-icons/pi";
import { AppLayout } from "../../components/layout/AppLayout";
import {
  AppointmentsCard,
  AppointmentDate,
  AppointmentItem,
  AppointmentList,
  AppointmentMain,
  AppointmentMeta,
  AppointmentName,
  Badge,
  Header,
  SectionTitle,
  Subtitle,
  SummaryCard,
  SummaryGrid,
  SummaryInfo,
  SummaryLabel,
  SummaryTop,
  SummaryValue,
  Title,
} from "./styles";

const appointments = [
  {
    id: "1",
    client: "João Silva",
    service: "Corte de Cabelo",
    duration: "30 min",
    price: "R$ 50.00",
    date: "27/03/2026",
    time: "09:00",
    status: "confirmed" as const,
  },
  {
    id: "2",
    client: "Maria Santos",
    service: "Corte + Barba",
    duration: "45 min",
    price: "R$ 70.00",
    date: "27/03/2026",
    time: "10:00",
    status: "confirmed" as const,
  },
  {
    id: "3",
    client: "Pedro Oliveira",
    service: "Barba",
    duration: "20 min",
    price: "R$ 30.00",
    date: "27/03/2026",
    time: "14:00",
    status: "pending" as const,
  },
];

export function DashboardPage() {
  return (
    <AppLayout>
      <Header>
        <Title>Dashboard</Title>
        <Subtitle>Visão geral do seu negócio</Subtitle>
      </Header>

      <SummaryGrid>
        <SummaryCard>
          <SummaryTop>
            <SummaryLabel>Agendamentos Hoje</SummaryLabel>
            <PiCalendarBlank size={20} color="#2563FF" />
          </SummaryTop>
          <SummaryValue>3</SummaryValue>
          <SummaryInfo>2 confirmados</SummaryInfo>
        </SummaryCard>

        <SummaryCard>
          <SummaryTop>
            <SummaryLabel>Total de Clientes</SummaryLabel>
            <PiUsers size={20} color="#16A34A" />
          </SummaryTop>
          <SummaryValue>3</SummaryValue>
          <SummaryInfo>Cadastrados no sistema</SummaryInfo>
        </SummaryCard>

        <SummaryCard>
          <SummaryTop>
            <SummaryLabel>Serviços Ativos</SummaryLabel>
            <PiHandbag size={20} color="#9333EA" />
          </SummaryTop>
          <SummaryValue>4</SummaryValue>
          <SummaryInfo>Disponíveis para agendamento</SummaryInfo>
        </SummaryCard>

        <SummaryCard>
          <SummaryTop>
            <SummaryLabel>Receita Estimada Hoje</SummaryLabel>
            <PiTrendUp size={20} color="#F97316" />
          </SummaryTop>
          <SummaryValue>R$ 150.00</SummaryValue>
          <SummaryInfo>Baseado nos agendamentos</SummaryInfo>
        </SummaryCard>
      </SummaryGrid>

      <AppointmentsCard>
        <SectionTitle>Próximos Agendamentos</SectionTitle>

        <AppointmentList>
          {appointments.map((appointment) => (
            <AppointmentItem key={appointment.id}>
              <AppointmentMain>
                <AppointmentName>
                  <strong>{appointment.client}</strong>
                  <Badge $status={appointment.status}>
                    {appointment.status === "confirmed"
                      ? "confirmado"
                      : "pendente"}
                  </Badge>
                </AppointmentName>

                <AppointmentMeta>
                  {appointment.service} • {appointment.duration} •{" "}
                  {appointment.price}
                </AppointmentMeta>
              </AppointmentMain>

              <AppointmentDate>
                <strong>{appointment.date}</strong>
                <span>{appointment.time}</span>
              </AppointmentDate>
            </AppointmentItem>
          ))}
        </AppointmentList>
      </AppointmentsCard>
    </AppLayout>
  );
}
