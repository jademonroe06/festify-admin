import type { Artist } from "@/types/artist";  // Asegúrate de que Artist incluya: id, name, genres, listeners, country?, festivals?, status?, image?
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";  // Asume React Router para navegación interna

export default function ArtistasIndex() {
  const [artists, setArtists] = useState<Artist[]>([]);  // Estado inicial vacío, esperando a que se carguen los datos
  const [loading, setLoading] = useState(true);  // Indicador de carga
  const [searchTerm, setSearchTerm] = useState("");  // Para búsqueda básica

  useEffect(() => {
    console.log("cargando artistas....");
    const headers = new Headers();
    // headers.append("ContentType", `application/json`);  // Comentado: No necesario para GET, y estaba mal escrito (debería ser "Content-Type")

    fetch("http://localhost:8081/artists", {      
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((res) => {
        setArtists(res);
        setLoading(false);
        console.log("Artistas cargados:", res);
      })
      .catch((error) => {
        console.error("Error al cargar artistas:", error);
        setLoading(false);
      });
  }, []);  // El array vacío [] significa que este efecto se ejecuta solo una vez, al montar el componente.
  // Si hubiera variables en el array, el efecto se ejecutaría cada vez que alguna de esas variables cambie.

  // Función para eliminar artista (DELETE a la API)
  const handleDelete = async (id: number) => {
    if (!confirm("¿Estás seguro de eliminar este artista?")) return;
    try {
      const response = await fetch(`http://localhost:8081/artists/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Error al eliminar");
      // Actualizar estado removiendo el artista
      setArtists(artists.filter(artist => artist.id !== id));
      alert("Artista eliminado");
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("Error al eliminar artista");
    }
  };

  // Filtrar artistas por búsqueda (básico: nombre o géneros)
  const filteredArtists = artists.filter(artist =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artist.genres.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Cargando artistas...</p>;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
          <a href="/" className="font-semibold">Festify Dashboard</a>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <a className="underline" href="/artistas">Artistas</a>
            <a href="/festivales">Festivales y Giras</a>
            <a href="/escenarios">Escenarios</a>
            <a href="/entradas">Entradas</a>
            <a href="/noticias">Noticias</a>
            <a href="/usuarios">Usuarios</a>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl font-extrabold">Listado de Artistas</h1>
            <p className="text-sm text-neutral-600">Gestión de artistas: Crea, Edita o Elimina</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              placeholder="Buscar por nombre o género"
              className="px-3 py-2 rounded-lg border w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link to="/artistas/nuevoArtista" className="px-3 py-2 rounded-lg bg-neutral-900 text-white text-sm">
              Agrega un Artista
            </Link>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">Lista: Artista más imagen</th>
                <th>Géneros</th>
                <th>Oyentes</th>
                <th>Países</th>
                <th>Festivales - Giras</th>
                <th>Estado actual</th>
                <th className="text-right">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {filteredArtists.map((artist: Artist) => (
                <tr key={artist.id} className="border-b hover:bg-neutral-50">
                  <td className="py-2">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-30 h-30 rounded-md object-cover"
                        alt={artist.name}
                      />
                      <div>
                        <p className="font-medium">{artist.name}</p>
                        <p className="text-xs text-neutral-500">ID: {artist.id}</p>
                      </div>
                    </div>
                  </td>
                  <td>{artist.genres}</td>
                  <td>{artist.listeners}M</td>  {/* Corregido: usa 'listeners' en lugar de 'oyentes' */}
                  <td>{artist.country || "N/A"}</td>
                  <td>{artist.festivals || 0}</td>
                  <td>
                    <span className={`px-2 py-1 rounded text-xs ${
                      artist.status === "Activo" ? "bg-green-100 text-green-800" : "bg-red-300 text-red-800"
                    }`}>
                      {artist.status || "Inactivo"}
                    </span>
                  </td>
                  <td className="text-right">
                    <Link to={`/artistas/editar/${artist.id}`} className="px-2 py-1 rounded border">
                      Editar
                    </Link>
                    <button
                      onClick={() => handleDelete(artist.id)}
                      className="px-2 py-1 rounded border text-red-700"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <footer className="border-t mt-auto">
        <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-neutral-600 text-center">
          {new Date().getFullYear()} © Festify. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}


// En este ejemplo, useEffect simula la carga de datos estableciendo un estado inicial con un artista ficticio.
// El hook useState se utiliza para agregar estado a componentes funcionales de React.
// Aquí, se usa para almacenar la lista de artistas cargados.
// La función setArtists se utiliza para actualizar el estado de los artistas, lo que provoca una re-renderización del componente con los nuevos datos.
// El componente renderiza una lista de nombres de artistas utilizando el método map para iterar sobre el array de artistas en el estado.
// En resumen, useEffect se encarga de cargar los datos cuando el componente se monta, y useState almacena esos datos para que puedan ser renderizados en la interfaz de usuario.