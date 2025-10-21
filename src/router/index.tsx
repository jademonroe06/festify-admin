import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "@/pages/PageNotFound";
import HomeIndex from "@/pages/HomeIndex";
import ArtistasIndex from "@/pages/ArtistasIndex";
import FestivalesIndex from "@/pages/FestivalesIndex";
import NuevoArtistaIndex from "@/pages/NuevoArtista";

export const router = createBrowserRouter([
  { path: "/", element: <HomeIndex /> },
  { path: "/artistas", element: <ArtistasIndex /> },
  { path: "/artistas/nuevoArtista", element: <NuevoArtistaIndex /> },
  { path: "/festivales", element: <FestivalesIndex /> },
  { path: "*", element: <PageNotFound /> }
]);
