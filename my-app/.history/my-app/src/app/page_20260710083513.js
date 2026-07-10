import Card from "@/component/Card";
import Hero from "@/component/Hero";
import Image from "next/image";
import getEvents from "@/service/cursoService";
const HeroData = {
  preTitle: "Plataforma de cursos técnicos",
  title: "Aprendizagem para quem transforma tecnologia em indústria",
  description: "A WEG Academy reúne cursos e formações voltados para automação, acionamentos, eficiência energética, eletricidade industrial e soluções aplicadas ao mundo do trabalho.",
  button_explore: {
    link: "#cursos",
    style: "rounded-full bg-weg-blue px-5 py-3 text-sm font-bold text-white hover:bg-weg-dark",
    text: "Explorar cursos",
    visible: true
  },
  button_learning_about_WEG: {
    link: "/about",
    style: "rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-weg-dark hover:bg-slate-50",
    text: "Conhecer a WEG",
    visible: true
  }
}


export default async function Home() {
  let cards = await getEvents()
  console.log(cards)
  return (
    <div>
      <Hero HeroData={HeroData}></Hero>
      <section class="mx-auto max-w-6xl px-4 py-14" id="cursos">
        <div class="mb-8 max-w-2xl">
          <p class="mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-weg-blue">Catálogo</p>
          <h2 class="text-3xl font-extrabold tracking-tight text-weg-dark">Cursos disponíveis</h2>
          <p class="mt-3 text-sm leading-6 text-slate-600">
            Os cards abaixo estão estáticos e mockados na base HTML. Na versão em Next.js,
            eles deverão ser renderizados a partir da API/JSON, exibindo apenas a categoria <strong>Cursos</strong>.
          </p>
        </div>
        <div >
          {
            cards.map((card) => (
              <Card Card={card}></Card>
            ))
          }
        </div>
      </section>
    </div>
  )
}
