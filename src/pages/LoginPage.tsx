import { Link, useNavigate } from "react-router-dom";
import RouteName from "../router/RouteName";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, Fragment, useEffect, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthLayout from "../components/Layouts/AuthLayout";
import FormAuth from "../components/Fragments/FormAuth";
import useLogin from "../services/auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { saveTokenAfterLoginSuccess } from "../redux/slice/authSlice";

function Loginpage() {
    const emailSelector = useSelector((state: any) => state.autoFillEmail);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const emailRef = useRef<HTMLInputElement>(null);

    const { mutate, isLoading } = useLogin(
        (data) => {
            if (data.status == 200) {
                dispatch(saveTokenAfterLoginSuccess(data.data.token));
                toast.success("Login successfully", {
                    autoClose: 1000,
                    onClick: () => toast.dismiss()
                });
                setTimeout(() => {
                    navigate(RouteName.HOME, { replace: true });
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
        if(emailSelector){
            emailRef.current ? emailRef.current.value = emailSelector : "";
        }
        emailRef.current?.focus();
    },[])

    return (
        <Fragment>
            <header className="flex items-center w-full h-20 px-5">
                <Link to={RouteName.HOME}>
                    <FontAwesomeIcon icon={faArrowLeft} className="h-6 w-6 text-slate-500 align-middle" />
                </Link>
                <span className="text-lg font-semibold ml-4 text-emerald-700">Login</span>
            </header>
            <AuthLayout images="login-vector.svg">
                <FormAuth handleSubmit={handleLogin} isLoading={isLoading} ref={emailRef}/>
            </AuthLayout>
            <ToastContainer />
        </Fragment>
    )
}

export default Loginpage;