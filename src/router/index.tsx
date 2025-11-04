import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "@/pages/PageNotFound";
import HomeIndex from "@/pages/HomeIndex";
import ArtistasIndex from "@/pages/ArtistasIndex";
import FestivalesIndex from "@/pages/FestivalesIndex";
import NuevoArtistaIndex from "@/pages/NuevoArtista";
import EditarArtista from "@/pages/EditarArtista";

export const router = createBrowserRouter([
  { path: "/", element: <HomeIndex /> },
  { path: "/artistas", element: <ArtistasIndex /> },
  { path: "/artistas/nuevoArtista", element: <NuevoArtistaIndex /> }, 
  { path: "/artistas/editar/:id", element: <EditarArtista /> },
  { path: "/festivales", element: <FestivalesIndex /> },
  { path: "*", element: <PageNotFound /> },
]);

//El "useEffect" se usa para cargar los datos del artista cuando el componente se monta y se ejecuta con un ([]). "Escucha cosas"
//Si solo usamos el "useEffect() sin el array vacío, se ejecutará cada vez que el componente se renderice."
//El "useState" se usa para manejar el estado del formulario de edición de artista.
//El "useParams" se usa para obtener los parámetros de la URL, como el ID del artista que se va a editar.
//El "formData" es un objeto que contiene los datos del artista que se van a editar.
//El "setFormData" es una función que se usa para actualizar el estado del formulario.
//El "ArtistForm" es un tipo que define la estructura de los datos del artista.
//El "setForm" lo usamos para llamar al formulario.