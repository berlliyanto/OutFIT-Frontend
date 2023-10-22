import RouteName from "@/router/RouteName";
import { CaretDoubleRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import TableCart from "../Elements/Table/TableCart";
import { TableRow, TableCell } from "../ui/table";
import InputAddMin from "../Elements/Input_Label/InputAddMin";
import React, { useState } from "react";

type CartData = {
    id: string;
    image: string;
    title: string;
    price: number;
    checked: boolean;
    qty: number;
}

const cart: CartData[] = [
    {
        id: "satu",
        image: "https://image.hm.com/assets/hm/a5/3f/a53fb17a061f7a4850d6e54494c1dbf421090fbe.jpg",
        title: "Baju Bola1",
        price: 60,
        checked: false,
        qty: 2,
    },
    {
        id: "dua",
        image: "https://image.hm.com/assets/hm/a5/3f/a53fb17a061f7a4850d6e54494c1dbf421090fbe.jpg",
        title: "Baju Bola2",
        price: 60,
        checked: false,
        qty: 1,
    },
    {
        id: "tiga",
        image: "https://image.hm.com/assets/hm/a5/3f/a53fb17a061f7a4850d6e54494c1dbf421090fbe.jpg",
        title: "Baju Bola2",
        price: 60,
        checked: false,
        qty: 1,
    },
    {
        id: "empat",
        image: "https://image.hm.com/assets/hm/a5/3f/a53fb17a061f7a4850d6e54494c1dbf421090fbe.jpg",
        title: "Baju Bola2 aasdadad",
        price: 60,
        checked: false,
        qty: 1,
    },
];

interface FeatureLayoutProps{
    id: string | number | undefined;
}

const FeatureLayout: React.FC<FeatureLayoutProps> = ({id}) => {

    const [qtyValue, setQtyValue] = useState<number>(1);
    const increment = (): void => {
        setQtyValue(prev => prev + 1);
    }

    const decrement = (): void => {
        setQtyValue(prev => {
            if (prev <= 1) return 1;
            return prev - 1;
        });
    }

    return (
        <main className="px-5 md:pt-24 md:px-24 mb-5">
            <nav className="flex gap-2 items-center justify-start text-sm text-slate-800">
                <Link to={RouteName.HOME}>Home</Link>
                <CaretDoubleRight className="text-[10px]" />
                <p className="text-slate-500">Shopping Cart</p>
            </nav>
            <article className="mt-5 flex flex-wrap justify-between items-center gap-10 lg:flex-nowrap lg:items-start ">
                <section className="max-w-[900px] overflow-auto flex-1 border border-slate-300 rounded-md pb-5">
                    <TableCart>
                        {cart.map((item) => {
                            return (
                                <TableRow key={item.id} className="">
                                    <TableCell className="">
                                        <div className="flex items-center gap-3">
                                            <img src={item.image} alt="" width={100}/> 
                                            <h1>{item.title}</h1>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-center">${item.price}</TableCell>
                                    <TableCell>
                                        <InputAddMin name={item.id} value={qtyValue} setValue={setQtyValue} increment={increment} decrement={decrement} className="h-8 w-8 mx-auto" />
                                    </TableCell>
                                    <TableCell className="text-center selection:bg-transparent">${item.qty * item.price}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableCart>
                </section>
                <section className=" w-full h-[500px] border border-slate-300 rounded-md lg:w-80">

                </section>
            </article>
        </main>
    )
}

export default FeatureLayout;