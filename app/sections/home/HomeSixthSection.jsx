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

    const textOpacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);

    const card1right = useTransform(scrollYProgress, [0.1, 0.15], ['50%', '5%']);
    const card1Top = useTransform(scrollYProgress, [0.1, 0.15], ['50%', '20%']);
    const card1Width = useTransform(scrollYProgress, [0.15, 0.2], ['160px', '360px']);
    const card1Height = useTransform(scrollYProgress, [0.15, 0.2], ['160px', '182px']);
    const card1Opacity = useTransform(scrollYProgress, [0.2, 0.25], [0, 1]);

    const card2Left = useTransform(scrollYProgress, [0.2, 0.25], ['50%', '5%']);
    const card2Top = useTransform(scrollYProgress, [0.2, 0.25], ['50%', '60%']);
    const card2Width = useTransform(scrollYProgress, [0.25, 0.3], ['160px', '360px']);
    const card2Height = useTransform(scrollYProgress, [0.25, 0.3], ['160px', '167px']);
    const card2Opacity = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);

    const card3right = useTransform(scrollYProgress, [0.3, 0.35], ['50%', '8%']);
    const card3Top = useTransform(scrollYProgress, [0.3, 0.35], ['50%', '70%']);
    const card3Width = useTransform(scrollYProgress, [0.35, 0.4], ['160px', '360px']);
    const card3Height = useTransform(scrollYProgress, [0.35, 0.4], ['160px', '100px']);
    const card3Opacity = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);

    const card4Left = useTransform(scrollYProgress, [0.4, 0.45], ['50%', '14%']);
    const card4Top = useTransform(scrollYProgress, [0.4, 0.45], ['50%', '18%']);
    const card4Width = useTransform(scrollYProgress, [0.45, 0.5], ['160px', '360px']);
    const card4Height = useTransform(scrollYProgress, [0.45, 0.5], ['160px', '100px']);
    const card4Opacity = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);

    const card5right = useTransform(scrollYProgress, [0.5, 0.55], ['50%', '48%']);
    const card5Top = useTransform(scrollYProgress, [0.5, 0.55], ['50%', '80%']);
    const card5Width = useTransform(scrollYProgress, [0.55, 0.6], ['160px', '360px']);
    const card5Height = useTransform(scrollYProgress, [0.55, 0.6], ['160px', '167px']);
    const card5Opacity = useTransform(scrollYProgress, [0.6, 0.65], [0, 1]);

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
                        right={card3right}
                        top={card3Top}
                        width={card3Width}
                        height={card3Height}
                        opacity={card3Opacity}
                        position="absolute"
                        bgColor={'#0092FA'}
                        bRadius='100px'
                        name={"Nicolas Ceppi"}
                        imageUrl={"/home/sixthSection/card3.png"}
                        userDesc={"3 opiniones"}
                        opinion={'Muy buenos los juegos y la atención'} />
                    <SixthSectionCard
                        left={card4Left}
                        top={card4Top}
                        width={card4Width}
                        height={card4Height}
                        opacity={card4Opacity}
                        position="absolute"
                        bgColor={'#F8773D'}
                        bRadius='100px'
                        name={"Nicolas Ceppi"}
                        imageUrl={"/home/sixthSection/card4.png"}
                        userDesc={"3 opiniones"}
                        opinion={'Muy buenos los juegos y la atención'} />
                    <SixthSectionCard
                        right={card5right}
                        top={card5Top}
                        width={card5Width}
                        height={card5Height}
                        opacity={card5Opacity}
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
