import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Asegúrate de tener React Router instalado

// Interfaz para el formulario
interface ArtistForm {
    id: number;
    name: string;
    genres: string;
    listeners: string;
    country: string;
    status: string;
    biography: string;
    image: File | null;
}

export default function EditarArtista() {
    const { id } = useParams<{ id: string }>();  // ID dinámico de la URL

    const [formData, setFormData] = useState<ArtistForm>({
        id: 0,
        name: "",
        genres: "",
        listeners: "",
        country: "",
        status: "Activo",
        biography: "",
        image: null,
    });

    const [loading, setLoading] = useState(true);  // Para mostrar carga mientras se obtienen datos
    const [error, setError] = useState<string | null>(null);  // Para errores

    useEffect(() => {
        console.log("Cargando datos del artista...");
        
        // Petición GET para obtener datos del artista
        fetch(`http://localhost:8081/artists/${id}`, {
            method: "GET",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                // Actualizar estado con datos de la API
                setFormData({
                    id: data.id,
                    name: data.name || "",
                    genres: data.genres || "",
                    listeners: data.listeners || "",
                    country: data.country || "",
                    status: data.status || "Activo",
                    biography: data.biography || "",
                    image: null,  // La API probablemente no devuelve el archivo; maneja por separado si es necesario
                });
                setLoading(false);
                console.log("Datos cargados:", data);
            })
            .catch((error) => {
                console.error("Error al cargar datos:", error);
                setError("No se pudieron cargar los datos del artista.");
                setLoading(false);
            });
    }, [id]);  // Se ejecuta al montar o cambiar ID

    // Manejar cambios en inputs (expandido para select y file)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, files } = e.target as any;  // Type assertion para files
        if (name === "image" && files) {
            setFormData((prev) => ({ ...prev, image: files[0] }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    // Enviar formulario (PUT a la API)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Crear FormData para enviar texto e imagen
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("genres", formData.genres);
        formDataToSend.append("listeners", formData.listeners);
        formDataToSend.append("country", formData.country);
        formDataToSend.append("status", formData.status);
        formDataToSend.append("biography", formData.biography);
        if (formData.image) {
            formDataToSend.append("image", formData.image);
        }

        try {
            const response = await fetch(`http://localhost:8081/artists/${id}`, {
                method: "PUT",  // O PATCH, según tu API
                body: formDataToSend,  // No headers "Content-Type" porque FormData lo maneja
            });

            if (!response.ok) {
                throw new Error(`Error al guardar: ${response.status}`);
            }

            const result = await response.json();
            console.log("Artista actualizado:", result);
            alert("Cambios guardados exitosamente!");
        } catch (error) {
            console.error("Error al enviar:", error);
            alert("Error al guardar cambios.");
        }
    };

    if (loading) return <p>Cargando...</p>;  // Mostrar mientras en la interfaz mientras está cargando.
    if (error) return <p>Error: {error}</p>;  // Mostrar error

    return (
        <>
            <body className="min-h-screen bg-white text-neutral-900">
                <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
                    <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
                        <a href="./index.html" className="font-semibold">Festify Dashboard</a>
                        <nav className="hidden md:flex items-center gap-4 text-sm">
                            <a className="underline" href="./admin-artistas.html">Artistas</a>
                            <a href="./admin-festivales.html">Festivales</a>
                            <a href="#">Escenarios</a>
                            <a href="#">Entradas</a>
                            <a href="#">Noticias</a>
                            <a href="#">Usuarios</a>
                        </nav>
                    </div>
                </header>
                <main className="max-w-4xl mx-auto px-4 py-8">
                    <a href="./admin-artistas.html" className="text-sm px-3 py-2 rounded-lg border">Volver</a>
                    <div className="max-w-5xl mx-auto h-16 px-4 flex items-center justify-center">
                        <h1 className="font-semibold">Editar artista</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div>
                            <label className="block text-neutral-600 mb-1">Nombre</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 rounded-lg border"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-neutral-600 mb-1">Géneros (coma)</label>
                            <input
                                type="text"
                                name="genres"
                                value={formData.genres}
                                onChange={handleChange}
                                className="w-full px-3 py-2 rounded-lg border"
                                placeholder="Indie, Electrónica"
                            />
                        </div>
                        <div>
                            <label className="block text-neutral-600 mb-1">País</label>
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full px-3 py-2 rounded-lg border"
                            >
                                <option value="ES">ES</option>
                                <option value="FR">FR</option>
                                <option value="PT">PT</option>
                                <option value="UK">UK</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-neutral-600 mb-1">Oyentes mensuales</label>
                            <input
                                type="number"
                                name="listeners"
                                value={formData.listeners}
                                onChange={handleChange}
                                className="w-full px-3 py-2 rounded-lg border"
                            />
                        </div>
                        <div>
                            <label className="block text-neutral-600 mb-1">Estado</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full px-3 py-2 rounded-lg border"
                            >
                                <option value="Activo">Activo</option>
                                <option value="Borrador">Borrador</option>
                            </select>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-neutral-600 mb-1">Biografía</label>
                            <textarea
                                name="biography"
                                value={formData.biography}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-3 py-2 rounded-lg border"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-neutral-600 mb-1">Imagen</label>
                            <input
                                type="file"
                                name="image"
                                onChange={handleChange}
                                className="w-full px-3 py-2 rounded-lg border"
                                accept="image/*"
                            />
                        </div>
                        <div className="sm:col-span-2 flex items-center gap-3 mt-2">
                            <button type="submit" className="px-4 py-2 rounded-lg bg-neutral-900 text-white">
                                Guardar
                            </button>
                        </div>
                    </form>
                </main>
                <footer className="border-t mt-auto">
                    <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-neutral-600 text-center">
                        &copy; 2025 FestivalHub
                    </div>
                </footer>
            </body>
        </>
    );
}
