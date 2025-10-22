export default function FestivalesIndex() {
    return (
        <>
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
                <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
                    <a href="/" className="font-semibold">Festify Dashboard</a>
                    <nav className="hidden md:flex items-center gap-4 text-sm">
                        <a href="/artistas">Artistas</a>
                        <a className="underline" href="/festivales">Giras/Festivales/Conciertos</a>
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
                        <h1 className="text-2xl font-extrabold">Festivales y/o Giras</h1>
                        <p className="text-sm text-neutral-600">Crea y gestiona eventos.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input placeholder="Buscar por nombre/ciudad" className="px-3 py-2 rounded-lg border w-64" />
                        <a href="./admin-festival-nuevo.html" className="px-3 py-2 rounded-lg bg-neutral-900 text-white text-sm">Nuev@ Gira/Festival/Concierto</a>
                    </div>
                </div>

                <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead><tr className="text-left border-b"><th className="py-2">Gira/Festival/Concierto</th><th>Fechas</th><th>Ciudad</th><th>Precio</th><th>Estado</th><th className="text-right">Acciones</th></tr></thead>
                        <tbody>
                            <tr className="border-b hover:bg-neutral-50">
                                <td className="py-2 font-medium">Bruno Mars</td>
                                <td>30-31 Dic 2025</td>
                                <td>Las Vegas</td>
                                <td>Desde $600 - $700 hasta $3,000</td>
                                <td><span className="px-2 py-1 rounded bg-green-100 text-green-800 text-xs">Publicado</span></td>
                                <td className="text-right">
                                    <a href="./admin-festival-editar.html" className="px-2 py-1 rounded border">Editar</a>
                                    <button className="px-2 py-1 rounded border text-red-700">Eliminar</button>
                                </td>
                            </tr>

                            <tr className="border-b hover:bg-neutral-50">
                                <td className="py-2 font-medium">Short n' Sweet</td>
                                <td>23-24 Oct 2025</td>
                                <td>Pittsburgh</td>
                                <td>Desde $130 hasta $400</td>
                                <td><span className="px-2 py-1 rounded bg-green-100 text-green-800 text-xs">Publicado</span></td>
                                <td className="text-right">
                                    <a href="./admin-festival-editar.html" className="px-2 py-1 rounded border">Editar</a>
                                    <button className="px-2 py-1 rounded border text-red-700">Eliminar</button>
                                </td>
                            </tr>

                            <tr className="border-b hover:bg-neutral-50">
                                <td className="py-2 font-medium">The Weeknd</td>
                                <td>28-30 Agosto 2026</td>
                                <td>Madrid | Londres</td>
                                <td>Desde 126€/$145 hasta 151€/$670</td>
                                <td><span className="px-2 py-1 rounded bg-green-100 text-green-800 text-xs">Publicado</span></td>
                                <td className="text-right">
                                    <a href="./admin-festival-editar.html" className="px-2 py-1 rounded border">Editar</a>
                                    <button className="px-2 py-1 rounded border text-red-700">Eliminar</button>
                                </td>
                            </tr>

                            <tr className="border-b hover:bg-neutral-50">
                                <td className="py-2 font-medium">SunWave Fest</td>
                                <td>12-14 Jul 2025</td>
                                <td>Barcelona</td>
                                <td>Desde 89€</td>
                                <td><span className="px-2 py-1 rounded bg-green-100 text-green-800 text-xs">Publicado</span></td>
                                <td className="text-right">
                                    <a href="./admin-festival-editar.html" className="px-2 py-1 rounded border">Editar</a>
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
