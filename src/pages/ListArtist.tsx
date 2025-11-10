import type { Artist } from "@/types/artist";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListArtist() {
  const [artists, setArtists] = useState<Artist[]>([]);  // Estado inicial vacío, esperando a que se carguen los datos
  const [loading, setLoading] = useState(true);  // Indicador de carga
  const [searchTerm, setSearchTerm] = useState("");  // Para búsqueda básica

  // useEffect: se ejecuta al montar el componente
  useEffect(() => {
    console.log("Cargando artistas...");

    fetch("http://localhost:8081/artists", { method: "GET" })
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
  }, []); // Se ejecuta solo una vez al montar el componente

  // Función para eliminar artista (DELETE a la API)
  const handleDelete = async (id: string) => {
    if (!confirm("¿Estás seguro de eliminar este artista?")) return;
    try {
      const response = await fetch(`http://localhost:8081/artists/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Error al eliminar artista");
      setArtists(artists.filter((artist) => artist.id !== id)); // Actualiza la lista sin el artista eliminado
      alert("Artista eliminado con éxito");
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("Error al eliminar artista");
    }
  };

  // Filtra artistas por nombre o género
  const filteredArtists = artists.filter((artist) => {
    const nameMatch = artist.name.toLowerCase().includes(searchTerm.toLowerCase());
    const genresMatch = Array.isArray(artist.genres)
      ? artist.genres.join(", ").toLowerCase().includes(searchTerm.toLowerCase())
      : false;
    return nameMatch || genresMatch;
  });

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
                <th className="py-2">Artista</th>
                <th>Géneros</th>
                <th>Oyentes</th>
                <th>País</th>
                <th>Festivales</th>
                <th>Estado</th>
                <th className="text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredArtists.map((artist) => (
                <tr key={artist.id} className="border-b hover:bg-neutral-50">
                  <td className="py-2">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-10 h-10 rounded-md object-cover"
                        src={artist.image || "https://via.placeholder.com/100"}
                        alt={artist.name}
                      />
                      <div>
                        <p className="font-medium">{artist.name}</p>
                        <p className="text-xs text-neutral-500">ID: {artist.id}</p>
                      </div>
                    </div>
                  </td>
                  <td>{Array.isArray(artist.genres) ? artist.genres.join(", ") : "N/A"}</td>
                  <td>{artist.listeners}M</td>
                  <td>{artist.country || "N/A"}</td>
                  <td>{artist.festivals || 0}</td>
                  <td>
                    <span className={`px-2 py-1 rounded text-xs ${
                      artist.status === "Activo" ? "bg-green-100 text-green-800" : "bg-red-300 text-red-800"
                    }`}>
                      {artist.status || "Inactivo"}
                    </span>
                  </td>
                  <td className="text-right flex justify-end gap-2">
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
