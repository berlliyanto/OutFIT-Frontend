import { Fragment } from "react";
import { Input } from "@/components/ui/input"
import { MapPin, Plus, Share } from '@phosphor-icons/react';
import Button from "@/components/Elements/Button/Button";
import AddressCard from "../Card/AddressCard";

const AddressContent = () => {
    return (
        <Fragment>
            <div className="flex justify-between items-center">
                <h1 className="text-emerald-600 font-bold text-xl align-top mb-2">List Address</h1>
                <Plus className="text-emerald-800 text-xl" />
            </div>
            <section className="flex flex-col gap-2">
                <Input type="text" placeholder="Search Address"
                    className="self-end focus-visible:ring-emerald-500" />
                <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    <AddressCard address="Komplek Girimande" isMainAddress={true} isPinPoint={true} 
                    owner="Berlliyanto AJi Nugraha" phone="68929202020" typeAddress="Alamat Rumah" />
                    <AddressCard address="Komplek Girimande" isMainAddress={false} isPinPoint={false} 
                    owner="Berlliyanto AJi Nugraha" phone="68929202020" typeAddress="Alamat Rumah" />
                    <AddressCard address="Komplek Girimande" isMainAddress={false} isPinPoint={true} 
                    owner="Berlliyanto AJi Nugraha" phone="68929202020" typeAddress="Alamat Rumah" />
                </div>
            </section>
        </Fragment>
    )
}

export default AddressContent;