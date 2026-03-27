"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

export const SalaComponent = () => {

    const [fotoSelected, setFotoSelected] = useState(1);

    return (<main id="salaComponent">
        <section id="salaComponentSecondSection">
            <article>
                <div>
                    <h3>¿Podrás contra el cartel?</h3>
                    <p>Fuiste elegido para desmantelar el cartel del narco mas buscado, y deberías llevar a cabo un operativo de alto riesgo antes que sea demasiado tarde.</p>
                </div>

                <div>
                    <span>
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStarHalf />
                        <IoIosStarOutline />
                    </span>
                    <p>Una de nuestras salas <br /> más valorada por los usuarios. </p>
                </div>
            </article>
        </section>

        <section id="salaComponentThirdSection">
            <h2>hechá <span>un vistazo</span></h2>
            <article>
                <Image id="imagenPrincipal" src={`/recoleta/operacion-medellin/foto${fotoSelected}.png`} alt="foto 1" width={1000} height={1000} />
                <div>
                    <Image onClick={() => setFotoSelected(1)} style={{opacity: fotoSelected == 1 ? '1' : '.5'}} src="/recoleta/operacion-medellin/foto1.png" alt="foto 1" width={300} height={300} />
                    <Image onClick={() => setFotoSelected(2)} style={{opacity: fotoSelected == 2 ? '1' : '.5'}} src="/recoleta/operacion-medellin/foto2.png" alt="foto 1" width={300} height={300} />
                    <Image onClick={() => setFotoSelected(3)} style={{opacity: fotoSelected == 3 ? '1' : '.5'}} src="/recoleta/operacion-medellin/foto3.png" alt="foto 1" width={300} height={300} />
                    <Image onClick={() => setFotoSelected(4)} style={{opacity: fotoSelected == 4 ? '1' : '.5'}} src="/recoleta/operacion-medellin/foto4.png" alt="foto 1" width={300} height={300} />
                </div>
            </article>
        </section>
    </main>
    );
};
