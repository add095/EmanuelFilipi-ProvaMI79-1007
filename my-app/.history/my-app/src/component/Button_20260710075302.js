import Link from "next/link";



export default function Button({GenericButton}){
    return(
        <Link href={GenericButton.link} className={GenericButton.style}>{GenericButton.text}</Link>
    );
}