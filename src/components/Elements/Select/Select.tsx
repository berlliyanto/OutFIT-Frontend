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
    name: string;
}   
  const SelectData: React.FC<SelectDataProps> = ({label, item, placeholder, name}) => {
    return (
      <Select onValueChange={(value) => {console.log(value)}} name={name}>
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