import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faHeart } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "../../Elements/Hamburger/Hamburger";
import Button from "../../Elements/Button/Button";
import NavLinks from "../../Elements/Nav/NavLinks";
import Logo from "../../Elements/Avatar/Logo";
import SideBar from './SideBar';
import { Fragment, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import RouteName from "../../../router/RouteName";
import useToken from "../../../hooks/useToken";
import AvatarProfile from "../../Elements/Avatar/AvatarProfile";

interface HeaderProps {
    current: string;
}

const Header: React.FC<HeaderProps> = ({ current }) => {
    const navigate: NavigateFunction = useNavigate();

    const {isAuth, data} = useToken();
    const [sideBarActive, setSideBarActive] = useState<boolean>(false);

    const handleSideBar = (): void => {
        setSideBarActive(!sideBarActive);
    }

    const gap = isAuth ? "gap-6" : "gap-3";
    const iconVisiblity = isAuth ? "visible" : "hidden";

    const redirectToLoginPage = (): void => navigate(RouteName.LOGIN);
    const redirectToRegisterPage = (): void => navigate(RouteName.REGISTER)

    return (
        <Fragment>
            <header className="relative z-50 flex justify-between items-center px-4 w-full h-20 md:px-6 xl:px-20 ">
                <div className="flex items-center gap-16">
                    <Logo />
                    <NavLinks current={current} />
                </div>
                <div className={`flex justify-center items-center gap-4 md:${gap}`}>
                    <FontAwesomeIcon icon={faCartArrowDown} className={`${iconVisiblity} text-slate-700 text-xl cursor-pointer hover:text-emerald-600 duration-300`} />
                    <FontAwesomeIcon icon={faHeart} className={`${iconVisiblity} text-slate-700 text-xl cursor-pointer hover:text-emerald-600 duration-300`} />
                    {
                        isAuth ? <AvatarProfile dimensi="hidden w-12 h-12" image={data?.image} onClick={()=>{navigate("/profile/" + data.id)}} />
                            :
                            <Fragment>
                                <Button text="Login" visibility="hidden md:block" onClick={redirectToLoginPage} />
                                <Button text="Register" visibility="hidden md:block" onClick={redirectToRegisterPage} />
                            </Fragment>
                    }
                    <Hamburger handleSideBar={handleSideBar} />
                </div>
            </header>
            <SideBar active={sideBarActive} current={current} isAuth={isAuth} id={data.id}/>
        </Fragment>
    )
}

export default Header;