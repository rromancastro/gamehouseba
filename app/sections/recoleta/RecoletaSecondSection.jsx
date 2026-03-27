"use client"
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const RecoletaSecondSection = () => {

    const {inView, ref} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const [animStep, setAnimStep] = useState(0);

    useEffect(() => {
        if (inView) {
            if (animStep === 7) return;

            const interval = setInterval(() => {
                setAnimStep(prev => prev + 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [animStep, inView]);

    return <section ref={ref} id="recoletaSecondSetion">
        <article style={{width: animStep < 1 ? '211px' : '435px'}}>
            <h3 style={{opacity: animStep < 2 ? '0' : '1'}}>varias habitaciones <br /> por sala </h3>
            <p style={{opacity: animStep < 2 ? '0' : '1'}}>Justo cuando creías que estabas por <br /> escapar, chan... ¡Otro nuevo desafío!</p>
        </article>
        <article style={{width: animStep < 3 ? '211px' : '323px', height: animStep < 3 ? '211px' : '272px'}}>
            <h3 style={{opacity: animStep < 4 ? '0' : '1'}}>Salas para todos los niveles y edades</h3>
            <p style={{opacity: animStep < 4 ? '0' : '1'}}>Ideal para amigos, familias, <br /> principiantes <br /> y entusiastas.</p>
        </article>
        <article style={{width: animStep < 5 ? '211px' : '323px'}}>
            <h3 style={{opacity: animStep < 6 ? '0' : '1'}}>Pistas ilimitadas</h3>
            <p style={{opacity: animStep < 6 ? '0' : '1'}}>No hay límites, no hay <br /> penalizaciones, y no juzgamos. <br /> ¡Pedí todas las pistas que quieras <br /> para escapar!</p>
        </article>
    </section>
}