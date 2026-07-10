import Hero from "@/component/Hero";

const HeroData = {
    preTitle: "Página institucional estática",
    title: "Sobre a WEG",
    description: "A WEG é uma empresa global de tecnologia que desenvolve soluções para motores elétricos, automação, energia, tintas industriais e sistemas aplicados a diferentes setores produtivos.",
    button_explore: {
        link: "#cursos",
        style: "rounded-full bg-weg-blue px-5 py-3 text-sm font-bold text-white hover:bg-weg-dark",
        text: "Explorar cursos",
        visible: false
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