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
                        <li><Link to="" className="hover:text-white duration-300">Men</Link></li>
                        <li><Link to="" className="hover:text-white duration-300">Women</Link></li>
                        <li><Link to="" className="hover:text-white duration-300">Kids</Link></li>
                    </ul>
                </section>
                <section className="w-72">
                    <h1 className="text-slate-100 text-xl font-semibold">HELP</h1>
                    <ul className="flex flex-col gap-3 mt-3 text-sm">
                        <li><Link to="" className="hover:text-white duration-300">Shipping</Link></li>
                        <li><Link to="" className="hover:text-white duration-300">FAQs</Link></li>
                    </ul>
                </section>
                <section className="w-72">
                    <h1 className="text-slate-100 text-xl font-semibold mb-2">QUESTIONS</h1>
                    <p className="text-sm w-60 mb-2">Do you have any questions? Let us know at our store on the 8th floor, 379 Hudson Street, Jakarta, Indonesia, or call us at (+62) 123 456 7890.</p>
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
                            className="outline-none w-full bg-transparent py-2 border-b-2 border-slate-500 text-slate-500 mb-4" />
                        <ButtonAuth disabled={false} text="Subscribe" />
                    </form>
                </section>
            </div>
            <section className="flex flex-col justify-center mt-20 w-full">
                <p className="text-sm text-center">Its not real store, just for testing</p>
                <p className="text-sm text-center">design inspired by <a href="https://colorlib.com/" target="_blank" className="hover:text-white duration-300">ColorLib.</a></p>
                <p className="text-sm text-center mt-2">Copyright © 2023 All rights reserved</p>
            </section>
        </footer>
    )
}

export default Footer;