import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Dispatch, SetStateAction } from "react";

interface SelectDataProps {
    placeholder: string;
    label: string;
    item: string[];
    name: string;
    setValue: Dispatch<SetStateAction<string>>
}   
  const SelectData: React.FC<SelectDataProps> = ({label, item, placeholder, name, setValue}) => {
    return (
      <Select onValueChange={(value) => setValue(value)} name={name}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup onSelect={() => {console.log('asda')}}>
            <SelectLabel>{label}</SelectLabel>
                {
                    item.map((item, index) => {
                        return <SelectItem key={index} value={item} className="text-slate-800" >{item}</SelectItem>
                    })
                }
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  }

  export default SelectData;