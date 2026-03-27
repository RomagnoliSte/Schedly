import type { PropsWithChildren, ReactNode } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import {
  Body,
  CloseButton,
  Container,
  Footer,
  Header,
  Overlay,
  Title,
} from "./styles";

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  title: string;
  onClose: () => void;
  footer?: ReactNode;
}>;

export function Modal({
  isOpen,
  title,
  onClose,
  children,
  footer,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <Overlay $isOpen={isOpen} onClick={onClose}>
      <Container onClick={(event) => event.stopPropagation()}>
        <Header>
          <Title>{title}</Title>

          <CloseButton onClick={onClose} aria-label="Fechar modal">
            <HiOutlineXMark />
          </CloseButton>
        </Header>

        <Body>{children}</Body>

        {footer ? <Footer>{footer}</Footer> : null}
      </Container>
    </Overlay>
  );
}
