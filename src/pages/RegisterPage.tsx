import { FormEvent, Fragment } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import RouteName from "../router/RouteName";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormRegister from "../components/Fragments/Forms/FormRegister";
import useRegister from "../services/auth/Register";
import { ToastContainer, toast } from "react-toastify";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import HeaderBackButton from "../components/Fragments/Navigations/HeaderBackButton";

function RegisterPage() {
    const navigate: NavigateFunction = useNavigate();
    const MySwal = withReactContent(Swal);

    const { mutate, isLoading } = useRegister(
        (data) => {
            if (data.status == 200) {
                if (data.data.message?.includes("Duplicate")) {
                    MySwal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Email already exists',
                        width: 350,
                        allowEnterKey: true,

                    });
                } else {
                    MySwal.fire({
                        icon: 'success',
                        title: 'Register success',
                        text: 'You can now login',
                        width: 350,
                        allowEnterKey: true,
                    }).then(() => {
                        navigate(RouteName.LOGIN, { replace: true });
                    })
                }
            }
        },
        (error) => console.log(error)
    )

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = e.currentTarget.names.value;
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        const image = e.currentTarget.image.files[0];

        if (!image) return toast.error('Please upload your photo', { autoClose: 3000, onClick: () => toast.dismiss() });
        if (password.length <= 5) {
            e.currentTarget.password.focus();
            e.currentTarget.password.classList.add('ring-1', 'focus:ring-red-500');
            return toast.error('Password must be at least 6 characters', { autoClose: 3000, onClick: () => toast.dismiss() });
        } else {
            e.currentTarget.password.classList.remove('ring-1', 'focus:ring-red-500');
        }
        if (!name || !email || !password || !image) return toast.error('Please enter all fields', { autoClose: 3000, onClick: () => toast.dismiss() });


        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('image', image);

        mutate(formData);
    }

    return (
        <Fragment>
            <HeaderBackButton route={RouteName.HOME} text="Register" />
            <AuthLayout images="register-vector.svg">
                <FormRegister handleSubmit={handleSubmit} isLoading={isLoading} />
            </AuthLayout>
            <ToastContainer />
        </Fragment>
    )
}

export default RegisterPage;