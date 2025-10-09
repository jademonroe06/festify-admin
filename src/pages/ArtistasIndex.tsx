import type { Artist } from "@/types/artist";
import { useEffect, useState } from "react";

export default function Artists() {
  const [artists, setArtists] = useState<Artist[]>([]); // Estado inicial vacío, esperando a que se carguen los datos

  useEffect(() => {
    console.log("cargando artistas....");
    const headers = new Headers();
    headers.append("ContentType", `application/json`);

    fetch("http://localhost:8081/artists", { 
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        setArtists(res);
      })
      .catch((error) => {});
  }, []);

  // El array vacío [] significa que este efecto se ejecuta solo una vez, al montar el componente.
  // Si hubiera variables en el array, el efecto se ejecutaría cada vez que alguna de esas variables cambie.

  return (
    <div>
      {artists.map((artist: Artist) => (
        <h1>{artist.name}</h1> // Renderiza el nombre de cada artista en un encabezado h1
      ))}
    </div>
  );
}

// En este ejemplo, useEffect simula la carga de datos estableciendo un estado inicial con un artista ficticio.
// El hook useState se utiliza para agregar estado a componentes funcionales de React.
// Aquí, se usa para almacenar la lista de artistas cargados.
// La función setArtists se utiliza para actualizar el estado de los artistas, lo que provoca una re-renderización del componente con los nuevos datos.
// El componente renderiza una lista de nombres de artistas utilizando el método map para iterar sobre el array de artistas en el estado.
// En resumen, useEffect se encarga de cargar los datos cuando el componente se monta, y useState almacena esos datos para que puedan ser renderizados en la interfaz de usuario.