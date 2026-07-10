const url = "https://dynamic-events-api.onrender.com/api/eventos"

export default async function getEvents(){
    const response = fetch(url)

    const eventos = await res.json()

    return eventos;
}