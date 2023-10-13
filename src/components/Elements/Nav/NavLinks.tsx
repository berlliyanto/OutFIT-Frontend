import { Link } from "react-router-dom";

interface NavLinksProps {
    current: string;
    isSideBar?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({current, isSideBar}) => {
    let col: string = "";
    let visibility: string = "block";
    let textColor: string = "text-slate-700";

    col = isSideBar ? "flex-col" : "";
    visibility = isSideBar ? "block" : "hidden";
    textColor = isSideBar ? "text-slate-200" : "text-slate-700";

    return (
        <nav className={`${visibility} md:block`}>
            <ul className={`flex ${col} gap-4 md:gap-8 xl:gap-12`}>
                <li><Link to="/" className={`${current=='home' ? 'text-emerald-600' : textColor} text-lg font-semibold py-4 hover:text-emerald-600 duration-300`}>Home</Link></li>
                <li><Link to="/shop" className={`${current=='shop' ? 'text-emerald-600' : textColor} text-lg font-semibold py-4 hover:text-emerald-600 duration-300`}>Shop</Link></li>
                <li><Link to="/features" className={`${current=='features' ? 'text-emerald-600' : textColor} text-lg font-semibold py-4 hover:text-emerald-600 duration-300`}>Features</Link></li>
                <li><Link to="/about" className={`${current=='about' ? 'text-emerald-600' : textColor} text-lg font-semibold py-4 hover:text-emerald-600 duration-300`}>About</Link></li>
                <li><Link to="/contact" className={`${current=='contact' ? 'text-emerald-600' : textColor} text-lg font-semibold py-4 hover:text-emerald-600 duration-300`}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default NavLinks;