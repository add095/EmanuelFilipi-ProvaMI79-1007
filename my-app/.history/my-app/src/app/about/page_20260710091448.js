import Hero from "@/component/Hero";

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


export default function About() {
    return (
        <div>
            <Hero></Hero>
            <Image src="/placeholder-curso.jpg" width={100} height={100} alt="Ambiente industrial com operador trabalhando em máquina" className="h-72 w-full object-cover" />
        </div>

    )
}