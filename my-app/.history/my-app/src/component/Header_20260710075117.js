import Image from "next/image"

const button_cursos = {
    link:"/",
    style:"rounded-full bg-weg-light px-3 py-2 text-weg-dark",
    text:"Cursos"
}

const button_about = {
    link:"/about"
}

export default function Header() {
    return (
        <header class="border-b border-slate-200 bg-white">
            <div class="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
                <a href="./index.html" class="flex items-center gap-3" aria-label="Página inicial WEG Academy">
                    <Image src="./assets/img/logo-weg.png" width={100} height={100} alt="Logo WEG" class="h-8 w-auto"></Image>
                        <span class="text-sm font-bold text-weg-dark">Academy</span>
                </a>

                <nav class="flex items-center gap-2 text-sm font-semibold text-slate-600" aria-label="Navegação principal">
                    <a href="./index.html" class="rounded-full bg-weg-light px-3 py-2 text-weg-dark">Cursos</a>
                    <a href="./sobre.html" class="rounded-full px-3 py-2 hover:bg-slate-100">Sobre a WEG</a>
                </nav>
            </div>
        </header>
    )
}