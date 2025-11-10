import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { Artist, ArtistRequest } from "@/types/artist";

/**
 * Formulario local simplificado
 */
type ArtistForm = {
  name: string;
  genres: string;
  country: string;
  listeners: number | "";
  status: "Activo" | "Borrador";
  biography: string;
};

const defaultForm: ArtistForm = {
  name: "",
  genres: "",
  country: "ES",
  listeners: "",
  status: "Borrador",
  biography: "",
};

/**
 * Funciones simuladas de API (reemplázalas con tus funciones reales)
 */
async function getArtist(id: string): Promise<Artist> {
  const res = await fetch(`/api/artists/${id}`);
  if (!res.ok) throw new Error("No se pudo cargar el artista");
  return await res.json();
}

async function updateArtist(id: string, request: ArtistRequest): Promise<Artist> {
  const res = await fetch(`/api/artists/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });
  if (!res.ok) throw new Error("Error al actualizar el artista");
  return await res.json();
}

/**
 * Componente principal
 */
export default function EditArtist() {
  const [form, setForm] = useState<ArtistForm>(defaultForm);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // ✅ Cargar datos del artista al iniciar
  useEffect(() => {
    if (!id) return;
    getArtist(id)
      .then((artist) => {
        setForm({
          name: artist.name,
          genres: artist.genres.join(", "),
          country: artist.country,
          listeners: artist.listeners,
          status: artist.status as "Activo" | "Borrador",
          biography: artist.biography || "",
        });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  // ✅ Cambiar los campos
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Enviar el formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return alert("No se encontró el ID del artista.");

    const request: ArtistRequest = {
      name: form.name,
      biography: form.biography,
      country: form.country,
      status: form.status,
      genres: form.genres.split(",").map((g) => g.trim()),
      listeners: form.listeners === "" ? 0 : Number(form.listeners),
    };

    try {
      await updateArtist(id, request);
      alert("Artista actualizado con éxito.");
      navigate("/artists");
    } catch (err: any) {
      alert(err.message || "Error al actualizar el artista.");
    }
  };

  // ✅ Resetear el formulario
  const handleReset = () => setForm(defaultForm);

  if (loading) return <p className="text-center mt-10">Cargando...</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">
        Error al cargar el artista: {error}
      </p>
    );

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <Link to="/artists" className="text-sm px-3 py-2 rounded-lg border">
          Volver
        </Link>

        <h1 className="text-center text-xl font-semibold mt-4 mb-6">
          Editar artista
        </h1>

        <form onSubmit={handleSubmit} onReset={handleReset} className="grid gap-4 text-sm">
          <input
            name="name"
            placeholder="Nombre del artista"
            value={form.name}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg"
            required
          />

          <input
            name="genres"
            placeholder="Géneros (separados por coma)"
            value={form.genres}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg"
          />

          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg"
          >
            <option value="ES">España</option>
            <option value="FR">Francia</option>
            <option value="PT">Portugal</option>
            <option value="UK">Reino Unido</option>
          </select>

          <input
            name="listeners"
            placeholder="Oyentes mensuales"
            value={form.listeners}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg"
            inputMode="numeric"
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg"
          >
            <option value="Activo">Activo</option>
            <option value="Borrador">Borrador</option>
          </select>

          <textarea
            name="biography"
            placeholder="Biografía del artista"
            rows={4}
            value={form.biography}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg"
          />

          <div className="flex gap-3 mt-2">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-black text-white"
            >
              Guardar
            </button>
            <button type="reset" className="px-4 py-2 rounded-lg border">
              Limpiar
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
