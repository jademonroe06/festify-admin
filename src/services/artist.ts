const artistAPIBaseURL:string ="http://localhost:8080";

export function listArtist (): Promise{ //Devolveremos una lista..
    const response = await fetch ${artistAPIBaseURL}'/artist',
    {
        method: "GET"
    });

        if(error) {
          return <>
            <Header/>
            <main className="max-w-7xl mx-auto px-4 py-8">
              ERROR,
            </main>
          </>
        }
}