import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

interface HeaderBackButtonProps {
    route: string;
    text: string;
}

const HeaderBackButton: React.FC<HeaderBackButtonProps> = ({route, text}) => {
    return (
        <header className="flex z-50 items-center w-full h-20 px-5">
            <Link to={route}>
                <FontAwesomeIcon icon={faArrowLeft} className="h-6 w-6 text-slate-500 align-middle" />
            </Link>
            <span className="text-lg font-semibold ml-4 text-emerald-600">{text}</span>
        </header>
    )
}

export default HeaderBackButton;