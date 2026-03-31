"use client"
import Lottie from "lottie-react"
import texturasOlas from "../../public/texturas/texturas-olas.json"
import texturasAzulNaranja from "../../public/texturas/texturas-azul-naranja.json"

export const Textura = ({select}) => {
    const lottieStyle = {
        width: "100%",
        height: "100%",
    }

    const lottieProps = {
        loop: true,
        style: lottieStyle,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    }

    return <div style={{width: "100%", height: "100%", position: "absolute", inset: 0, zIndex: "-1"}}>{
        select === "olas" ? <Lottie animationData={texturasOlas} {...lottieProps} />
        : select === "azul-naranja" ? <Lottie animationData={texturasAzulNaranja} {...lottieProps} />
        : null
    }</div>
}
