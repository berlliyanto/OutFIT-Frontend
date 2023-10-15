import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


import { PreviewProductInterface } from "@/Interface/InterfaceProduct";
import ButtonAuth from "../Button/ButtonAuth";
import SelectData from "../Select/Select";


const DialogPreview: React.FC<PreviewProductInterface> = ({ code, categoryName, images, name, price }) => {

    const size: string[] = ['Size S', 'Size M', 'Size L', 'Size XL', 'Size XXL'];

    return (
        <Dialog >
            <DialogTrigger asChild>
                <button type="submit"
                    className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-slate-800 py-1 px-4 bg-white shadow-lg rounded-xl text-md font-semibold
                hover:bg-slate-800 hover:text-white group-hover:bottom-5 duration-300"
                >Preview</button>
            </DialogTrigger>
            <DialogContent className="w-[350px] sm:max-w-[425px] lg:max-w-[800px] lg:grid lg:grid-cols-2 lg:grid-rows-5 2xl:max-w-[1000px]">
                <DialogHeader className="w-full h-60 rounded-md lg:h-auto lg:row-span-5 overflow-hidden lg:rounded-lg">
                    <img src={images[0].baseUrl} alt={images[0]['baseUrl']} className="object-contain w-full h-full" />
                </DialogHeader>
                <div className="flex flex-col gap-3 lg:gap-4 lg:row-span-5">
                    <DialogTitle className="lg:text-3xl">{name}</DialogTitle>
                    <p className="text-sm text-slate-500 lg:text-lg">{price.formattedValue}</p>
                    <DialogDescription className="text-[12px] lg:text-lg">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet enim rerum totam ab illum consequuntur cum earum
                    </DialogDescription>
                    <SelectData label="Size" item={size} placeholder="Select Size" />
                    <DialogFooter className="lg:mx-auto">
                        <ButtonAuth text="Add to cart" disabled={false} />
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default DialogPreview;