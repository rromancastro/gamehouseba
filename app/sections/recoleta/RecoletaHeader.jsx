"use client";
import { Star } from "@/app/components"
import Image from "next/image";
import Link from "next/link"
import { useEffect, useState } from "react";
import { MdStarRate } from "react-icons/md"

export const RecoletaHeader = () => {

    const [animStep, setAnimStep] = useState(1);
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimStep(prev => (prev < 2 ? prev + 1 : 1));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <section id="recoletaHeader">
        <p><MdStarRate />4.8 (3.200 google reviews)</p>
        <h1>RECOLETA</h1>
        <h2>nuestra sede <br /> más antigua</h2>
        <p>Las mejores salas de Buenos Aires</p>
        <Link href={'/'} className="button-g">Ver turnos disponibles</Link>

        <Star width={'4%'} top={'30%'} right={'60%'} opacity={animStep === 1 ? '1' : 0} />
        <Star width={'5%'} top={'80%'} right={'40%'} opacity={animStep === 2 ? '1' : 0} />

        <div></div>
        <Image src="/home/header.png" alt="header" width={1000} height={500} />
    </section>
}