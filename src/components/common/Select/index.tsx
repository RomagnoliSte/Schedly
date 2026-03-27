import type { SelectHTMLAttributes } from "react";
import { Field, Label, SelectElement } from "./styles";

type Option = {
  value: string;
  label: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: Option[];
};

export function Select({ label, id, options, ...props }: SelectProps) {
  return (
    <Field>
      {label ? <Label htmlFor={id}>{label}</Label> : null}

      <SelectElement id={id} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectElement>
    </Field>
  );
}
