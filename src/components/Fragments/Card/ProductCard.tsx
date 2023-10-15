import DialogPreview from "@/components/Elements/Dialog/DialogPreview";
import { PreviewProductInterface } from "@/Interface/InterfaceProduct";

interface ProductCardProps {
    images: string;
    title: string;
    price: string | number;
    onClickTitle: () => void;
    previewProduct: PreviewProductInterface ;
}

const ProductCard: React.FC<ProductCardProps> = ({ images, title, price, onClickTitle, previewProduct }) => {
    return (
        <div className="flex flex-col items-start gap-1 rounded overflow-hidden">
            <div className="relative w-full overflow-hidden group">
                <img src={images} alt={images} className="group-hover:scale-110 duration-1000" />
                <DialogPreview code={previewProduct.code} categoryName={previewProduct.categoryName} images={previewProduct.images} name={previewProduct.name} price={previewProduct.price}/>
            </div>
            <h1 onClick={onClickTitle}
                className="text-slate-500 text-lg cursor-pointer hover:text-emerald-500 duration-300">{title}</h1>
            <h2 className="text-slate-700 text-sm font-semibold">{price}</h2>
        </div>
    )
}

export default ProductCard;