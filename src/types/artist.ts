import type { ReactNode } from "react";
import type { Artist } from "@/types/artist";
//Validando datos del formulario: import { useEffect, useState } from "react";


export type Artist {
  festivals: number;
  listeners: ReactNode;
  oyentes: ReactNode;
  id: number;
  name: string;
  genres: string[];
  country: string;
  totalFestivals: number;
  status: "Activo" | "Borrador";
};

/*export default function Artists() {
  const [artists, setArtists] = useState<Artist[]>([]);
 
  useEffect(() => {
    console.log("cargando artistas....");
 
    fetch("http://localhost:4567/artists", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        setArtists(res);
      });
  }, []);
 
  return (
    <div>
      {artists.map((artist: Artist) => (
        <h1>{artist.name}</h1>
      ))}
    </div>
  );
}*/