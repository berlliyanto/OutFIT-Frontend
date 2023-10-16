import ParticleDefault from "@/components/Elements/Particles/ParticleDefault";
import { motion } from "framer-motion"
import { useState, useEffect } from "react";

interface BannerDefaultProps {
    title: string;
}

const BannerDefault: React.FC<BannerDefaultProps> = ({title}) => {

    const [yPost, setYPost] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            setYPost(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])


    return (
        <div className="relative w-full h-96 bg-about-banner bg-cover bg-fixed flex justify-center items-center overflow-hidden">
            <ParticleDefault classname="w-full h-full absolute top-0 left-0" value={60} onHover={false}/>
            <motion.h1 initial={{ opacity: 0, translateY: 100 }} animate={{ opacity: 1, translateY: yPost }} transition={{ duration: 0.3 }}
                className={`text-[4rem] md:text-[5rem] font-bold text-transparent drop-shadow-md bg-gradient-to-t from-slate-100 to-emerald-400 bg-clip-text`}
            >{title}</motion.h1>
        </div>
    )
}

export default BannerDefault;