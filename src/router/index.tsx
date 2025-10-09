import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "@/pages/PageNotFound";
import HomeIndex from "@/pages/HomeIndex";
import ArtistasIndex from "@/pages/ArtistasIndex";
import FestivalesIndex from "@/pages/FestivalesIndex";

export const router = createBrowserRouter([
  { path: "/", element: <HomeIndex /> },
  { path: "/artistas", element: <ArtistasIndex /> },
  { path: "/festivales", element: <FestivalesIndex /> },
  { path: "*", element: <PageNotFound /> }
]);
