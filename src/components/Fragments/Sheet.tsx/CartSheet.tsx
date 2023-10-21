import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import React, { ReactNode, useState } from "react"
import CartSheetItem from "./CartSheetItem";
import ButtonAuth from "@/components/Elements/Button/ButtonAuth";
import useIdUser from "@/hooks/useIdUser";

interface CartSheetProps {
    children: ReactNode;
}

type CartData = {
    id: string;
    image: string;
    title: string;
    price: number;
    checked: boolean;
}

const cart: CartData[] = [
    {   
        id: "satu",
        image: "https://image.hm.com/assets/hm/a5/3f/a53fb17a061f7a4850d6e54494c1dbf421090fbe.jpg",
        title: "Baju Bola1",
        price: 60,
        checked: false,
    },
    {
        id: "dua",
        image: "https://image.hm.com/assets/hm/a5/3f/a53fb17a061f7a4850d6e54494c1dbf421090fbe.jpg",
        title: "Baju Bola2",
        price: 60,
        checked: false
    },
    {
        id: "tiga",
        image: "https://image.hm.com/assets/hm/a5/3f/a53fb17a061f7a4850d6e54494c1dbf421090fbe.jpg",
        title: "Baju Bola3",
        price: 60,
        checked: false
    },
    {
        id: "empat",
        image: "https://image.hm.com/assets/hm/a5/3f/a53fb17a061f7a4850d6e54494c1dbf421090fbe.jpg",
        title: "Baju Bola4",
        price: 60,
        checked: false
    }
]

const CartSheet: React.FC<CartSheetProps> = ({ children }) => {
    const id = useIdUser();
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [checkState, setCheckState] = useState<string[]>([]);

    const isAuthButtonDisabled = checkState.length === 0;
    
    return (
        <Sheet onOpenChange={() => {
            setTotalPrice(0);
            setCheckState([]);
        }}>
            <SheetTrigger>{children}</SheetTrigger>
            <SheetContent side={"right"}>
                <SheetHeader>
                    <SheetTitle>Your Cart</SheetTitle>
                        <div className="flex flex-col h-[500px] overflow-y-auto">
                            {
                                cart.map((item, index) => {
                                    return <CartSheetItem key={index} image={item.image} price={item.price} title={item.title} id={item.id} setTotalPrice={setTotalPrice} setCheckState={setCheckState}/>
                                })
                            }
                        </div>
                    <div className="absolute bottom-0 left-0 text-sm px-5 flex justify-between items-center w-full h-20 bg-white border-t border-slate-300">
                        <h1>Total Price : ${checkState.length !== 0 ? totalPrice : 0}</h1>
                        <ButtonAuth disabled={isAuthButtonDisabled} text="Buy" />
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default CartSheet