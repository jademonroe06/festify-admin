import type { ReactNode } from "react";

export type Artist = {
  oyentes: ReactNode;
  id: number;
  name: string;
  genres: string[];
  country: string;
  totalFestivals: number;
  status: "Activo" | "Borrador";
};
