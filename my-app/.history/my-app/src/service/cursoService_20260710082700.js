const url = "https://dynamic-events-api.onrender.com/api/eventos"

export default async function getEvents(){
    let response = await fetch(url)

    let eventos = response.json()

    return eventos;
}