import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { PiCalendarBlank, PiUsers, PiHandbag } from "react-icons/pi";
import { Brand, Logo, Nav, NavItem, Subtitle, Wrapper } from "./styles";

export function Sidebar() {
  return (
    <Wrapper>
      <Brand>
        <Logo>Schedly</Logo>
        <Subtitle>Gestão de agendamentos de serviços</Subtitle>
      </Brand>

      <Nav>
        <NavItem to="/dashboard">
          <HiOutlineSquares2X2 />
          Dashboard
        </NavItem>

        <NavItem to="/agendamentos">
          <PiCalendarBlank />
          Agendamentos
        </NavItem>

        <NavItem to="/clientes">
          <PiUsers />
          Clientes
        </NavItem>

        <NavItem to="/servicos">
          <PiHandbag />
          Serviços
        </NavItem>
      </Nav>
    </Wrapper>
  );
}
