import Image from "next/image";
import Link from "next/link";
import { PiMapPinFill } from "react-icons/pi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

export const Footer = () => {
    return <footer>
        <article>
            <h3>DONDE ESTAMOS</h3>
            <p>Selecciona el lugar para ver la ubicación.</p>
            <p>
                <Link href={'/'}>Recoleta <PiMapPinFill /></Link>
                <Link href={'/'}>Palermo <PiMapPinFill /></Link>
            </p>
        </article>

        <article>
            <Image src='/logo-colorido.png' alt="Logo" width={486} height={181} />
        </article>

        <article>
            <div>
                <h3>REDES</h3>

                <div>
                    <FaInstagram />
                    <FaInstagram />
                </div>
            </div>

            <div>
                <h3>CONTACTO</h3>
                <div>
                    <MdMailOutline />
                    <FaWhatsapp />
                </div>
                <p>hola@gamehousba.com <br />
                +54 9 11 6499-0581</p>
            </div>

            <Link className="button-g" href={'/'}>Tengo una consulta</Link>
        </article>

        <article>
            <p>2026 GAME HOUSE SA © </p>

            <p>Política de Privacidad</p>

            <p>Diseñado por Francisco Castagnola y Desarrollado por Roman Castro</p>
            <Image src='/footer/fourthCardBackground.png' alt="background" width={2000} height={2000} />
        </article>
    </footer>
}