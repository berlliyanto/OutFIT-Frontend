interface LabelProps {
    htmlFor: string;
    text: string;
}

const Label: React.FC<LabelProps> = ({htmlFor, text}) => {
    return (
        <label htmlFor={htmlFor} 
        className="mb-1 text-slate-500 text-md">{text}</label>
    )
}

export default Label;