import ButtonWhite from "../../Elements/Button/ButtonWhite"

interface CardCollectionProps {
    head1: string;
    head2: string;
    bgImage: string;
    onClick: () => void;
}

const CardCollection: React.FC<CardCollectionProps> = ({head1, head2, bgImage ,onClick}) => {
    return (
        <section onClick={onClick}
                className={`relative ${bgImage} bg-cover w-[21rem] h-60 border-slate-300 border pt-6 pl-4 rounded overflow-hidden cursor-pointer group duration-300
                hover:bg-blend-overlay`}>
            <div className="w-full h-full bg-transparent absolute top-0 left-0 group-hover:bg-slate-500/30 duration-300"></div>
            <h1 className="absolute top-6 left-4 text-2xl font-bold text-slate-800 z-10 group-hover:text-slate-50">{head1}</h1>
            <h1 className="absolute top-14 left-4 text-2xl font-bold text-slate-800 z-10 group-hover:text-slate-50">{head2}</h1>
            <ButtonWhite text="See All" onClick={onClick} visibility="block z-10 absolute -bottom-12 group-hover:bottom-4" />
        </section>
    )
}

export default CardCollection;