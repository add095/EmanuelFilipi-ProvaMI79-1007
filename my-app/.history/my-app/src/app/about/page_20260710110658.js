import Hero from "@/component/Hero";
import Image from "next/image";
import CardInfo from "@/component/CardInfo";
import Header from "@/component/Header";
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
        visible: false
    }
}

let cor = {
    styleI: "rounded-full px-3 py-2 hover:bg-slate-100",
    styleII: "rounded-full bg-weg-light px-3 py-2 text-weg-dark"
}

export default function About() {
    let cardsInfo = {
        cardInfoI: {
            title: "Tecnologia aplicada à indústria",
            descriptionI: "A WEG atua no desenvolvimento de soluções que contribuem para produtividade, eficiência energética, automação e modernização de processos industriais.",
            descriptionII: "Suas áreas de atuação conectam engenharia, inovação, fabricação e serviços técnicos, criando um ambiente em que conhecimento e prática caminham juntos."
        },
        cardInfoII: {
            title: "Formação e desenvolvimento",
            descriptionI: "A WEG Academy representa uma vitrine de aprendizagem voltada à qualificação técnica, ao aperfeiçoamento profissional e à atualização de pessoas que atuam ou desejam atuar em áreas relacionadas à tecnologia industrial.",
            descriptionII: "Na avaliação, esta página deverá ser convertida em uma rota estática da aplicação Next.js."
        }
    }

    console.log(cardsInfo)
    return (
        <div>
            <Header Cor={cor} />


            <div className="mx-auto grid  gap-8 px-4 py-16 md:grid-cols-[1fr1fr] md:items-center">
                <Hero HeroData={HeroData}></Hero>
                <div className="overflow-hidden flex items-cente max-w-6xl rounded-2xl border border-slate-200 bg-white">
                    <Image src="/placeholder-curso.jpg" width={1080} height={720} alt="Ambiente industrial com operador trabalhando em máquina" className="h-72 w-full object-cover" />
                </div>
            </div>

            <div className="mx-auto grid max-w-6xl gap-5 px-4 py-14 md:grid-cols-2">
                <CardInfo CardInfo={cardsInfo.cardInfoI} />
                <CardInfo CardInfo={cardsInfo.cardInfoII} />
            </div>
        </div>

    )
}