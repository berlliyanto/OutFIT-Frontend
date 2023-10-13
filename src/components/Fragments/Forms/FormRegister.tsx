import { Link } from "react-router-dom";
import RouteName from "../../../router/RouteName";
import ButtonAuth from "../../Elements/Button/ButtonAuth";
import Label from "../../Elements/Input_Label/Label";
import Input from "../../Elements/Input_Label/Input";
import { FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

interface FormRegisterProps {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
}

const FormRegister: React.FC<FormRegisterProps> = ({ handleSubmit, isLoading }) => {
    const [avatarPreview, setAvatarPreview] = useState<string | undefined>(undefined);
    
    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.currentTarget.files?.[0];

        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setAvatarPreview(event.target?.result as string);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setAvatarPreview(undefined);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-1 md:gap-2">
            <label htmlFor="image" className="w-16 h-16 mx-auto rounded-full overflow-hidden">
                {avatarPreview ? (
                    <img src={avatarPreview} alt="Avatar Preview" className="object-cover" width={80}/>
                ) : (
                    <div className="h-16 w-16 rounded-full bg-slate-400 flex items-center justify-center">
                        <FontAwesomeIcon icon={faCamera} className="text-slate-700 text-2xl" />
                    </div>
                )}
            </label>
            <input type="file" name="image" id="image" onChange={handleAvatarChange} style={{ display: 'none' }}/>
            <Label htmlFor="name" text="Name:" />
            <Input type="text" name="names" id="names" placeholder="Input name" required={true} />
            <Label htmlFor="email" text="Email:" />
            <Input type="email" name="email" id="email" placeholder="Input email" required={true} />
            <Label htmlFor="password" text="Password:" />
            <Input type="password" name="password" id="password" placeholder="Input password" required={true} />
            <ButtonAuth text="Register" disabled={isLoading} />
            <span className="text-sm text-slate-500 text-center mt-4">Have an account?
                <Link to={RouteName.LOGIN} className="text-sky-500 pl-1 font-semibold">
                    Login
                </Link>
            </span>
        </form>
    )

}

export default FormRegister;