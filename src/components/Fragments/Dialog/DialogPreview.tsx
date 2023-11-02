import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


import { PreviewProductInterface } from "@/Interface/InterfaceProduct";
import ButtonAuth from "../../Elements/Button/ButtonAuth";
import SelectData from "../../Elements/Select/Select";
import InputAddMin from "../../Elements/Input_Label/InputAddMin";
import { useEffect, useState } from "react";
import useToken from "@/hooks/useToken";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import RouteName from "@/router/RouteName";


const DialogPreview: React.FC<PreviewProductInterface> = ({ code, categoryName, images, name, price }) => {
    
    const { isAuth } = useToken();
    const location = useLocation();
    const navigate: NavigateFunction = useNavigate();
    const [value, setValue] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [selectedSize, setSelectedSize] = useState<string>("");

    const size: string[] = ['Size S', 'Size M', 'Size L', 'Size XL', 'Size XXL'];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if(!isAuth) navigate(RouteName.LOGIN + '?redirect=' + location.pathname);
        console.log(code);
        console.log(categoryName);
    }

    const increment = (): void => {
        setValue((prev) => prev + 1);
    }

    const decrement = (): void => {
        setValue((prev) => {
            if(prev === 0) return 0;
            return prev - 1;
        });
    }

    useEffect(() => {
        setTotalPrice(value * price.value)
    }, [value])

    return (
        <Dialog >
            <DialogTrigger asChild>
                <button type="submit"
                    className="absolute bottom-5 left-1/2 -translate-x-1/2 scale-0 opacity-0 text-slate-800 py-1 px-4 bg-white shadow-lg rounded-xl text-md font-semibold
                hover:bg-slate-800 hover:text-white duration-500 group-hover:scale-100 group-hover:opacity-100"
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
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3 lg:gap-7 lg:mt-2">
                        <SelectData label="Size" item={size} placeholder="Select Size" name="size" setValue={setSelectedSize}/>
                        <div className="flex justify-between items-end">
                        <InputAddMin name="quantity" increment={increment} decrement={decrement} value={value} setValue={setValue} />
                        <p className="text-sm text-slate-500 lg:text-lg selection:bg-none">Total : ${totalPrice.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center justify-evenly">
                        <ButtonAuth text="Buy directly" disabled={false} />
                        <ButtonAuth text="Add to Cart" disabled={false} className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700"/>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default DialogPreview;