import { Braider } from "./types";

export const BRAIDERS_DATA: Braider[] = [
  {
    id: "1",
    name: "Adaeze Okafor",
    specialty: "Knotless braids",
    rating: 4.9,
    priceFrom: 120,
    location: "Houston",
    services: [
      { name: "Knotless braids", price: 180, minutes: 240 },
      { name: "Cornrows", price: 90, minutes: 120 },
    ],
    slots: ["Mon 9:00 AM", "Mon 1:00 PM", "Wed 10:00 AM"],
  },
  {
    id: "2",
    name: "Fatima Diallo",
    specialty: "Box braids",
    rating: 4.8,
    priceFrom: 100,
    location: "Houston",
    services: [
      { name: "Box braids", price: 150, minutes: 300 },
      { name: "Twists", price: 110, minutes: 180 },
    ],
    slots: ["Tue 9:00 AM", "Thu 2:00 PM", "Fri 11:00 AM"],
  },
  {
    id: "3",
    name: "Chiamaka Eze",
    specialty: "Cornrows",
    rating: 5.0,
    priceFrom: 80,
    location: "Houston",
    services: [
      { name: "Cornrows", price: 80, minutes: 90 },
      { name: "Ghana weaving", price: 130, minutes: 210 },
    ],
    slots: ["Mon 11:00 AM", "Wed 9:00 AM", "Sat 10:00 AM"],
  },
  {
    id: "4",
    name: "Aminata Sow",
    specialty: "Twists",
    rating: 4.7,
    priceFrom: 95,
    location: "Houston",
    services: [
      { name: "Passion twists", price: 140, minutes: 240 },
      { name: "Senegalese twists", price: 120, minutes: 200 },
    ],
    slots: ["Tue 1:00 PM", "Fri 9:00 AM", "Sat 2:00 PM"],
  },
];

export async function fetchBraiders(shouldFail = false): Promise<Braider[]> {
  await new Promise((resolve) => setTimeout(resolve, 400));

  if (shouldFail) {
    throw new Error("Unable to load braiders. Please check your connection.");
  }

  return BRAIDERS_DATA;
}

export async function fetchBraiderById(
  id: string,
  shouldFail = false,
): Promise<Braider | null> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (shouldFail) {
    throw new Error("Unable to load braider details. Please try again.");
  }

  return BRAIDERS_DATA.find((item) => item.id === id) ?? null;
}
