import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import React, { ReactNode } from "react";


interface TableCartProps {
    children: ReactNode;
}

const TableCart: React.FC<TableCartProps> = ({ children }) => {
    return (
        <Table>
            <TableCaption className="py-3">A list of your recent carts.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-left min-w-[230px]">Product</TableHead>
                    <TableHead className="text-center min-w-[120px]">Price</TableHead>
                    <TableHead className="text-center min-w-[120px]">Quantity</TableHead>
                    <TableHead className="text-center min-w-[120px]">Total</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {children}
            </TableBody>
        </Table>
    )
}

export default TableCart;