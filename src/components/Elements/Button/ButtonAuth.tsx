interface ButtonAuthProps{
    text: string;
    disabled: boolean;
    className?: string;
}

const ButtonAuth: React.FC<ButtonAuthProps> = ({text, disabled, className}) => {
    return(
        <button disabled={disabled}
        className={`py-2 px-7 w-fit bg-emerald-600 text-white rounded-md self-center font-semibold duration-300 
        hover:bg-emerald-700 active:bg-emerald-800 ${disabled? "opacity-50" : ""} ${className}`}>
            {text}
        </button>
    )
}

export default ButtonAuth;