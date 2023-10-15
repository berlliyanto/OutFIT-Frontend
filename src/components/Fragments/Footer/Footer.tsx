import { InstagramLogo, FacebookLogo, TwitterLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import ButtonAuth from "../../Elements/Button/ButtonAuth";

const Footer = () => {

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
    }

    return (
        <footer className="w-full pt-20 px-5 pb-5 bg-slate-900 text-slate-400 lg:px-10 mt-28">
            <div className="flex flex-col flex-wrap gap-8 w-full xs:flex-row">
                <section className="w-72">
                    <h1 className="text-slate-100 text-xl font-semibold">CATEGORIES</h1>
                    <ul className="flex flex-col gap-3 mt-3 text-sm">
                        <li><Link to="">Men</Link></li>
                        <li><Link to="">Women</Link></li>
                        <li><Link to="">Kids</Link></li>
                    </ul>
                </section>
                <section className="w-72">
                    <h1 className="text-slate-100 text-xl font-semibold">HELP</h1>
                    <ul className="flex flex-col gap-3 mt-3 text-sm">
                        <li><Link to="">Shipping</Link></li>
                        <li><Link to="">FAQs</Link></li>
                    </ul>
                </section>
                <section className="w-72">
                    <h1 className="text-slate-100 text-xl font-semibold mb-2">QUESTIONS</h1>
                    <p className="text-sm w-60 mb-2">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 USA or call us on (+1) 96 716 6879</p>
                    <div className="flex gap-3">
                        <InstagramLogo size={24} className="hover:text-sky-400 cursor-pointer duration-300" />
                        <FacebookLogo size={24} className="hover:text-sky-400 cursor-pointer duration-300" />
                        <TwitterLogo size={24} className="hover:text-sky-400 cursor-pointer duration-300" />
                    </div>
                </section>
                <section className="w-72 ">
                    <h1 className="text-slate-100 text-xl font-semibold mb-2">NEWSLETTER</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Enter your email" name="email" id="email"
                            className="outline-none w-full bg-transparent py-2 border-b-2 border-slate-500 text-slate-500" />
                        <ButtonAuth disabled={false} text="Subscribe" />
                    </form>
                </section>
            </div>
            <section className="flex justify-center mt-20 w-full">
                <p className="text-sm text-center">Copyright © 2023 All rights reserved</p>
            </section>
        </footer>
    )
}

export default Footer;