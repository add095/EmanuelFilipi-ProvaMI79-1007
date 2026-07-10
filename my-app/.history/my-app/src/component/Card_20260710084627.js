import Button from "./Button";

const button_details = {
    link:"/curso",
    style:"mt-5 inline-flex text-sm font-extrabold text-weg-blue hover:text-weg-dark",
    text:"Ver detalhes"
}

export default function Card({ Card }) {
    let preco;
    let style;
    
    if(Card.preco <= 0){
        preco = "Grátis"
    }else{
        preco = `R$${Card.preco},00 `
    }

    if(Card.vagas > 10){
        
    }
    

    return (
        <article class="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {/* <img src="{Card.imagem}" alt="Imagem placeholder do curso Formação em Acionamentos WEG CFW" class="h-44 w-full object-cover"> */}
                <div class="p-5">
                    <span class="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-emerald-700">{Card.categoria}</span>
                    <h3 class="mt-4 text-xl font-bold leading-tight text-weg-dark">{Card.nome}</h3>
                    <p class="mt-3 text-sm leading-6 text-slate-600">{Card.descricao}</p>

                    <div class="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
                        <span class="rounded-full bg-slate-100 px-3 py-1">{preco}</span>
                        <span class="rounded-full bg-slate-100 px-3 py-1">{Card.data}</span>
                        <span class="">{Card.vagas_disponiveis} vagas</span>
                    </div>

                    <p class="mt-4 text-sm text-slate-500">{Card.local}</p>
                    <Button GenericButton={button_details}></Button>
                </div>
        </article>
    );
}