import Image from "next/image"
import Link from "next/link"

export const HomeHeader = () => {
    return <section id="homeHeader">
        <h1>
            ESCAPÁ DE<br />
            LA RUTINA
        </h1>
        <Image id="homeHeaderImg" src="/home/headerText.png" alt="header" width={2000} height={2000} />
        <div>
            <p>Viví los 60 minutos <br /> más intensos de <br /> Buenos Aires.</p>
            <Link className="button-g" href={'/'}>Ver turnos disponibles</Link>
            <p>*Cupos limitados, reserva con tiempo.</p>
        </div>
    </section>
}