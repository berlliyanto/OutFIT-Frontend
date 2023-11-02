import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Trash } from "lucide-react";
import React, { ReactNode, useState } from "react";
import InputAddMin from "../Input_Label/InputAddMin";


interface TableCartProps {
    children: ReactNode;
}


const TableCart: React.FC<TableCartProps> = ({children}) => {

    return (
        <Table>
            <TableCaption className="py-3">A list of your recent carts.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-left min-w-[230px]">Product</TableHead>
                    <TableHead className="text-center min-w-[100px]">Price</TableHead>
                    <TableHead className="text-center min-w-[100px]">Quantity</TableHead>
                    <TableHead className="text-center min-w-[100px]">Total</TableHead>
                    <TableHead className="text-center min-w-[100px]">Checked</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {children}
            </TableBody>
        </Table>
    )
}

export default TableCart;