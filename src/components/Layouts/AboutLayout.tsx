import { motion } from "framer-motion"

const AboutLayout = () => {
    return (
        <article className="mt-20">
            <section className="flex flex-col gap-4 px-4 text-slate-500 text-sm md:px-10 lg:px-20 lg:text-lg lg:flex-row lg:gap-10">
                <div className="flex flex-col gap-4 md:flex-1">
                    <motion.h1 initial={{ opacity: 0, translateY: -100 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
                    className="text-2xl font-bold text-slate-800 lg:text-3xl md:col-span-2 md:col">Our Story</motion.h1>
                    <motion.p initial={{ opacity: 0, translateY: -100 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non.
                        Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi
                        tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat
                        bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti.
                        Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.
                    </motion.p>
                    <motion.p initial={{ opacity: 0, translateY: -100 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                        Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales.
                        Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a
                        arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt
                        erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.
                    </motion.p>
                    <motion.p initial={{ opacity: 0, translateY: -100 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                        Do you have any questions? Let us know at our store on the 8th floor, 379 Hudson Street, Jakarta, Indonesia, or call us at (+62) 123 456 7890.
                    </motion.p>
                </div>
                <motion.div initial={{ opacity: 0, translateY: -100 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
                className="relative w-80 h-80 rounded-md mx-auto group md:row-span-4 lg:w-96 lg:h-96">
                    <img src="images/about1.jpg" alt="about1" className="object-cover w-full h-full rounded-md group-hover:scale-95 duration-1000" />
                    <div className="absolute top-3 left-3 w-80 h-80 ring-2 ring-slate-300 -z-10 rounded-md group-hover:scale-95 duration-1000 lg:w-96 lg:h-96"></div>
                </motion.div>
            </section>
            <section className="flex flex-col gap-4 px-4 text-slate-500 text-sm md:px-10 lg:px-20 lg:text-lg mt-20 lg:flex-row lg:gap-10">
                <div className="flex flex-col gap-4 md:flex-1">
                    <motion.h1 initial={{ opacity: 0, translateY: -100 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
                    className="text-2xl font-bold text-slate-800 lg:text-3xl">Our Mission</motion.h1>
                    <motion.p initial={{ opacity: 0, translateY: -100 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                        Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus
                        et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi
                        molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor
                        ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida
                        ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.
                    </motion.p>
                </div>
                <motion.div initial={{ opacity: 0, translateY: -100 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
                className="relative w-80 h-80  rounded-md mx-auto group lg:w-96 lg:h-96">
                    <img src="images/about2.jpg" alt="about1" className="object-cover w-full h-full rounded-md group-hover:scale-95 duration-1000" />
                    <div className="absolute top-3 left-3 w-80 h-80 ring-2 ring-slate-300 -z-10 rounded-md group-hover:scale-95 duration-1000 lg:w-96 lg:h-96"></div>
                </motion.div>
            </section>
        </article>
    )
}

export default AboutLayout