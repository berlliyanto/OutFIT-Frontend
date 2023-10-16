import { useLocation, useNavigate, useParams } from "react-router-dom";
import RouteName from "../router/RouteName";
import { FormEvent, Fragment, useEffect, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthLayout from "../components/Layouts/AuthLayout";
import FormAuth from "../components/Fragments/Forms/FormAuth";
import useLogin from "../services/auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { saveTokenAfterLoginSuccess } from "../redux/slice/authSlice";
import HeaderBackButton from "../components/Fragments/Navigations/HeaderBackButton";
import { saveEmail } from "../redux/slice/autoFillEmail";

function Loginpage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const redirectValue = queryParams.get('redirect');

    const emailSelector = useSelector((state: any) => state.autoFillEmail);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const emailRef = useRef<HTMLInputElement>(null);

    const { mutate, isLoading } = useLogin(
        (data) => {
            if (data.status == 200) {
                dispatch(saveEmail(data.data.user.email))
                dispatch(saveTokenAfterLoginSuccess(data.data.token));
                toast.success("Login successfully", {
                    autoClose: 1000,
                    onClick: () => toast.dismiss()
                });
                setTimeout(() => {
                    navigate(redirectValue ? redirectValue : RouteName.HOME, { replace: true });
                }, 1500);
            }
        },
        () => toast.error('Email or password is incorrect', {
            onClick: () => toast.dismiss(),
            autoClose: 1500
        })
    );

    const handleLogin = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        if (!email || !password) {
            return alert('Please enter email and password');
        };
        mutate({ email, password });
    }

    useEffect(() => {
        if (emailSelector) {
            emailRef.current ? emailRef.current.value = emailSelector : "";
        }
        emailRef.current?.focus();
    }, [])

    return (
        <Fragment>
            <HeaderBackButton route={RouteName.HOME} text="Login" />
            <AuthLayout images="login-vector.svg">
                <FormAuth handleSubmit={handleLogin} isLoading={isLoading} ref={emailRef} />
            </AuthLayout>
            <ToastContainer />
        </Fragment>
    )
}

export default Loginpage;