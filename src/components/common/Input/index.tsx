import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { Field, InputElement, Label, TextAreaElement } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export function Input({ label, id, ...props }: InputProps) {
  return (
    <Field>
      <Label htmlFor={id}>{label}</Label>
      <InputElement id={id} {...props} />
    </Field>
  );
}

export function TextArea({ label, id, ...props }: TextAreaProps) {
  return (
    <Field>
      <Label htmlFor={id}>{label}</Label>
      <TextAreaElement id={id} {...props} />
    </Field>
  );
}
