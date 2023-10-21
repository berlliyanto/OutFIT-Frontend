interface ButtonProps {
    text: string;
    visibility: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({text, visibility, onClick}) => {
    // const before: string = "before:contents-['*'] before:w-full before:h-0 before:bottom-0 before:left-0 before:absolute before:bg-slate-800 before:duration-300 hover:before:h-full"
    return (
        <button onClick={onClick}
        className={`border-2 text-sm text-slate-700 border-slate-700 font-bold py-2 px-3 rounded 
        hover:bg-slate-800 hover:text-slate-100 duration-300 ${visibility}`}>{text}</button>
    );
}

export default Button;