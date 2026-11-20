import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchBraiders } from "../data";
import { Braider } from "../types";

export function useBraiders(searchQuery = "") {
  const [braiders, setBraiders] = useState<Braider[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadTick, setReloadTick] = useState(0);

  useEffect(() => {
    let isActive = true;

    async function getBraiders() {
      try {
        const data = await fetchBraiders();
        if (!isActive) return;
        setBraiders(data);
        setError(null);
      } catch (err) {
        if (!isActive) return;
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong while loading braiders.",
        );
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    }

    void getBraiders();

    return () => {
      isActive = false;
    };
  }, [reloadTick]);

  const retry = useCallback(() => {
    setIsLoading(true);
    setError(null);
    setReloadTick((prev) => prev + 1);
  }, []);

  const filteredBraiders = useMemo(() => {
    const normalized = searchQuery.trim().toLowerCase();
    if (!normalized) return braiders;

    return braiders.filter(
      (braider) =>
        braider.name.toLowerCase().includes(normalized) ||
        braider.specialty.toLowerCase().includes(normalized),
    );
  }, [braiders, searchQuery]);

  return {
    braiders: filteredBraiders,
    isLoading,
    error,
    retry,
  };
}
