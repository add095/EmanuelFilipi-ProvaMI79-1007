export default function CardInfo({ CardInfo }) {
    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold tracking-tight text-weg-dark">{CardInfo.title}</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
                {CardInfo.descriptionI}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
                {CardInfo.descriptionII}
            </p>
        </article>
    )
}