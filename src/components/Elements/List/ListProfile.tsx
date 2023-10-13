import { faInfoCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faArrowTurnRight } from "@fortawesome/free-solid-svg-icons/faArrowTurnRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ListProfileParams {
    leading: string;
    title: string | number | undefined;
    onClick?: () => void;
}

const ListProfile: React.FC<ListProfileParams> = ({ leading, title, onClick }) => {
    
    return (
        <li className="flex justify-between items-center mb-5">
            <div className="text-slate-600 text-sm">{leading}</div>
            <div onClick={onClick}
            className="flex justify-between items-cente w-3/5 cursor-pointer">
                <div className="text-slate-600 text-sm">{title ? title : "Add"}</div>
                <FontAwesomeIcon icon={
                    title ? 
                    leading === "User ID" || leading === "Last Update" ? 
                    faInfoCircle :
                    faArrowTurnRight : 
                    faPlus
                    } className="text-slate-500 text-sm"/>
            </div>
        </li>
    )
}

export default ListProfile;