import { Textura } from "@/app/components"
import Link from "next/link"

export const SedesHeaderSection = () => {
    return <section id="sedesHeaderSetion">
        <div>
            <Textura select={"azul-naranja"} />
            <h1>LAS SALAS MÁS <br />SOLICITADAS DE <br />BUENOS AIRES</h1>
            <p>Cupos limitados, reserva con tiempo. ¡No te lo pierdas!</p>
            <Link href={'/'} className="button-g">Ver turnos disponibles</Link>
        </div>
        <article></article>
    </section>
}