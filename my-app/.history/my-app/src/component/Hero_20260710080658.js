
/* 
    Plataforma de cursos técnicos
    Aprendizagem para quem transforma tecnologia em indústria
 A WEG Academy reúne cursos e formações voltados para automação, acionamentos,
                        eficiência energética, eletricidade industrial e soluções aplicadas ao mundo do trabalho.
    */


export default function Hero({HeroData}) {
    return (

        <section class="border-b border-slate-200 bg-slate-50">
            <div class="mx-auto max-w-6xl px-4 py-16">
                <div class="max-w-3xl">
                    <p class="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-weg-blue">{HeroData.preTitle}</p>
                    <h1 class="text-4xl font-extrabold tracking-tight text-weg-dark md:text-6xl">
                       {HeroData.title} 
                    </h1>
                    <p class="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                       
                    </p>
                    <div class="mt-8 flex flex-wrap gap-3">
                        <a href="#cursos" class="rounded-full bg-weg-blue px-5 py-3 text-sm font-bold text-white hover:bg-weg-dark">Explorar cursos</a>
                        <a href="./sobre.html" class="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-weg-dark hover:bg-slate-50">Conhecer a WEG</a>
                    </div>
                </div>
            </div>
        </section>

    );
}