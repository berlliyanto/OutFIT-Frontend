import {forwardRef } from "react";

interface InputProps {
    type: string;
    placeholder: string;
    name: string;
    id: string;
    required: boolean;
    className? :string;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { type, placeholder, name, id, required , className}, ref
) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            required={required}
            ref={ref}
            className={`bg-emerald-100 rounded-md h-10 text-slate-500 pl-3 outline-none focus:ring-1 focus:ring-emerald-400 ${className}`}
        />
    );
};

export default forwardRef(Input);