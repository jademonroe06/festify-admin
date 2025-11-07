//Paso 1. Iniciamos definiendo las rutas
import {createBrowserRouter} from "react-router-dom";
import Home from "@/pages/Home";
import PageNotFound from "@/pages/PageNotFound";
import ListArtists from "@/pages/ListArtist.tsx";
import NewArtist from "@/pages/NewArtist.tsx";
import EditArtist from "@/pages/EditArtist.tsx";

export const router = createBrowserRouter([

    {path: "/", element: <Home />},
    {path: "/artists", element: <ListArtists />},
    {path: "/new-artist", element: <NewArtist />},
    {path: "/edit-artist/:id", element: <EditArtist />},
    {path: "*", element: <PageNotFound />},
]);


//El "useEffect" se usa para cargar los datos del artista cuando el componente se monta y se ejecuta con un ([]). "Escucha cosas"
//Si solo usamos el "useEffect() sin el array vacío, se ejecutará cada vez que el componente se renderice."
//El "useState" se usa para manejar el estado del formulario de edición de artista.
//El "useParams" se usa para obtener los parámetros de la URL, como el ID del artista que se va a editar.
//El "formData" es un objeto que contiene los datos del artista que se van a editar.
//El "setFormData" es una función que se usa para actualizar el estado del formulario.
//El "ArtistForm" es un tipo que define la estructura de los datos del artista.
//El "setForm" lo usamos para llamar al formulario.