import { useMemo, useState } from "react";
import { HiOutlinePlus, HiOutlineTrash } from "react-icons/hi2";
import { AppLayout } from "../../components/layout/AppLayout";
import { Button } from "../../components/common/Button";
import { Modal } from "../../components/common/Modal";
import { Input, TextArea } from "../../components/common/Input";
import { Select } from "../../components/common/Select";
import {
  AppointmentActions,
  AppointmentCard,
  AppointmentMain,
  AppointmentRow,
  AppointmentsList,
  ClientBlock,
  ClientName,
  ClientPhone,
  DateTimeRow,
  DeleteButton,
  Filters,
  FormGrid,
  Header,
  HeaderContent,
  InfoItem,
  ServiceBlock,
  ServiceMeta,
  ServiceName,
  Subtitle,
  Title,
} from "./styles";

type AppointmentStatus = "confirmed" | "pending" | "cancelled";

type Appointment = {
  id: string;
  client: string;
  phone: string;
  service: string;
  duration: string;
  price: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  notes?: string;
};

const initialAppointments: Appointment[] = [
  {
    id: "1",
    client: "João Silva",
    phone: "(11) 98765-4321",
    service: "Corte de Cabelo",
    duration: "30 min",
    price: "R$ 50.00",
    date: "27/03/2026",
    time: "09:00",
    status: "confirmed",
  },
  {
    id: "2",
    client: "Maria Santos",
    phone: "(11) 97654-3210",
    service: "Corte + Barba",
    duration: "45 min",
    price: "R$ 70.00",
    date: "27/03/2026",
    time: "10:00",
    status: "confirmed",
  },
  {
    id: "3",
    client: "Pedro Oliveira",
    phone: "(11) 96543-2109",
    service: "Barba",
    duration: "20 min",
    price: "R$ 30.00",
    date: "27/03/2026",
    time: "14:00",
    status: "pending",
  },
  {
    id: "4",
    client: "João Silva",
    phone: "(11) 98765-4321",
    service: "Hidratação",
    duration: "60 min",
    price: "R$ 80.00",
    date: "28/03/2026",
    time: "09:00",
    status: "confirmed",
  },
];

const statusOptions = [
  { value: "all", label: "Todos" },
  { value: "confirmed", label: "Confirmado" },
  { value: "pending", label: "Pendente" },
  { value: "cancelled", label: "Cancelado" },
];

const serviceOptions = [
  { value: "", label: "Selecione um serviço" },
  { value: "Corte de Cabelo", label: "Corte de Cabelo" },
  { value: "Barba", label: "Barba" },
  { value: "Corte + Barba", label: "Corte + Barba" },
  { value: "Hidratação", label: "Hidratação" },
];

const clientOptions = [
  { value: "", label: "Selecione um cliente" },
  { value: "João Silva", label: "João Silva" },
  { value: "Maria Santos", label: "Maria Santos" },
  { value: "Pedro Oliveira", label: "Pedro Oliveira" },
];

const formStatusOptions = [
  { value: "pending", label: "Pendente" },
  { value: "confirmed", label: "Confirmado" },
  { value: "cancelled", label: "Cancelado" },
];

export function AppointmentsPage() {
  const [appointments, setAppointments] =
    useState<Appointment[]>(initialAppointments);

  const [statusFilter, setStatusFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    client: "",
    service: "",
    date: "",
    time: "",
    status: "pending",
    notes: "",
  });

  const filteredAppointments = useMemo(() => {
    return appointments.filter((appointment) => {
      const matchesStatus =
        statusFilter === "all" || appointment.status === statusFilter;

      const matchesService =
        serviceFilter === "all" || appointment.service === serviceFilter;

      return matchesStatus && matchesService;
    });
  }, [appointments, serviceFilter, statusFilter]);

  function handleDelete(id: string) {
    setAppointments((previous) =>
      previous.filter((appointment) => appointment.id !== id),
    );
  }

  function handleStatusChange(id: string, value: string) {
    setAppointments((previous) =>
      previous.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: value as AppointmentStatus }
          : appointment,
      ),
    );
  }

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleChangeForm(
    field: "client" | "service" | "date" | "time" | "status" | "notes",
    value: string,
  ) {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function handleCreateAppointment() {
    if (
      !formData.client ||
      !formData.service ||
      !formData.date ||
      !formData.time
    ) {
      return;
    }

    const serviceDetailsMap: Record<
      string,
      { duration: string; price: string }
    > = {
      "Corte de Cabelo": { duration: "30 min", price: "R$ 50.00" },
      Barba: { duration: "20 min", price: "R$ 30.00" },
      "Corte + Barba": { duration: "45 min", price: "R$ 70.00" },
      Hidratação: { duration: "60 min", price: "R$ 80.00" },
    };

    const phoneMap: Record<string, string> = {
      "João Silva": "(11) 98765-4321",
      "Maria Santos": "(11) 97654-3210",
      "Pedro Oliveira": "(11) 96543-2109",
    };

    const serviceDetails = serviceDetailsMap[formData.service] ?? {
      duration: "30 min",
      price: "R$ 0.00",
    };

    const formattedDate = formData.date.split("-").reverse().join("/");

    const newAppointment: Appointment = {
      id: crypto.randomUUID(),
      client: formData.client,
      phone: phoneMap[formData.client] ?? "(11) 90000-0000",
      service: formData.service,
      duration: serviceDetails.duration,
      price: serviceDetails.price,
      date: formattedDate,
      time: formData.time,
      status: formData.status as AppointmentStatus,
      notes: formData.notes,
    };

    setAppointments((previous) => [newAppointment, ...previous]);

    setFormData({
      client: "",
      service: "",
      date: "",
      time: "",
      status: "pending",
      notes: "",
    });

    setIsModalOpen(false);
  }

  return (
    <AppLayout>
      <Header>
        <HeaderContent>
          <Title>Agendamentos</Title>
          <Subtitle>Gerencie todos os agendamentos</Subtitle>
        </HeaderContent>

        <Button onClick={handleOpenModal}>
          <HiOutlinePlus />
          Novo Agendamento
        </Button>
      </Header>

      <Filters>
        <Select
          options={statusOptions}
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
        />

        <Select
          options={[
            { value: "all", label: "Todos" },
            { value: "Corte de Cabelo", label: "Corte de Cabelo" },
            { value: "Barba", label: "Barba" },
            { value: "Corte + Barba", label: "Corte + Barba" },
            { value: "Hidratação", label: "Hidratação" },
          ]}
          value={serviceFilter}
          onChange={(event) => setServiceFilter(event.target.value)}
        />
      </Filters>

      <AppointmentsList>
        {filteredAppointments.map((appointment) => (
          <AppointmentCard key={appointment.id}>
            <AppointmentRow>
              <AppointmentMain>
                <ClientBlock>
                  <ClientName>{appointment.client}</ClientName>
                  <ClientPhone>{appointment.phone}</ClientPhone>
                </ClientBlock>

                <ServiceBlock>
                  <ServiceName>{appointment.service}</ServiceName>
                  <ServiceMeta>
                    {appointment.duration} • {appointment.price}
                  </ServiceMeta>
                </ServiceBlock>

                <DateTimeRow>
                  <InfoItem>{appointment.date}</InfoItem>
                  <InfoItem>{appointment.time}</InfoItem>
                </DateTimeRow>
              </AppointmentMain>

              <AppointmentActions>
                <Select
                  options={[
                    { value: "confirmed", label: "Confirmado" },
                    { value: "pending", label: "Pendente" },
                    { value: "cancelled", label: "Cancelado" },
                  ]}
                  value={appointment.status}
                  onChange={(event) =>
                    handleStatusChange(appointment.id, event.target.value)
                  }
                />

                <DeleteButton
                  onClick={() => handleDelete(appointment.id)}
                  aria-label="Excluir agendamento"
                >
                  <HiOutlineTrash />
                </DeleteButton>
              </AppointmentActions>
            </AppointmentRow>
          </AppointmentCard>
        ))}
      </AppointmentsList>

      <Modal
        isOpen={isModalOpen}
        title="Novo Agendamento"
        onClose={handleCloseModal}
        footer={
          <>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button onClick={handleCreateAppointment}>Criar Agendamento</Button>
          </>
        }
      >
        <Select
          label="Cliente *"
          options={clientOptions}
          value={formData.client}
          onChange={(event) => handleChangeForm("client", event.target.value)}
        />

        <Select
          label="Serviço *"
          options={serviceOptions}
          value={formData.service}
          onChange={(event) => handleChangeForm("service", event.target.value)}
        />

        <FormGrid>
          <Input
            label="Data *"
            type="date"
            value={formData.date}
            onChange={(event) => handleChangeForm("date", event.target.value)}
          />

          <Input
            label="Horário *"
            type="time"
            value={formData.time}
            onChange={(event) => handleChangeForm("time", event.target.value)}
          />
        </FormGrid>

        <Select
          label="Status"
          options={formStatusOptions}
          value={formData.status}
          onChange={(event) => handleChangeForm("status", event.target.value)}
        />

        <TextArea
          label="Observações"
          placeholder="Informações adicionais..."
          value={formData.notes}
          onChange={(event) => handleChangeForm("notes", event.target.value)}
        />
      </Modal>
    </AppLayout>
  );
}
