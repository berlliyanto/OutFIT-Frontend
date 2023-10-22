import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Trash } from "@phosphor-icons/react";
import InputAddMin from "@/components/Elements/Input_Label/InputAddMin";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface ListItemInterface {
    id: string;
    qtyValue: number;
    totalPrice: number;
}

interface CartSheetItemProps {
    id: string;
    image: string;
    title: string;
    price: number;
    setListItem: Dispatch<SetStateAction<ListItemInterface[]>>;
    setCheckList: Dispatch<SetStateAction<string[]>>;
}

const CartSheetItem: React.FC<CartSheetItemProps> = ({ id, image, title, price, setCheckList, setListItem }) => {

    const [qtyValue, setQtyValue] = useState<number>(1);

    const handleCheckboxChange = (checked: boolean) => {
        if(checked){
            const totalPrice: number = price * qtyValue;
            setCheckList(prev => [...prev, id]);
            setListItem(prev => [...prev, {id, totalPrice, qtyValue}]);
        }else{
            setListItem(prev => prev.filter((item: any) => item.id !== id));
            setCheckList(prev => prev.filter((item) => item !== id));
        }
    };

    const increment = (): void => {
        setQtyValue(prev => prev + 1);
    }

    const decrement = (): void => {
        setQtyValue(prev => {
            if(prev <= 1) return 1;
            return prev - 1;
        });
    }

    useEffect(() => {
        setListItem(prev => {
            return prev.map((item) => {
                if (item.id === id) {
                  return {
                    ...item,
                    qtyValue,
                    totalPrice: qtyValue * price,
                  };
                }
                return item;
              })
        });
    },[qtyValue])

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

   // const handleCheckboxChange = (checked: boolean) => {
    //     if (checked) {
    //         setCheckState(prev => [...prev, id]);
    //         if (qtyValue == 1) {
    //             setTotalPrice((prev) => prev + price);
    //         } else {
    //             setTotalPrice((prev) => prev + pricePerItem);
    //         }
    //     } else {
    //         setCheckState(prev => prev.filter((item) => item !== id));
    //         if (qtyValue == 1) {
    //             setTotalPrice((prev) => prev - price);
    //         } else {
    //             setTotalPrice((prev) => prev - pricePerItem);
    //         }
    //     }
    // };

    // const increment = (): void => {
    //     setQtyValue((prev) => prev + 1);
    //     setTotalPrice((prev) => prev + price);
    //     setPricePerItem((prev) => prev + price);
    // }

    // const decrement = (): void => {
    //     if (qtyValue <= 1) return;
    //     setQtyValue((prev) => {
    //         if (prev === 1) return 1;
    //         return prev - 1;
    //     });
    //     setTotalPrice((prev) => prev - price);
    //     setPricePerItem((prev) => prev - price);
    // }