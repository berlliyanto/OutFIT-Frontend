interface ProductCardProps {
    images: string;
    title: string;
    price: string | number;
    onClickImage: () => void;
    onClickTitle: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({images, title, price, onClickImage, onClickTitle}) => {
    return (
        <div className="flex flex-col items-start gap-1">
            <div className="w-full overflow-hidden">
                <img src={images} alt="" onClick={onClickImage} className="object-cover hover:scale-110 duration-300"/>
            </div>
            <h1 onClick={onClickTitle}
            className="text-slate-500 text-lg cursor-pointer hover:text-emerald-500 duration-300">{title}</h1>
            <h2 className="text-slate-700 text-sm font-semibold">{price}</h2>
        </div>
    )
}

export default ProductCard;