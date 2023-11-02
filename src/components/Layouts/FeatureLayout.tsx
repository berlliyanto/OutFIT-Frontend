import RouteName from "@/router/RouteName";
import { CaretDoubleRight, Trash } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import TableCart from "../Elements/Table/TableCart";
import React, { useEffect, useState } from "react";
import TableCartBody from "../Elements/Table/TableCartBody";
import { Separator } from "../ui/separator";
import SelectData from "../Elements/Select/Select";
import ButtonAuth from "../Elements/Button/ButtonAuth";


interface FeatureLayoutProps {
    id: string | number | undefined;
}

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

interface ListItemInterface {
    id: string;
    qtyValue: number;
    totalPrice: number;
}

const shipping: string[] = ["JNE", "POS Indonesia", "TIKI"]

const FeatureLayout: React.FC<FeatureLayoutProps> = ({ id }) => {

    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [listItem, setListItem] = useState<ListItemInterface[]>([]);
    const [checkList, setCheckList] = useState<string[]>([]);
    const [selectedShipping, setSelectedShipping] = useState<string>("");


    const isButtonDisabled = checkList.length === 0;

    useEffect(() => {
        let total = 0;
        for (const item of listItem) {
            total = total + item.totalPrice;
        }
        setTotalPrice(total);
    }, [listItem])


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
                        {
                            cart.map((item, index) => {
                                return (
                                    <TableCartBody key={index} id={item.id} image={item.image} price={item.price} title={item.title} setCheckList={setCheckList} setListItem={setListItem} />
                                )
                            })
                        }
                    </TableCart>
                </section>
                <section className="w-full h-fit p-6 border border-slate-300 rounded-md lg:w-80">
                    <h1 className="text-slate-800 text-xl font-bold">Cart Total</h1>
                    <h2 className="text-slate-600 text-base font-semibold mt-3">Sub Total : ${totalPrice}</h2>
                    <Separator className="my-6" />
                    <h2 className="text-slate-600 text-base font-semibold mb-3">Shipping : {selectedShipping}</h2>
                    <SelectData label="Shipping" name="shipping" placeholder="Select shipping" item={shipping} setValue={setSelectedShipping} />
                    <Separator className="my-6" />
                    <h2 className="text-slate-800 text-base font-semibold">Total : </h2>
                    <div className="flex justify-end">
                        <ButtonAuth disabled={false} text="Checkout" className="mt-4" />
                    </div>
                </section>
            </article>
        </main>
    )
}

export default FeatureLayout;