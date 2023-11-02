import { TableRow, TableCell } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox";
import { Trash } from "@phosphor-icons/react"
import InputAddMin from "../Input_Label/InputAddMin"
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface ListItemInterface {
    id: string;
    qtyValue: number;
    totalPrice: number;
}

interface TableCartBodyProps {
    image: string;
    title: string;
    price: number;
    id: string;
    setListItem: Dispatch<SetStateAction<ListItemInterface[]>>;
    setCheckList: Dispatch<SetStateAction<string[]>>;
}

const TableCartBody: React.FC<TableCartBodyProps> = ({image,title,price,id, setListItem, setCheckList}) => {

    const [qtyValue, setQtyValue] = useState<number>(1);

    const handleCheckboxChange = (checked: boolean) => {
        if(checked){
            const totalPrice: number = price * qtyValue;
            setCheckList(prev => [...prev, id]);
            setListItem(prev => [...prev, {id, title, totalPrice, qtyValue}]);
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
            if (prev <= 1) return 1;
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
        <TableRow className="">
            <TableCell className="">
                <div className="flex items-center gap-3">
                    <img src={image} alt="" width={100} />
                    <h1>{title}</h1>
                </div>
            </TableCell>
            <TableCell className="text-center">${price}</TableCell>
            <TableCell>
                <InputAddMin name={id} value={qtyValue} setValue={setQtyValue} increment={increment} decrement={decrement} className="h-8 w-8 mx-auto" />
            </TableCell>
            <TableCell className="text-center selection:bg-transparent">${price * qtyValue}</TableCell>
            <TableCell className="text-center selection:bg-transparent">
                <div className="flex gap-2 justify-center">
                    <Checkbox id="selected" onCheckedChange={handleCheckboxChange}/>
                    <Trash className="text-lg" />
                </div>
            </TableCell>
        </TableRow>
    )
}

export default TableCartBody;