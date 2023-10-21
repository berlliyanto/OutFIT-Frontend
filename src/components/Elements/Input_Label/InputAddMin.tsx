import {Plus, Minus} from "@phosphor-icons/react"
import React from "react";

interface InputAddMinProps {
    name: string;
    setValue: React.Dispatch<React.SetStateAction<number>>;
    value: number;
    increment: () => void;
    decrement: () => void;
    className?: string;
}

const InputAddMin: React.FC<InputAddMinProps> = ({name, setValue, value, className, increment, decrement}) => {

    return (
        <div className={`flex h-12 w-fit border border-slate-300 rounded ${className}`}>
            <div onClick={decrement}
            className={`w-12 flex cursor-pointer justify-center items-center duration-300 hover:bg-emerald-400 active:bg-emerald-600 group ${className}`}><Minus className="group-hover:text-white group-hover:fill-white group-hover:scale-110"/></div>
            <input type="number" name={name} className="text-center w-12 outline-none bg-slate-100 text-sm text-slate-600 border-l border-r border-slate-300" value={value} onChange={(e) => {
                setValue(Number(e.target.value))
            }}/>
            <div onClick={increment}
            className={`w-12 flex cursor-pointer justify-center items-center duration-300 hover:bg-emerald-400 active:bg-emerald-600 group ${className}`}><Plus className="group-hover:text-white group-hover:fill-white group-hover:scale-110"/></div>
        </div>
    )
}

export default InputAddMin;