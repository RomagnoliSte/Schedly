import { HiOutlineSquares2X2, HiOutlineXMark } from "react-icons/hi2";
import { PiCalendarBlank, PiUsers, PiHandbag } from "react-icons/pi";
import {
  CloseButton,
  Drawer,
  Logo,
  Nav,
  NavItem,
  Overlay,
  Top,
} from "./styles";

type MobileDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />

      <Drawer $isOpen={isOpen}>
        <Top>
          <Logo>Schedly</Logo>

          <CloseButton onClick={onClose} aria-label="Fechar menu">
            <HiOutlineXMark />
          </CloseButton>
        </Top>

        <Nav>
          <NavItem to="/dashboard" onClick={onClose}>
            <HiOutlineSquares2X2 />
            Dashboard
          </NavItem>

          <NavItem to="/agendamentos" onClick={onClose}>
            <PiCalendarBlank />
            Agendamentos
          </NavItem>

          <NavItem to="/clientes" onClick={onClose}>
            <PiUsers />
            Clientes
          </NavItem>

          <NavItem to="/servicos" onClick={onClose}>
            <PiHandbag />
            Serviços
          </NavItem>
        </Nav>
      </Drawer>
    </>
  );
}
