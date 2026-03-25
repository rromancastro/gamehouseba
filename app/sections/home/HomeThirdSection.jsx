"use client"
import Image from "next/image"
import { useState } from "react";

export const HomeThirdSection = () => {

    const [hover, setHover] = useState(false);

    return <section onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} id="homeThirdSection">
        <div>
            <Image style={{transform: hover ? 'scale(1.1)' : 'scale(1)'}} src="/home/thirdSection/bg.png" alt="thirdSection bg" width={1384} height={526} />
            <Image style={{top: hover ? '-50vh' : null}} src="/home/thirdSection/newyork.png" alt="thirdSection newyork" width={520} height={1000} />
            <h3>NUEVA SEDE</h3>
            <h3>NUEVOS DESAFÍOS</h3>
            <h2>PRÓXIMAMENTE</h2>
            <h3>21.06.26</h3>
        </div>
    </section>
}