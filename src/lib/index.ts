import type React from "react";
import { useState } from "react";

export default function useInput(state: string, limit?: number) {
  const [value, setValue] = useState(state);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    const limitValue = limit !== undefined ? value.slice(0, limit) : value;
    const formattedValue = formatPhoneNumber(limitValue);

    setValue(formattedValue);
  };

  const resetValue = () => {
    setValue("");
  };

  return { value, onChange, resetValue };
}

const formatPhoneNumber = (value: string): string => {
  const cleaned = value.replace(/[^0-9]/g, "");
  const parts = [cleaned.slice(0, 3), cleaned.slice(3, 7), cleaned.slice(7)];

  return parts.filter(Boolean).join("-");
};
