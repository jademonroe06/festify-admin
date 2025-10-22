export type CreateArtistRequest = {
  name: string;
  genres: string[];
  country: string;
  listeners: number;
  status: "Activo" | "Borrador";
  bio: string;
}