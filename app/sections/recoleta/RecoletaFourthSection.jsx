import Link from "next/link"
import { FaUsers } from "react-icons/fa"
import { TbClock } from "react-icons/tb"
import { IoIosStarOutline, IoIosStar , IoIosStarHalf} from "react-icons/io";

export const RecoletaFourthSection = () => {
    return <section id="recoletaFourthSetion">
        <h2>una sala <span>un desafío</span></h2>
        <div id="recoletaFourthSetionCardsContainer">
            <article>
                <div>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarHalf />
                    <IoIosStarOutline />
                </div>
                <img src="/home/fourthSection/card.png " alt="" />
                <h3>operación <br /> medellín</h3>
                <p>
                    <span>Hasta 8 <FaUsers size={24} /></span>
                    <span>60 min <TbClock size={24} /></span>
                    <span>Dificultad <b>8/10</b></span>
                </p>
                <Link href={'/'}>Ver sala</Link>
            </article>
            
            <article>
                <div>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarHalf />
                    <IoIosStarOutline />
                </div>
                <img src="/home/fourthSection/card.png " alt="" />
                <h3>operación <br /> medellín</h3>
                <p>
                    <span>Hasta 8 <FaUsers size={24} /></span>
                    <span>60 min <TbClock size={24} /></span>
                    <span>Dificultad <b>8/10</b></span>
                </p>
                <Link href={'/'}>Ver sala</Link>
            </article>
        </div>
    </section>
}