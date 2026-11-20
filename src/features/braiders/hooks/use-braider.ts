import { useCallback, useEffect, useState } from "react";
import { fetchBraiderById } from "../data";
import { Braider } from "../types";

export function useBraider(id: string) {
  const [braider, setBraider] = useState<Braider | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadTick, setReloadTick] = useState(0);

  useEffect(() => {
    let isActive = true;

    async function runFetch() {
      try {
        if (!id) {
          setBraider(null);
          setError("Invalid braider identifier.");
          return;
        }

        const result = await fetchBraiderById(id);
        if (!isActive) return;

        if (!result) {
          setBraider(null);
          setError("We couldn't find this braider.");
        } else {
          setBraider(result);
          setError(null);
        }
      } catch (err) {
        if (!isActive) return;
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong while loading braider details.",
        );
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    }

    void runFetch();

    return () => {
      isActive = false;
    };
  }, [id, reloadTick]);

  const retry = useCallback(() => {
    setIsLoading(true);
    setError(null);
    setReloadTick((prev) => prev + 1);
  }, []);

  return {
    braider,
    isLoading,
    error,
    retry,
  };
}
