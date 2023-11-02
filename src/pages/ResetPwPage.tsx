import ButtonAuth from "@/components/Elements/Button/ButtonAuth";
import Input from "@/components/Elements/Input_Label/Input";
import ForgotPwCard from "@/components/Fragments/Card/ForgotPwCard";
import { Label } from "@/components/ui/label";
import RouteName from "@/router/RouteName";
import useResetPw from "@/services/auth/ResetPw";
import { useEffect } from "react";
import { useNavigate, useLocation, NavigateFunction } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function ResetPwPage() {
    const navigate: NavigateFunction = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id: any = queryParams.get('id');
    const token: any = queryParams.get('token');
    const swal = withReactContent(Swal);

    useEffect(() => {
        if (!id || !token) navigate('*');
    }, []);

    const {mutate} = useResetPw(
        () => {
            swal.fire({
                icon: 'success',
                title: "Success Reset Password",
                timer: 3000,
                didDestroy() {
                  navigate(RouteName.LOGIN);  
                },
            })
        },
        () => {
            toast.error("Uncaught Error")
        },
        id,
        token,
    )

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const password: string = e.currentTarget.password.value
        const password2: string = e.currentTarget.confirmpassword.value;
        if(password !== password2) toast.warning("Password does not match", {autoClose: 3000});

        mutate({password, password2})

    }

    return (
        <main className="mt-20">
            <ForgotPwCard title="Reset Password" desc="">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5 gap-2">
                            <Label htmlFor="password" className="text-slate-800">New Password</Label>
                            <Input type="password" id="password" name="password" placeholder="New password" required={true} />
                            <Label htmlFor="confirmpassword" className="text-slate-800">Confirm Password</Label>
                            <Input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirm password" required={true} />
                        </div>
                    </div>
                    <ButtonAuth text="Submit" disabled={false} />
                </form>
            </ForgotPwCard>
            <ToastContainer />
        </main>
    )
}

export default ResetPwPage;