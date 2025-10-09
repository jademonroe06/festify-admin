export type Artist = {
  id: number;
  name: string;
  genres: string[];
  country: string;
  totalFestivals: number;
  status: "Activo" | "Borrador";
};
