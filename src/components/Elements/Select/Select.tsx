import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

interface SelectDataProps {
    placeholder: string;
    label: string;
    item: string[];
}   
  const SelectData: React.FC<SelectDataProps> = ({label, item, placeholder}) => {
    return (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
                {
                    item.map((item, index) => {
                        return <SelectItem key={index} value={item} className="text-slate-800">{item}</SelectItem>
                    })
                }
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  }

  export default SelectData;