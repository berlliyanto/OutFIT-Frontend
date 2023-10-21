import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Trash } from "@phosphor-icons/react";
import InputAddMin from "@/components/Elements/Input_Label/InputAddMin";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface CartSheetItemProps {
    id: string;
    image: string;
    title: string;
    price: number;
    setTotalPrice: Dispatch<SetStateAction<number>>;
    setCheckState: Dispatch<SetStateAction<string[]>>;
}

const CartSheetItem: React.FC<CartSheetItemProps> = ({ id, image, title, price, setTotalPrice, setCheckState }) => {

    const [qtyValue, setQtyValue] = useState<number>(1);
    const [pricePerItem, setPricePerItem] = useState<number>(price);


    const handleCheckboxChange = (checked: boolean) => {
        if (checked) {
            setCheckState(prev => [...prev, id]);
            if (qtyValue == 1) {
                setTotalPrice((prev) => prev + price);
            } else {
                setTotalPrice((prev) => prev + pricePerItem);
            }
        } else {
            setCheckState(prev => prev.filter((item) => item !== id));
            if (qtyValue == 1) {
                setTotalPrice((prev) => prev - price);
            } else {
                setTotalPrice((prev) => prev - pricePerItem);
            }
        }
    };

    const increment = (): void => {
        setQtyValue((prev) => prev + 1);
        setTotalPrice((prev) => prev + price);
        setPricePerItem((prev) => prev + price);
    }

    const decrement = (): void => {
        if (qtyValue <= 1) return;
        setQtyValue((prev) => {
            if (prev === 1) return 1;
            return prev - 1;
        });
        setTotalPrice((prev) => prev - price);
        setPricePerItem((prev) => prev - price);
    }

    return (
        <div className="flex flex-col">
            <div className="flex gap-2 items-center">
                <Checkbox id="selected" onCheckedChange={handleCheckboxChange} />
                <img src={image} alt={title} className="w-20" />
                <div className="ml-3 text-sm text-slate-800 flex flex-col">
                    <h4 className="">{title}</h4>
                    <h3 className="font-bold">${price}</h3>
                </div>
            </div>
            <footer className="self-end flex items-center gap-4 mt-3">
                <Trash className="text-xl" />
                <InputAddMin name={id} value={qtyValue} setValue={setQtyValue} increment={increment} decrement={decrement} className="h-8 w-8" />
            </footer>
            <Separator className="my-4" />
        </div>
    )
}

export default CartSheetItem;