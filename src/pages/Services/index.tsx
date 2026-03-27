import { useState } from "react";
import {
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlinePencilSquare,
  HiOutlinePlus,
  HiOutlineTrash,
} from "react-icons/hi2";
import { AppLayout } from "../../components/layout/AppLayout";
import { Button } from "../../components/common/Button";
import { Modal } from "../../components/common/Modal";
import { Input } from "../../components/common/Input";
import {
  Actions,
  ColorButton,
  ColorGrid,
  FormRow,
  Header,
  HeaderContent,
  IconButton,
  InfoCard,
  InfoIcon,
  InfoLabel,
  InfoList,
  InfoText,
  InfoValue,
  ServiceCard,
  ServiceContent,
  ServiceName,
  ServicesGrid,
  ServiceTop,
  Subtitle,
  Title,
} from "./styles";

type ServiceColorKey =
  | "blue"
  | "green"
  | "purple"
  | "orange"
  | "pink"
  | "red"
  | "cyan"
  | "indigo";

type Service = {
  id: string;
  name: string;
  duration: number;
  price: number;
  colorKey: ServiceColorKey;
};

const colorOptions: Record<ServiceColorKey, { solid: string; soft: string }> = {
  blue: { solid: "#4A84E8", soft: "#DBEAFE" },
  green: { solid: "#1FBA84", soft: "#D1FAE5" },
  purple: { solid: "#8B5CF6", soft: "#EDE9FE" },
  orange: { solid: "#F59E0B", soft: "#FFEDD5" },
  pink: { solid: "#EC4899", soft: "#FCE7F3" },
  red: { solid: "#EF4444", soft: "#FEE2E2" },
  cyan: { solid: "#06B6D4", soft: "#CFFAFE" },
  indigo: { solid: "#6366F1", soft: "#E0E7FF" },
};

const initialServices: Service[] = [
  {
    id: "1",
    name: "Corte de Cabelo",
    duration: 30,
    price: 50,
    colorKey: "blue",
  },
  {
    id: "2",
    name: "Barba",
    duration: 20,
    price: 30,
    colorKey: "green",
  },
  {
    id: "3",
    name: "Corte + Barba",
    duration: 45,
    price: 70,
    colorKey: "purple",
  },
  {
    id: "4",
    name: "Hidratação",
    duration: 60,
    price: 80,
    colorKey: "orange",
  },
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function ServicesPage() {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    duration: "",
    price: "",
    colorKey: "blue" as ServiceColorKey,
  });

  function resetForm() {
    setFormData({
      name: "",
      duration: "",
      price: "",
      colorKey: "blue",
    });
  }

  function openCreateModal() {
    resetForm();
    setEditingServiceId(null);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setEditingServiceId(null);
    resetForm();
  }

  function handleDelete(id: string) {
    setServices((previous) => previous.filter((service) => service.id !== id));
  }

  function handleEdit(id: string) {
    const service = services.find((item) => item.id === id);
    if (!service) return;

    setEditingServiceId(id);
    setFormData({
      name: service.name,
      duration: String(service.duration),
      price: String(service.price),
      colorKey: service.colorKey,
    });
    setIsModalOpen(true);
  }

  function handleChange(
    field: "name" | "duration" | "price" | "colorKey",
    value: string,
  ) {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function handleSubmit() {
    if (!formData.name || !formData.duration || !formData.price) {
      return;
    }

    const parsedDuration = Number(formData.duration);
    const parsedPrice = Number(formData.price.replace(",", "."));

    if (Number.isNaN(parsedDuration) || Number.isNaN(parsedPrice)) {
      return;
    }

    if (editingServiceId) {
      setServices((previous) =>
        previous.map((service) =>
          service.id === editingServiceId
            ? {
                ...service,
                name: formData.name,
                duration: parsedDuration,
                price: parsedPrice,
                colorKey: formData.colorKey,
              }
            : service,
        ),
      );

      closeModal();
      return;
    }

    const newService: Service = {
      id: crypto.randomUUID(),
      name: formData.name,
      duration: parsedDuration,
      price: parsedPrice,
      colorKey: formData.colorKey,
    };

    setServices((previous) => [newService, ...previous]);
    closeModal();
  }

  return (
    <AppLayout>
      <Header>
        <HeaderContent>
          <Title>Serviços</Title>
          <Subtitle>Gerencie os serviços oferecidos</Subtitle>
        </HeaderContent>

        <Button onClick={openCreateModal}>
          <HiOutlinePlus />
          Novo Serviço
        </Button>
      </Header>

      <ServicesGrid>
        {services.map((service) => {
          const selectedColors = colorOptions[service.colorKey];

          return (
            <ServiceCard key={service.id} $accentColor={selectedColors.solid}>
              <ServiceContent>
                <ServiceTop>
                  <ServiceName>{service.name}</ServiceName>

                  <Actions>
                    <IconButton
                      onClick={() => handleEdit(service.id)}
                      aria-label="Editar serviço"
                    >
                      <HiOutlinePencilSquare />
                    </IconButton>

                    <IconButton
                      $variant="danger"
                      onClick={() => handleDelete(service.id)}
                      aria-label="Excluir serviço"
                    >
                      <HiOutlineTrash />
                    </IconButton>
                  </Actions>
                </ServiceTop>

                <InfoList>
                  <InfoCard>
                    <InfoIcon
                      $accentColor={selectedColors.solid}
                      $softColor={selectedColors.soft}
                    >
                      <HiOutlineClock />
                    </InfoIcon>

                    <InfoText>
                      <InfoLabel>Duração</InfoLabel>
                      <InfoValue>{service.duration} minutos</InfoValue>
                    </InfoText>
                  </InfoCard>

                  <InfoCard>
                    <InfoIcon
                      $accentColor={selectedColors.solid}
                      $softColor={selectedColors.soft}
                    >
                      <HiOutlineCurrencyDollar />
                    </InfoIcon>

                    <InfoText>
                      <InfoLabel>Preço</InfoLabel>
                      <InfoValue>{formatCurrency(service.price)}</InfoValue>
                    </InfoText>
                  </InfoCard>
                </InfoList>
              </ServiceContent>
            </ServiceCard>
          );
        })}
      </ServicesGrid>

      <Modal
        isOpen={isModalOpen}
        title={editingServiceId ? "Editar Serviço" : "Novo Serviço"}
        onClose={closeModal}
        footer={
          <>
            <Button variant="secondary" onClick={closeModal}>
              Cancelar
            </Button>

            <Button onClick={handleSubmit}>
              {editingServiceId ? "Salvar Alterações" : "Criar Serviço"}
            </Button>
          </>
        }
      >
        <Input
          label="Nome do Serviço *"
          placeholder="Ex: Corte de Cabelo"
          value={formData.name}
          onChange={(event) => handleChange("name", event.target.value)}
        />

        <FormRow>
          <Input
            label="Duração (minutos) *"
            type="number"
            placeholder="30"
            value={formData.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
          />

          <Input
            label="Preço (R$) *"
            type="number"
            step="0.01"
            placeholder="50.00"
            value={formData.price}
            onChange={(event) => handleChange("price", event.target.value)}
          />
        </FormRow>

        <div>
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: 600,
              marginBottom: "1.2rem",
            }}
          >
            Cor do Serviço *
          </p>

          <ColorGrid>
            {(Object.keys(colorOptions) as ServiceColorKey[]).map(
              (colorKey) => (
                <ColorButton
                  key={colorKey}
                  type="button"
                  $color={colorOptions[colorKey].solid}
                  $selected={formData.colorKey === colorKey}
                  onClick={() => handleChange("colorKey", colorKey)}
                  aria-label={`Selecionar cor ${colorKey}`}
                />
              ),
            )}
          </ColorGrid>
        </div>
      </Modal>
    </AppLayout>
  );
}
