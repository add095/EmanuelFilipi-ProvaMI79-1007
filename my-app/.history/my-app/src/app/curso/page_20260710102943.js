import Button from "@/component/Button"
import getCard from "@/component/Card"

const button_voltar ={
    link:"/",
    style:"text-sm font-extrabold text-weg-blue hover:text-weg-dark",
    text:"← Voltar para cursos"
}

const button_comprar ={
    link:"#",
    style:"mt-6 inline-flex rounded-full bg-weg-blue px-5 py-3 text-sm font-bold text-white hover:bg-weg-dark",
    text:"Tenho interesse"
}

let CursoDetalhe = getCard();
export default function Detail() {
    return (
        
        <section class="border-b border-slate-200 bg-slate-50">
            <div class="mx-auto max-w-6xl px-4 py-12">
                <Button GenericButton={button_voltar} />

                <div class="mt-8 grid gap-8 md:grid-cols-[1.35fr_0.65fr]">
                    <div>
                        <p class="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-weg-blue">Curso em destaque</p>
                        <h1 class="max-w-3xl text-4xl font-extrabold tracking-tight text-weg-dark md:text-6xl">{CursoDetalhe.nome}</h1>
                        <p class="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                            {CursoDetalhe.descricao}
                        </p>

                        <div class="mt-6 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
                            <span class="rounded-full bg-white px-3 py-1">Categoria: {CursoDetalhe.categoria}</span>
                            <span class="rounded-full bg-white px-3 py-1">{CursoDetalhe.data}</span>
                            <span class="rounded-full bg-white px-3 py-1">{CursoDetalhe.vagas_disponiveis} vagas disponíveis</span>
                        </div>
                    </div>

                    <aside class="rounded-2xl border border-slate-200 bg-white p-6">
                        <h2 class="text-xl font-bold text-weg-dark">Informações do curso</h2>
                        <p class="mt-4 text-sm leading-6 text-slate-600"><strong>Local:</strong> {CursoDetalhe.local}</p>
                        <p class="mt-2 text-sm leading-6 text-slate-600"><strong>Identificador:</strong> {CursoDetalhe.id}</p>
                        <p class="mt-5 text-3xl font-extrabold tracking-tight text-weg-dark">R$ {CursoDetalhe.preco},00</p>
                        <Button GenericButton={button_comprar}/>
                    </aside>
                </div>
            </div>
        </section>
    )
}