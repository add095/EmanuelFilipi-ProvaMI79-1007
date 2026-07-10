import Image from "next/image";

const HeroData = {
  preTitle:"Plataforma de cursos técnicos",
  title:"Aprendizagem para quem transforma tecnologia em indústria",
  description:"A WEG Academy reúne cursos e formações voltados para automação, acionamentos, eficiência energética, eletricidade industrial e soluções aplicadas ao mundo do trabalho.",
  button_explore: {
    link:"#cursos",
    style:"rounded-full bg-weg-blue px-5 py-3 text-sm font-bold text-white hover:bg-weg-dark",
    text:"Explorar cursos"
  },
  button_learning_about_WEG:{
    link:"/about",
    style:"rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-weg-dark hover:bg-slate-50",
    text:"Conhecer a WEG"
  }
}

export default function Home() {
  return (
   <div>
    <Hero
   </div>
  )
}
