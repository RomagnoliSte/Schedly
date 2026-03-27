import { HiOutlineBars3 } from "react-icons/hi2";
import { Logo, MenuButton, Wrapper } from "./styles";

type MobileHeaderProps = {
  onOpenMenu: () => void;
};

export function MobileHeader({ onOpenMenu }: MobileHeaderProps) {
  return (
    <Wrapper>
      <Logo>Schedly</Logo>
      <MenuButton onClick={onOpenMenu} aria-label="Abrir menu">
        <HiOutlineBars3 />
      </MenuButton>
    </Wrapper>
  );
}
