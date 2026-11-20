import { useEffect, useState } from "react";

export function useDebouncedValue<T>(value: T, delayMs = 250): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  const isClearedString = typeof value === "string" && value.trim() === "";

  useEffect(() => {
    if (isClearedString) {
      return;
    }

    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [value, delayMs, isClearedString]);

  if (isClearedString) {
    return value;
  }

  return debouncedValue;
}
