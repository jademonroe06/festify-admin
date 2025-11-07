import type { CreateArtistRequest } from "@/types/CreateArtistRequest";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type ArtistForm = {
    name: string;
    genres: string;
    country: string;
    listeners: number | "";
    bio: string;
    status: "Activo" | "Borrador";
};

const defaultForm: ArtistForm = {
    name: "",
    genres: "",
    country: "",
    listeners: "",
    status: "Borrador",
    bio: "",
};

export default function NewArtist() {
    //crea un objeto nuevo
    const [form, setForm] = useState<ArtistForm>(defaultForm);
    const [formIsValid, setFormIsValid] = useState<boolean>;
    const navigate = useNavigate(); // se refiere a la función o método que permite cambiar de pantalla o vista en una aplicación

    
    let buttonStyle = "px-4 py-2 rounded-lg bg-neutral-900 text-white disabled:opacity-60" //permite definir un estilo visual y de interacción para los botones de forma centralizada y reutilizable

    useEffect(()=>{
        setFormIsValid(form.name.length>3)

    },[form]) 
    
    const handleFormChange = (e:any):void => { //para el examen, general y menos lioso
        const { name, value } = e.target;
        setForm({...form,[name]:value})
    };


    //Lo usamos para validar el formulario, y lo mantengo por ahora oculto
    const usseEffect = () => {
        setFormValid(form.name.length >= 3);
    }


    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, name: e.target.value }));
    };

    const handleGenresChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, genres: e.target.value }));
    };

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, country: e.target.value }));
    }; //no va

    const handleListenersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value); // Convertir el valor del input a número
        setForm(prev => ({ ...prev, listeners: value })) //no hace falta pasar el target
    };                                              //porque creamos la variable value

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value;
        if (newStatus === 'Activo' || newStatus === 'Borrador') {
            setForm(prev => ({ ...prev, status: newStatus }));
        } //compara si el estado es o activo o borrador,
    };    //y lo actualiza al nuevo seleccionado

    const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, bio: e.target.value }));
    };

    const handleClear = () => {
        setForm(defaultForm);
    };

    const handleCreateArtistRequest = () => {
        const request: ArtistRequest = { //El request es una petición que se envía a un servidor para obtener datos o ejecutar una acción, como parte de la comunicación entre un cliente (navegador, aplicación) y un servidor
            name: form.name,
            bio: form.bio,
            country: form.country,
            status: form.status,
            genres: form.genres.split(','),
            listeners: Number(form.listeners),
        }
    const = await CreateArtist(request);
    if("id" in response ) {
        const artistResponse = response as Artist;
        alert ("El artista ha sido creado con id: "+artistResponse);
        navigate ("/artist")
    }else{
        const errorResponse = response as ErrorAPIResponse;
        alert("El artista a sido sido creado correctamente: "+errorResponse.detail)
    }
    };

    useEffect(
        setFormValid(form.name.length>=3),[form]
    )

    //Se ejecuta cada vez que el "Form" cambia

    function setFormValid(arg0: boolean): import("react").EffectCallback {
    throw new Error("Función no implementada.");
    }

    //cuando hagamos el submit tenemos que hacer un cambio de string a array
    //porque en la base de datos 'genres' no es un string

    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
            <Link
                to="/artistas"
                className="text-sm px-3 py-2 rounded-lg border"
            >
                Volver
            </Link>
 
            <div className="max-w-5xl mx-auto h-16 px-4 flex items-center justify-center">
                <h1 className="font-semibold">Ingrese los datos del nuevo artista</h1>
            </div>
 
            <form
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm"
                onSubmit={handleSubmit}
                onReset={handleClear}
                onClick={handleSubmit}
            >
                <div className="sm:col-span-2">
                    <label className="block text-neutral-700 mb-1" htmlFor="name">
                        Nombre del artista <span className="text-red-600">*</span>
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full px-3 py-2 rounded-lg border"
                        placeholder="Nombre del artista"
                        value={form.name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
 
                <div>
                    <label className="block text-neutral-700 mb-1" htmlFor="genres">
                        Géneros (ingreselo separados por coma)
                    </label>
                    <input
                        id="genres"
                        name="genres"
                        type="text"
                        className="w-full px-3 py-2 rounded-lg border"
                        placeholder="Indie, Electrónica"
                        value={form.genres}
                        onChange={handleGenresChange}
                    />
                </div>
 
                <div>
                    <label className="block text-neutral-700 mb-1" htmlFor="country">
                        País
                    </label>
                    <select
                        id="country"
                        name="country"
                        className="w-full px-3 py-2 rounded-lg border"
                        value={form.country}
                        onChange={handleCountryChange}
                    >
                        <option value="ES">ES</option>
                        <option value="FR">FR</option>
                        <option value="PT">PT</option>
                        <option value="UK">UK</option>
                    </select>
                </div>
 
                <div>
                    <label className="block text-neutral-700 mb-1" htmlFor="listeners">
                        Oyentes mensuales
                    </label>
                    <input
                        id="listeners"
                        name="listeners"
                        type="text"
                        inputMode="numeric"
                        pattern="\d*"
                        className="w-full px-3 py-2 rounded-lg border"
                        placeholder="1200000"
                        value={form.listeners}
                        onChange={handleListenersChange}
                    />
                    <p className="text-neutral-500 mt-1">
                        Si no tienes la información de los oyentes, dejalo en blanco.
                    </p>
                </div>
 
                <div>
                    <label className="block text-neutral-700 mb-1" htmlFor="status">
                        Estado
                    </label>
                    <select
                        id="status"
                        name="status"
                        className="w-full px-3 py-2 rounded-lg border"
                        value={form.status}
                        onChange={handleStatusChange}
                    >
                        <option value="Activo">Activo</option>
                        <option value="Borrador">Borrador</option>
                    </select>
                </div>
 
                <div className="sm:col-span-2">
                    <label className="block text-neutral-700 mb-1" htmlFor="bio">
                        Biografía del artista
                    </label>
                    <textarea
                        id="bio"
                        name="bio"
                        rows={5}
                        className="w-full px-3 py-2 rounded-lg border"
                        placeholder="Resumen del artista, estilo, trayectoria…"
                        value={form.bio}
                        onChange={handleBioChange}
                    />
                </div>
 
                <div className="sm:col-span-2 flex items-center gap-3 mt-2">
                    <button
                        type="submit"
                        className={buttonStyle}
                        disabled={false}
                    >
                        {"Guardar datos del artista"}
                    </button>
 
                    <button type="reset" className="px-4 py-2 rounded-lg border" disabled={false}>
                        Limpiar
                    </button>
 
                </div>
            </form>
 
        </main>
    )
}