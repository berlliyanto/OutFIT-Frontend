import Button from "@/components/Elements/Button/Button";
import { ShareNetwork , MapPin } from "@phosphor-icons/react";

interface AddressCardProps {
    isMainAddress: boolean;
    typeAddress: string;
    owner: string;
    phone: string;
    address: string;
    isPinPoint: boolean;
}

const AddressCard: React.FC<AddressCardProps> = ({isMainAddress, owner, phone, address, isPinPoint, typeAddress}) => {
    return (
        <div className="relative flex flex-col p-3 bg border-slate-300 border rounded-md gap-1">
            <div className="absolute left-0 top-3 h-4 w-1 bg-slate-300 rounded-r-md"></div>
            <div className="flex justify-between items-center">
                <h6 className="text-slate-800 text-[12px] font-bold">{typeAddress} {isMainAddress ? <span className="bg-slate-200 p-[3px] rounded-sm text-slate-400 ml-1"> utama</span> : null}</h6>
                <ShareNetwork  className="inline-block text-end text-slate-600" />
            </div>
            <h5 className="text-base font-bold text-slate-800 mt-2">{owner}</h5>
            <p className="text-sm text-slate-800">{phone}</p>
            <p className="text-sm text-slate-800">{address}</p>
            <div className="flex gap-2 items-center mt-1">
                <MapPin />
                <p className="text-sm font-semibold text-slate-800">{isPinPoint? 'Sudah Pinpoint' : 'Belum Pinpoint'}</p>
            </div>
            <div className="flex justify-between items-center mt-1 gap-2">
                <Button text="Edit Address" onClick={() => { }} visibility="block  w-full" />
                {isMainAddress ? null : <Button text="..." onClick={() => { }} visibility="block" />}
            </div>
        </div>
    )
}

export default AddressCard;