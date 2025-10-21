/*import type { Artist } from "@/types/artist";
import { useEffect, useState } from "react";*/

/*export default function Artists() {
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
  },[]);

  // El array vacío [] significa que este efecto se ejecuta solo una vez, al montar el componente.
  // Si hubiera variables en el array, el efecto se ejecutaría cada vez que alguna de esas variables cambie.

  return (
    <div>
      {artists.map((artist: Artist) => (
        <>
        <h1>{artist.id}</h1>
        <h1>{artist.name}</h1>
        <h1>Géneros: {artist.genres}</h1>
        <h1>Oyentes: {artist.oyentes}</h1>
        <br></br>
        </>
      ))}
    </div>
  );
}*/

export default function ArtistasIndex () {
  return (
<>
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
  <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
    <a href="./index.html" className="font-semibold">Festify Dashboard</a>
    <nav className="hidden md:flex items-center gap-4 text-sm">
      <a className="underline" href="./admin-artistas.html">Artistas</a>
      <a href="./admin-festivales.html">Festivales/Giras</a>
      <a href="#">Escenarios</a>
      <a href="#">Entradas</a>
      <a href="#">Noticias</a>
      <a href="#">Usuarios</a>
    </nav>
  </div>
</header>
<main className="max-w-7xl mx-auto px-4 py-8">
  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
    <div>
      <h1 className="text-2xl font-extrabold">Artistas</h1>
      <p className="text-sm text-neutral-600">Gestiona artistas: crear, editar, eliminar.</p>
    </div>
    <div className="flex items-center gap-2">
      <input placeholder="Buscar por nombre o género" className="px-3 py-2 rounded-lg border w-64"/>
      <a href="/artistas/nuevoArtista" className="px-3 py-2 rounded-lg bg-neutral-900 text-white text-sm">Nuevo artista</a>
    </div>
  </div>

  <div className="mt-6 overflow-x-auto">
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left border-b">
          <th className="py-2">Artista</th>
          <th>Géneros</th>
          <th>Oyentes</th>
          <th>Países</th>
          <th>Festivales - Giras</th>
          <th>Estado</th>
          <th className="text-right">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b hover:bg-neutral-50">
          <td className="py-2">
            <div className="flex items-center gap-3">
              <img className="w-30 h-30 rounded-md object-cover" src="https://storage.googleapis.com/pr-newsroom-wp/1/2025/01/Bruno_Backyard_IG_Posted_SQUARE-1440x1440.jpeg"/>
              <div>
                <p className="font-medium">Bruno Mars</p>
                <p className="text-xs text-neutral-500">ID: art_001</p>
              </div>
            </div>
          </td>
          <td>Pop/R&B/Funk/Reggae/Rock/hip-hop</td>
          <td>150M</td>
          <td>🇺🇸, 🇪🇺</td>
          <td>3</td>
          <td><span className="px-2 py-1 rounded bg-red-300 text-red-800 text-xs">Inactivo</span></td>
          <td className="text-right">

            <a href="./admin-artista-editar.html" className="px-2 py-1 rounded border">Editar</a>
            <button className="px-2 py-1 rounded border text-red-700">Eliminar</button>
          </td>
        </tr>

        <tr className="border-b hover:bg-neutral-50">
          <td className="py-2">
            <div className="flex items-center gap-3">
              <img className="w-30 h-30 rounded-md object-cover" src="https://www.byrdie.com/thmb/Tz-kP35D4tvUkpwSgZIh9aWkT_0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sabrinacarpenterfauxbob-1ed6cdb5e4e6471b92b09b5806f5cda5.png"/>
              <div>
                <p className="font-medium">Sabrina Carpenter</p>
                <p className="text-xs text-neutral-500">ID: art_002</p>
              </div>
            </div>
          </td>
          <td>Pop - folk-pop, electropop, dance-pop, R&B</td>
          <td>48.9M</td>
          <td>🇺🇸, 🇯🇵, 🇪🇺</td>
          <td>6</td>
          <td><span className="px-2 py-1 rounded bg-green-100 text-green-800 text-xs">Activo</span></td>
          <td className="text-right">

            <a href="./admin-artista-editar.html" className="px-2 py-1 rounded border">Editar</a>
            <button className="px-2 py-1 rounded border text-red-700">Eliminar</button>
          </td>
        </tr>

        <tr className="border-b hover:bg-neutral-50">
          <td className="py-2">
            <div className="flex items-center gap-3">
              <img className="w-30 h-30 rounded-md object-cover" src="https://m.media-amazon.com/images/I/71NpQfpYUiL.jpg"/>
              <div>
                <p className="font-medium">The Weeknd</p>
                <p className="text-xs text-neutral-500">ID: art_003</p>
              </div>
            </div>
          </td>
          <td>R&B/Soul</td>
          <td>115.7M</td>
          <td>🇺🇸, 🇪🇺</td>
          <td>5</td>
          <td><span className="px-2 py-1 rounded bg-red-300 text-red-800 text-xs">Inactivo</span></td>
          <td className="text-right">

            <a href="./admin-artista-editar.html" className="px-2 py-1 rounded border">Editar</a>
            <button className="px-2 py-1 rounded border text-red-700">Eliminar</button>
          </td>
        </tr>

        <tr className="border-b hover:bg-neutral-50">
          <td className="py-2">
            <div className="flex items-center gap-3">
              <img className="w-30 h-30 rounded-md object-cover" src="https://ew.com/thmb/f8ykaNHX65KntowqQfQ2NQPPv8w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Harry-Styles-092225-1-a008f7bcfc4d4722b0d8f437d0edf81b.jpg"/>
              <div>
                <p className="font-medium">Harry Styles</p>
                <p className="text-xs text-neutral-500">ID: art_004</p>
              </div>
            </div>
          </td>
          <td>Pop/Glam Rock/Soft Rock</td>
          <td>57.6M</td>
          <td>🇺🇸, 🇯🇵, 🇪🇺, 🇦🇺, Asia</td>
          <td>2</td>
          <td><span className="px-2 py-1 rounded bg-green-100 text-green-800 text-xs">Activo</span></td>
          <td className="text-right">

            <a href="./admin-artista-editar.html" className="px-2 py-1 rounded border">Editar</a>
            <button className="px-2 py-1 rounded border text-red-700">Eliminar</button>
          </td>
        </tr>

        <tr className="border-b hover:bg-neutral-50">
          <td className="py-2">
            <div className="flex items-center gap-3">
              <img className="w-30 h-30 rounded-md object-cover" src="https://hips.hearstapps.com/hmg-prod/images/dua-lipa-attends-the-chanel-haute-couture-spring-summer-news-photo-1738513564.pjpeg?crop=0.668xw:1.00xh;0.245xw,0&resize=640:*"/>
              <div>
                <p className="font-medium">Dua Lipa</p>
                <p className="text-xs text-neutral-500">ID: art_005</p>
              </div>
            </div>
          </td>
          <td>Dance-pop/Disco/Electropop/R&B</td>
          <td>70M</td>
          <td>🇺🇸, 🇪🇺</td>
          <td>4</td>
          <td><span className="px-2 py-1 rounded bg-red-300 text-red-800 text-xs">Inactivo</span></td>
          <td className="text-right">

            <a href="./admin-artista-editar.html" className="px-2 py-1 rounded border">Editar</a>
            <button className="px-2 py-1 rounded border text-red-700">Eliminar</button>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</main>

  <footer className="border-t mt-auto">
    <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-neutral-600 text-center">
      {new Date().getFullYear()} © Festify. Todos los derechos reservados.
      </div>
  </footer>
</>)
}

// En este ejemplo, useEffect simula la carga de datos estableciendo un estado inicial con un artista ficticio.
// El hook useState se utiliza para agregar estado a componentes funcionales de React.
// Aquí, se usa para almacenar la lista de artistas cargados.
// La función setArtists se utiliza para actualizar el estado de los artistas, lo que provoca una re-renderización del componente con los nuevos datos.
// El componente renderiza una lista de nombres de artistas utilizando el método map para iterar sobre el array de artistas en el estado.
// En resumen, useEffect se encarga de cargar los datos cuando el componente se monta, y useState almacena esos datos para que puedan ser renderizados en la interfaz de usuario.