import { useMemo, useState } from "react";
import {
  HiOutlineMagnifyingGlass,
  HiOutlinePlus,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";
import { PiEnvelopeSimple, PiPhone } from "react-icons/pi";
import { AppLayout } from "../../components/layout/AppLayout";
import { Button } from "../../components/common/Button";
import { Modal } from "../../components/common/Modal";
import { Input } from "../../components/common/Input";
import {
  Actions,
  ClientCard,
  ClientMain,
  ClientName,
  ClientRow,
  ClientsList,
  ClientSince,
  ContactItem,
  ContactList,
  Header,
  HeaderContent,
  IconButton,
  SearchField,
  SearchIcon,
  SearchInput,
  SearchWrapper,
  Subtitle,
  Title,
} from "./styles";

type Client = {
  id: string;
  name: string;
  phone: string;
  email: string;
  since: string;
};

const initialClients: Client[] = [
  {
    id: "1",
    name: "João Silva",
    phone: "(11) 98765-4321",
    email: "joao@email.com",
    since: "15/01/2024",
  },
  {
    id: "2",
    name: "Maria Santos",
    phone: "(11) 97654-3210",
    email: "maria@email.com",
    since: "10/02/2024",
  },
  {
    id: "3",
    name: "Pedro Oliveira",
    phone: "(11) 96543-2109",
    email: "pedro@email.com",
    since: "05/03/2024",
  },
];

function formatDateToDisplay(date: string) {
  return date.split("-").reverse().join("/");
}

export function ClientsPage() {
  const [clients, setClients] = useState<Client[]>(initialClients);
  const [search, setSearch] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingClientId, setEditingClientId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const filteredClients = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();

    if (!normalizedSearch) return clients;

    return clients.filter((client) => {
      return (
        client.name.toLowerCase().includes(normalizedSearch) ||
        client.phone.toLowerCase().includes(normalizedSearch) ||
        client.email.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [clients, search]);

  function resetForm() {
    setFormData({
      name: "",
      phone: "",
      email: "",
    });
  }

  function openCreateModal() {
    resetForm();
    setEditingClientId(null);
    setIsCreateModalOpen(true);
  }

  function closeModal() {
    setIsCreateModalOpen(false);
    setEditingClientId(null);
    resetForm();
  }

  function handleDelete(id: string) {
    setClients((previous) => previous.filter((client) => client.id !== id));
  }

  function handleEdit(id: string) {
    const client = clients.find((item) => item.id === id);
    if (!client) return;

    setEditingClientId(id);
    setFormData({
      name: client.name,
      phone: client.phone,
      email: client.email,
    });
    setIsCreateModalOpen(true);
  }

  function handleChange(field: "name" | "phone" | "email", value: string) {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function handleSubmit() {
    if (!formData.name || !formData.phone || !formData.email) {
      return;
    }

    if (editingClientId) {
      setClients((previous) =>
        previous.map((client) =>
          client.id === editingClientId
            ? {
                ...client,
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
              }
            : client,
        ),
      );

      closeModal();
      return;
    }

    const newClient: Client = {
      id: crypto.randomUUID(),
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      since: formatDateToDisplay(new Date().toISOString().slice(0, 10)),
    };

    setClients((previous) => [newClient, ...previous]);
    closeModal();
  }

  return (
    <AppLayout>
      <Header>
        <HeaderContent>
          <Title>Clientes</Title>
          <Subtitle>Gerencie sua base de clientes</Subtitle>
        </HeaderContent>

        <Button onClick={openCreateModal}>
          <HiOutlinePlus />
          Novo Cliente
        </Button>
      </Header>

      <SearchWrapper>
        <SearchField>
          <SearchIcon>
            <HiOutlineMagnifyingGlass />
          </SearchIcon>

          <SearchInput
            placeholder="Buscar por nome, telefone ou email..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </SearchField>
      </SearchWrapper>

      <ClientsList>
        {filteredClients.map((client) => (
          <ClientCard key={client.id}>
            <ClientRow>
              <ClientMain>
                <ClientName>{client.name}</ClientName>
                <ClientSince>Cliente desde {client.since}</ClientSince>

                <ContactList>
                  <ContactItem>
                    <PiPhone />
                    {client.phone}
                  </ContactItem>

                  <ContactItem>
                    <PiEnvelopeSimple />
                    {client.email}
                  </ContactItem>
                </ContactList>
              </ClientMain>

              <Actions>
                <IconButton
                  onClick={() => handleEdit(client.id)}
                  aria-label="Editar cliente"
                >
                  <HiOutlinePencilSquare />
                </IconButton>

                <IconButton
                  $variant="danger"
                  onClick={() => handleDelete(client.id)}
                  aria-label="Excluir cliente"
                >
                  <HiOutlineTrash />
                </IconButton>
              </Actions>
            </ClientRow>
          </ClientCard>
        ))}
      </ClientsList>

      <Modal
        isOpen={isCreateModalOpen}
        title={editingClientId ? "Editar Cliente" : "Novo Cliente"}
        onClose={closeModal}
        footer={
          <>
            <Button variant="secondary" onClick={closeModal}>
              Cancelar
            </Button>

            <Button onClick={handleSubmit}>
              {editingClientId ? "Salvar Alterações" : "Criar Cliente"}
            </Button>
          </>
        }
      >
        <Input
          label="Nome Completo *"
          placeholder="Ex: João Silva"
          value={formData.name}
          onChange={(event) => handleChange("name", event.target.value)}
        />

        <Input
          label="Telefone *"
          placeholder="(11) 98765-4321"
          value={formData.phone}
          onChange={(event) => handleChange("phone", event.target.value)}
        />

        <Input
          label="Email *"
          type="email"
          placeholder="joao@email.com"
          value={formData.email}
          onChange={(event) => handleChange("email", event.target.value)}
        />
      </Modal>
    </AppLayout>
  );
}
