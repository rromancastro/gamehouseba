"use client";
import { SixthSectionCard } from "@/app/components";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HomeSixthSection = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const textOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

    const card1right = useTransform(scrollYProgress, [0.2, 0.3], ['50%', '10%']);
    const card1Top = useTransform(scrollYProgress, [0.2, 0.3], ['50%', '20%']);
    const card1Width = useTransform(scrollYProgress, [0.3, 0.4], ['160px', '360px']);
    const card1Height = useTransform(scrollYProgress, [0.3, 0.4], ['160px', '182px']);
    const card1Opacity = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);

    const card2Left = useTransform(scrollYProgress, [0.2, 0.3], ['50%', '10%']);
    const card2Top = useTransform(scrollYProgress, [0.2, 0.3], ['50%', '20%']);
    const card2Width = useTransform(scrollYProgress, [0.3, 0.4], ['160px', '360px']);
    const card2Height = useTransform(scrollYProgress, [0.3, 0.4], ['160px', '167px']);
    const card2Opacity = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);

    return (
        <section ref={ref} id="homeSixthSection">
            <div id="homeSixthSectionContent">
                <motion.div style={{opacity: textOpacity}} id="homeSixthSectionContentText">
                    <h2>EL PUBLICO <span>Habló</span></h2>
                    <p>Miles de equipos ya lo jugaron y esta es su opinión.</p>
                </motion.div>
                    <SixthSectionCard
                        position="absolute"
                        bgColor={'#FFB9F4'}
                        bRadius='0'
                        right={card1right}
                        top={card1Top}
                        width={card1Width}
                        height={card1Height}
                        opacity={card1Opacity}
                        name={"Andrea Utard"}
                        imageUrl={"/home/sixthSection/card1.png"}
                        userDesc={"Local Guide - 37 opiniones - 57 fotos"}
                        opinion={'Festejamos el cumple de nuestra hija (11 años) y todos la pasaron súper bien! Optamos por la versión Smart (nosotros llevamos la comida fría y bebida) y tanto la coordinación previa con Vicky como el durante, impecable!'} />
                    <SixthSectionCard
                        left={card2Left}
                        top={card2Top}
                        width={card2Width}
                        height={card2Height}
                        opacity={card2Opacity}
                        position="absolute"
                        bgColor={'#00E1A6'}
                        bRadius='16px'
                        name={"Paula Solinis Schonfeld"}
                        imageUrl={"/home/sixthSection/card2.png"}
                        userDesc={"7 opiniones - 5 fotos"}
                        opinion={'Festeje el cumple de mi hija de 11 años y la pasmos genial!! Recomiendo mucho para eventos y sino para ir a jugar a las salas tb! Stranger y parana airlines fueron las elegidas! Muy buenas! 10/10'} />
                    <SixthSectionCard
                        position="absolute"
                        bgColor={'#0092FA'}
                        bRadius='100px'
                        name={"Nicolas Ceppi"}
                        imageUrl={"/home/sixthSection/card3.png"}
                        userDesc={"3 opiniones"}
                        opinion={'Muy buenos los juegos y la atención'} />
                    <SixthSectionCard
                        position="absolute"
                        bgColor={'#F8773D'}
                        bRadius='100px'
                        name={"Nicolas Ceppi"}
                        imageUrl={"/home/sixthSection/card4.png"}
                        userDesc={"3 opiniones"}
                        opinion={'Muy buenos los juegos y la atención'} />
                    <SixthSectionCard
                        position="absolute"
                        bgColor={'#C6EF4C'}
                        bRadius='0'
                        name={"María Luisa Bo"}
                        imageUrl={"/home/sixthSection/card5.png"}
                        userDesc={"3 opiniones"}
                        opinion={'Excelente los temas y toda la presentacion! Todo está excelentemente mantenido, el personal tiene mucha onda y muy buena disposición!!!! Sin duda 100% recomendable.'} />
            </div>
        </section>
    );
};
