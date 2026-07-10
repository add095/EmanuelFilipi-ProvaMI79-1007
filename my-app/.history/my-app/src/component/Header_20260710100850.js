import Image from "next/image"
import Button from "./Button"
import Link from "next/link"



export default function Header({cor}) {
    let styleI = cor.styleI;
    let styleII = cor.styleII;
   
    console.log(cor.style)

    let button_cursos = {
        link: "/",
        style: { styleI },
        text: "Cursos"
    }

    let button_about = {
        link: "/about",
        style: {styleII},
        text: "Sobre a WEG"
    }

    return (
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
                <Link href="/" className="flex items-center gap-3" aria-label="Página inicial WEG Academy">
                    <Image src="/logo-weg.png" width={100} height={100} alt="Logo WEG" className="h-8 w-auto" />
                    <span className="text-sm font-bold text-weg-dark">Academy</span>
                </Link>

                <nav className="flex items-center gap-2 text-sm font-semibold text-slate-600" aria-label="Navegação principal">
                    <Button GenericButton={button_cursos}></Button>
                    <Button GenericButton={button_about}></Button>
                </nav>
            </div>
        </header>
    )
}