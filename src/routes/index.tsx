import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard";
import { AppointmentsPage } from "../pages/Appointments";
import { ClientsPage } from "../pages/Clients";
import { ServicesPage } from "../pages/Services";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/agendamentos" element={<AppointmentsPage />} />
      <Route path="/clientes" element={<ClientsPage />} />
      <Route path="/servicos" element={<ServicesPage />} />
    </Routes>
  );
}
