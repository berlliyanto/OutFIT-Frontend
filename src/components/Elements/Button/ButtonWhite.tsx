interface ButtonProps {
    text: string;
    visibility: string;
    onClick: () => void;
}

const ButtonWhite: React.FC<ButtonProps> = ({text, visibility, onClick}) => {
    // const before: string = "before:contents-['*'] before:w-full before:h-0 before:bottom-0 before:left-0 before:absolute before:bg-slate-800 before:duration-300 hover:before:h-full"
    return (
        <button onClick={onClick}
        className={`${visibility} relative border-2 text-sm text-slate-100 border-slate-100 font-bold py-2 px-3 rounded 
        hover:bg-slate-100 hover:text-slate-700 duration-300`}>{text}</button>
    );
}

export default ButtonWhite;