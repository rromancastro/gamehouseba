import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
    return <nav>
        <Image src="/logo.png" alt="Logo" width={119} height={44} />

        <div>
            <Link href={'/sedes'}>Salas</Link>
            <Link href={'/'}>Empresas</Link>
            <Link href={'/'}>Cumpleaños</Link>
        </div>

        <Link className="button-g" href={'/'}>Ver turnos</Link>
    </nav>
}