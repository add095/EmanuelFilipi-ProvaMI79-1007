

const url = "https://dynamic-events-api.onrender.com/api/eventos"

export default async function getEvents(){
    const response = fetch(url)

    if(!response.ok){
        throw new Error("Erro ao buscar eventos")
    }

    const eventos = await res.json()

    return eventos;
}