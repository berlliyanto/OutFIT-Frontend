import {forwardRef } from "react";

interface InputProps {
    type: string;
    placeholder: string;
    name: string;
    id: string;
    required: boolean;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { type, placeholder, name, id, required }, ref
) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            required={required}
            ref={ref}
            className="bg-emerald-100 rounded-md h-10 text-slate-500 pl-3 outline-none focus:ring-1 focus:ring-emerald-400"
        />
    );
};

export default forwardRef(Input);