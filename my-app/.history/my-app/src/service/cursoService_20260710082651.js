const url = "https://dynamic-events-api.onrender.com/api/eventos"

export default async function getEvents(){
    let response = fetch(url)

    let eventos = await response.json()

    return eventos;
}