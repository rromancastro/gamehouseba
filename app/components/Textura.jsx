"use client"
import { useEffect, useRef } from "react"
import Lottie from "lottie-react"
import texturasOlas from "../../public/texturas/texturas-olas.json"
import texturasAzulNaranja from "../../public/texturas/texturas-azul-naranja.json"

export const Textura = ({select, speed = 1}) => {
    const lottieRef = useRef(null)

    const lottieStyle = {
        width: "100%",
        height: "100%",
    }

    useEffect(() => {
        lottieRef.current?.setSpeed(speed)
    }, [speed, select])

    const lottieProps = {
        loop: true,
        style: lottieStyle,
        lottieRef,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    }

    return <div style={{backgroundColor: select === 'olas' ? '#FFB9F4' : null, width: "100%", height: "100%", position: "absolute", inset: 0, zIndex: "-1"}}>{
        select === "olas" ? <Lottie animationData={texturasOlas} {...lottieProps} />
        : select === "azul-naranja" ? <Lottie animationData={texturasAzulNaranja} {...lottieProps} />
        : null
    }</div>
}
