import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { ArtistRequest } from "@/types/artist";

export default function NewArtist() {
  const navigate = useNavigate();

  // Estado del formulario
  const [form, setForm] = useState({
    name: "",
    genres: "",
    country: "ES",
    listeners: "",
    biography: "",
    status: "Borrador",
  });

  // Función para manejar los cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // Limpiar formulario
  const handleClear = () => {
    setForm({
      name: "",
      genres: "",
      country: "ES",
      listeners: "",
      biography: "",
      status: "Borrador",
    });
  };

  // Enviar formulario (crear artista)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación simple
    if (form.name.trim().length < 3) {
      alert("El nombre debe tener al menos 3 caracteres.");
      return;
    }

    // Crear objeto que la API espera
    const request: ArtistRequest = {
      name: form.name,
      biography: form.biography,
      country: form.country,
      status: form.status as "Activo" | "Borrador",
      genres: form.genres ? form.genres.split(",").map(g => g.trim()) : [],
      listeners: form.listeners === "" ? 0 : Number(form.listeners),
    };

    try {
      const res = await fetch("/api/artists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request), // sirve para convertir un objeto o valor de JavaScript en una cadena de texto con formato JSON
      });

      const data = await res.json();

      if (res.ok && data.id) {
        alert(`Artista creado con éxito (ID: ${data.id})`);
        navigate("/artistas");
      } else {
        alert(data.detail || "Ocurrió un error al crear el artista.");
      }
    } catch (err) {
      alert("Error de conexión con el servidor.");
      console.error(err);
    }
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/artistas" className="text-sm px-3 py-2 rounded-lg border">
        Volver
      </Link>

      <h1 className="text-center text-xl font-semibold mt-4 mb-6">
        Crear nuevo artista
      </h1>

      <form onSubmit={handleSubmit} onReset={handleClear} className="grid gap-4 text-sm">
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
          <button type="submit" className="px-4 py-2 rounded-lg bg-black text-white">
            Guardar
          </button>
          <button type="reset" className="px-4 py-2 rounded-lg border">
            Limpiar
          </button>
        </div>
      </form>
    </main>
  );
}
