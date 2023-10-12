import { Link } from "react-router-dom";
import RouteName from "../../router/RouteName";
import ButtonAuth from "../Elements/Button/ButtonAuth";
import Label from "../Elements/Input_Label/Label";
import Input from "../Elements/Input_Label/Input";
import { FormEvent, forwardRef } from "react";

interface FormAuthProps {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
}

const FormAuth: React.ForwardRefRenderFunction<HTMLInputElement, FormAuthProps> = ({ handleSubmit, isLoading }, ref) => {
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-1 md:gap-3">
            <Label htmlFor="email" text="Email:" />
            <Input type="email" name="email" id="email" placeholder="Input email" required={true} ref={ref} />
            <Label htmlFor="password" text="Password:" />
            <Input type="password" name="password" id="password" placeholder="Input password" required={true} />
            <a href="#" className="text-sm text-sky-500 mt-1">Forgot password?</a>
            <ButtonAuth text="Login" disabled={isLoading} />
            <span className="text-sm text-slate-500 text-center mt-4">Don't have an account?
                <Link to={RouteName.REGISTER} className="text-sky-500 pl-1 font-semibold">
                    REGISTER
                </Link>
            </span>
        </form>
    );
}

export default forwardRef(FormAuth);