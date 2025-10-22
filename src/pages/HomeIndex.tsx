export default function HomeIndex() {
    return (
        <>
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
                <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
                    <a href="./organizador-dashboard.html" className="font-semibold">Festify Dashboard</a>
                    <nav className="hidden md:flex items-center gap-4 text-sm">
                        <a href="/artistas">Artistas</a>
                        <a href="/festivales">Festivales</a>
                        <a href="/escenarios">Escenarios</a>
                        <a href="/entradas">Entradas</a>
                        <a href="/noticias">Noticias</a>
                        <a href="/usuarios">Usuarios</a>
                    </nav>
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <br></br>
                <h1 className="text-4xl font-extrabold mb-4">Festify</h1>
                <p className="text-neutral-600 mb-8 max-w-xl">La plataforma integral de gestión de festivales y giras musicales</p>
            </main>

            <footer className="border-t mt-auto">
                <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-neutral-600 text-center">
                    {new Date().getFullYear()} © Festify. Todos los derechos reservados.
                </div>
            </footer>
        </>)
}