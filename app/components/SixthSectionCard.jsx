import { motion } from "framer-motion";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";

export const SixthSectionCard = ({imageUrl, name, userDesc, opinion, bgColor, bRadius, position = 'relative', width = '360px', height = 'fit-content', opacity = 1, top = null, left = null, right = null, bottom = null}) => {
    return (
        <motion.article style={{backgroundColor: bgColor, borderRadius: bRadius, position: position, width: width, height: height, top: top, left: left, right: right, bottom: bottom}} className="sixthSectionCard">
            <motion.img style={{opacity: opacity}} src={imageUrl} alt={name} width={64} height={64} />
            <motion.div style={{opacity: opacity}} className="sixthSectionCardContent">
                <p className="sixthSectionCardName">{name}</p>
                <p className="sixthSectionCardDesc">{userDesc}</p>
                <div className="sixthSectionCardInfo">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <p>
                        Hace 21 horas
                    </p>
                    <p>NUEVA</p>
                </div>
                <p className="sixthSectionCardOpinion">{opinion}</p>
            </motion.div>
        </motion.article>
    );
};
