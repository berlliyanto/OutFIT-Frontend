import { Dispatch, SetStateAction } from "react";

interface ProfileMenuProps {
    menu: any[] ;
    SetMenuItem: Dispatch<SetStateAction<string>>;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ menu, SetMenuItem }) => {

    const setMenu = (menu: string) => SetMenuItem(menu)
    
    return (
        <aside className="w-full rounded-md shadow-sm md:border md:border-slate-400 md:h-fit md:w-80 lg:mx-2">
            <ul className="flex flex-col justify-center">
                {
                    menu.map((item, index) => {
                        return <li onClick={()=>setMenu(item)}
                        className="text-center py-1 border-b-[1px] border-slate-200 cursor-pointer text-slate-500 hover:bg-emerald-600 hover:text-zinc-50 duration-300 
                                    md:border-none md:py-[6px]"
                            key={index}>{item}</li>
                    })
                }
            </ul>
        </aside>
    )
}

export default ProfileMenu;