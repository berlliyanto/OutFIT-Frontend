import { useRef, RefObject } from "react";

interface HamburgerProps {
    handleSideBar: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({handleSideBar}) => {

    const line1: RefObject<HTMLDivElement> = useRef(null);
    const line2: RefObject<HTMLDivElement> = useRef(null);
    const line3: RefObject<HTMLDivElement> = useRef(null);

    const openSideBar = (): void => {
        line1.current?.classList.toggle("rotate-45");
        line2.current?.classList.toggle("opacity-0");
        line3.current?.classList.toggle("-rotate-45");
        line1.current?.classList.toggle("translate-y-[8px]");
        line3.current?.classList.toggle("-translate-y-[8px]");
        handleSideBar();
    }

    return (
        <div id="hamburger" className="h-5 w-8 flex flex-col justify-between cursor-pointer md:hidden" onClick={openSideBar}>
            <div ref={line1} className="h-1 w-8 bg-slate-700 rounded duration-300"></div>
            <div ref={line2} className="h-1 w-8 bg-slate-700 rounded duration-300"></div>
            <div ref={line3} className="h-1 w-8 bg-slate-700 rounded duration-300"></div>
        </div>
    )
}

export default Hamburger;