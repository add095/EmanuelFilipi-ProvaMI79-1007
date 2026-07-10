


import Button from "./Button";


export default function Hero({ HeroData }) {
     const btn1 = HeroData.button_explore.visible;
    return (
       

        <section class="border-b border-slate-200 bg-slate-50">
            <div class="mx-auto max-w-6xl px-4 py-16">
                <div class="max-w-3xl">
                    <p class="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-weg-blue">{HeroData.preTitle}</p>
                    <h1 class="text-4xl font-extrabold tracking-tight text-weg-dark md:text-6xl">
                        {HeroData.title}
                    </h1>
                    <p class="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                        {HeroData.description}
                    </p>
                    <div class="mt-8 flex flex-wrap gap-3">
                        <Button GenericButton={HeroData.button_explore}></Button>
                        <Button GenericButton={HeroData.button_learning_about_WEG}></Button>
                    </div>
                </div>
            </div>
        </section>

    );
}