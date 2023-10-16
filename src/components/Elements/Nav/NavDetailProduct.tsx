import RouteName from "@/router/RouteName"
import { CaretDoubleRight } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

interface NavDetailProductProps {
    secondLink: string;
    titleSecondLink: string;
    productName: string;
}

const NavDetailProduct: React.FC<NavDetailProductProps> = ({secondLink, titleSecondLink, productName}) => {
    return (
        <nav className="flex gap-2 items-center justify-start text-sm text-slate-800">
            <Link to={RouteName.HOME}>Home</Link>
            <CaretDoubleRight className="text-[10px]" />
            <Link to={`/shop${secondLink}`}>{titleSecondLink}</Link>
            <CaretDoubleRight className="text-[10px]" />
            <p className="text-slate-500">{productName}</p>
        </nav>
    )
}

export default NavDetailProduct;