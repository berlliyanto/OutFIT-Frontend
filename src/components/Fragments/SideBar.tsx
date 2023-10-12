import { Link } from 'react-router-dom';
import NavLinks from '../Elements/NavLinks';
import { Fragment } from 'react';
import RouteName from '../../router/RouteName';

interface SideBarProps {
    active: boolean;
    current: string;
    isAuth: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ active, current, isAuth }) => {
    let height: string = 'h-0';
    height = active ? 'h-80' : 'h-0';

    return (
        <aside className={`${height} w-full flex flex-col gap-5 bg-slate-700 duration-300 overflow-hidden md:hidden`}>
            <header className=" bg-slate-800 py-1 px-4 flex flex-col justify-between duration-300">
                <h1 className="text-slate-400 text-sm mt-1 mb-1">Free shipping on orders over $50</h1>
                <div className="h-[0.5px] bg-slate-900"></div>
                <div className="flex justify-between w-52 mt-1 mb-1">
                    <Link to="" className="text-slate-400 text-sm hover:text-slate-200 duration-300">Help & FAQs</Link>
                    {
                        isAuth
                            ?
                            <Link to="" className="text-slate-400 text-sm hover:text-slate-200 duration-300">My Account</Link>
                            :
                            <Fragment>
                                <Link to={RouteName.LOGIN} className="text-slate-400 text-sm hover:text-slate-200 duration-300">Login</Link>
                                <Link to={RouteName.REGISTER} className="text-slate-400 text-sm hover:text-slate-200 duration-300">Register</Link>
                            </Fragment>
                    }
                </div>
            </header>
            <main className="px-5 flex flex-col gap-3">
                <NavLinks isSideBar={true} current={current} />
            </main>
        </aside>
    )
}

export default SideBar;