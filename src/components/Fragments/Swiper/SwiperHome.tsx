import { motion } from "framer-motion"
import { Scrollbar, A11y, EffectFade, Autoplay, Parallax, Pagination, Navigation } from "swiper/modules"
import { SwiperSlide, Swiper } from "swiper/react"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/parallax';

const SwiperHome: React.FC = () => {
    return (
        <Swiper
            modules={[Navigation, Scrollbar, A11y, EffectFade, Autoplay, Parallax, Pagination]}
            pagination={{ clickable: true, }}
            parallax={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            effect="fade"
            spaceBetween={0}
            slidesPerView={1}
        >
            <SwiperSlide className="bg-slide-one w-full h-screen bg-cover">
                {({ isActive }) => (
                    <div className="flex justify-start items-start h-full pl-[10px] pt-[250px] md:justify-end md:pr-[100px]">
                        {
                            isActive ?
                                <div className="flex flex-col gap-2">
                                    <motion.h1 initial={{ opacity: 0, translateY: -100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 1 }}
                                        className="text-slate-100 font-bold text-2xl drop-shadow-lg mb-4 md:text-right md:text-4xl">Welcome to <span className="text-slate-800">Out<span className="text-emerald-500">FIT</span>.</span></motion.h1>
                                    <motion.h2 initial={{ opacity: 0, translateY: 100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 1, delay: 1 }}
                                        className="text-4xl font-bold drop-shadow-xl text-slate-50 bg-slate-600/30 p-1 rounded-lg sm:bg-transparent md:text-right md:text-[60px] md:leading-snug">Elegance and Style for Everyone</motion.h2>
                                </div>
                                : null
                        }
                    </div>
                )}
            </SwiperSlide>
            <SwiperSlide className="bg-slide-two w-full h-screen bg-cover">
                {({ isActive }) => (
                    <div className="flex justify-start items-start h-full pl-[10px] pt-[180px] md:justify-end md:pr-[100px]">
                        {
                            isActive ?
                                <div className="flex flex-col gap-2">
                                    <motion.h1 initial={{ opacity: 0, translateX: -100 }} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, }}
                                        className="text-slate-50 font-bold text-2xl drop-shadow-lg mb-4 md:text-4xl">Women Collection</motion.h1>
                                    <motion.h2 initial={{ opacity: 0, translateX: -100 }} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: 1 }}
                                        className="text-4xl font-bold drop-shadow-xl text-slate-50 md:text-[60px] md:leading-snug">Find Your Style, <span className="text-slate-800 block md:text-[60px]">Find Yourself</span></motion.h2>
                                </div>
                                : null
                        }
                    </div>
                )}
            </SwiperSlide>
            <SwiperSlide className="bg-slide-three w-full h-screen bg-cover bg-center md:bg-right-top">
                {({ isActive }) => (
                    <div className="flex justify-start items-start h-full pl-[10px] pt-[200px] md:pr-[10%] md:pl-10">
                        {
                            isActive ?
                                <div className="flex flex-col gap-2">
                                    <motion.h1 initial={{ opacity: 0, translateY: -100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 1, }}
                                        className="text-slate-50 font-bold text-2xl drop-shadow-lg mb-4 md:text-4xl">Men Collection</motion.h1>
                                    <motion.h2 initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 1 }}
                                        className="text-4xl font-bold drop-shadow-xl text-slate-50 md:text-[60px] md:leading-snug"><span className="text-slate-900">Boldly</span> Stand Out in Your Style</motion.h2>
                                </div>
                                : null
                        }
                    </div>
                )}
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperHome;