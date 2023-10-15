import { Triangle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const GoToTop = () => {
    const [isTop, setIsTop] = useState(true);

    const handleToTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY <= 100) {
                setIsTop(true)
            } else {
                setIsTop(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])

    return (
        <button onClick={handleToTop}
            className={`${isTop ? 'hidden' : 'fixed'} z-50 bottom-0 right-8 w-8 h-8 bg-emerald-500 rounded-t-md`}>
            <Triangle className="text-center mx-auto text-slate-100" />
        </button>
    )
}

export default GoToTop;