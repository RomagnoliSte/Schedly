import type { HTMLAttributes, PropsWithChildren } from "react";
import { Wrapper } from "./styles";

type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function Card({ children, ...props }: CardProps) {
  return <Wrapper {...props}>{children}</Wrapper>;
}
