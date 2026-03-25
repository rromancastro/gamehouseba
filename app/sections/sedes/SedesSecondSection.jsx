import Image from "next/image"
import Link from "next/link"
import { MdOutlineRemoveRedEye } from "react-icons/md"

export const SedesSecondSection = () => {
    return <section id="sedesSecondSetion">
        <h2>ELEGÍ TU SEDE <span>MÁS CERCANA</span></h2>
        <div>
            <article>
                <Image src="/sedes/card1.png" alt="Sede1" width={600} height={800} />
                <h3>SEDE <span>RECOLETA</span></h3>
                <Link href={'/'} className="button-g">Ver salas<MdOutlineRemoveRedEye size={24} /></Link>
            </article>
            <article>
                <Image src="/sedes/card2.png" alt="Sede2" width={600} height={800} />
                <h3>PRÓXI <br />MAME <br />NTE <span>21.06.26</span></h3>
            </article>
        </div>
    </section>
}