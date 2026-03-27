"use client"
import Lottie from "lottie-react"
import animationData from "../../public/texturas/texturas-curvas.json"

export const Textura = () => {
    return <Lottie animationData={animationData} loop={true} />
}