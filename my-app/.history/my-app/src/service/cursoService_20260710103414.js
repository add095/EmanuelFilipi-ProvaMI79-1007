

export default async function getEvents(url){
    let response = await fetch(url)

    let eventos = response.json()

    return eventos;
}