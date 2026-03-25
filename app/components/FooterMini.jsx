import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { MdMailOutline } from "react-icons/md"
import { PiMapPinFill } from "react-icons/pi"

export const FooterMini = () => {
    return <footer id="footerMini">
        <article>
            <h3>DONDE ESTAMOS</h3>
            <p>
                <Link href={'/'}>Recoleta <PiMapPinFill /></Link>
                <Link href={'/'}>Palermo <PiMapPinFill /></Link>
            </p>
        </article>

        <article>
            <div>
                <h3>CONTACTO</h3>
                <Link href={'/'}>
                    <MdMailOutline />
                </Link>
                <Link href={'/'}>
                    <FaWhatsapp />
                </Link>
                <Link href={'/'}>
                    <FaInstagram />
                </Link>
            </div>
            <Link id="consultaButton" href={'/'} className="button-g">Tengo una consulta</Link>
        </article>

        <article>
            <p>2026 GAME HOUSE SA © </p>

            <p>Política de Privacidad</p>

            <p>Diseñado por Francisco Castagnola y Desarrollado por Roman Castro</p>
            <Image src='/footer/fourthCardBackground.png' alt="background" width={2000} height={2000} />
        </article>
    </footer>
}