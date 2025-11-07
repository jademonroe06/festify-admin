export type Artist = {
  festivals: number;
  id: string;
  name: string;
  genres: string[];
  country: string;
  totalFestivals: number;
  listeners: number;
  status: "Activo" | "Borrador";
  biography: string;
};

export type ArtistRequest = {
  id?: string;
  name: string;
  genres: string[];
  country: string;
  listeners: number;
  status: "Activo" | "Borrador";
  biography: string;
};