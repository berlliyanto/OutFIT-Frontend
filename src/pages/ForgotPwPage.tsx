import HeaderBackButton from "@/components/Fragments/Navigations/HeaderBackButton";
import RouteName from "@/router/RouteName";
import { Fragment } from "react";
import * as React from "react"
import { Label } from "@/components/ui/label"
import Input from "@/components/Elements/Input_Label/Input";
import ButtonAuth from "@/components/Elements/Button/ButtonAuth";
import ForgotPwCard from "@/components/Fragments/Card/ForgotPwCard";

function ForgotPwPage() {

    const [isSend, setIsSend] = React.useState<boolean>(false);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const email: string = e.currentTarget.email.value
        setIsSend(true);
    }

    return (
        <Fragment>
            <HeaderBackButton text="Forgot Password" route={RouteName.LOGIN} />
            <ForgotPwCard title={isSend ? "Check your email" : "Submit Email"} desc={isSend ? "Verification link has been sent to your email" : "Submit your email to get link verification"}>
                {
                    isSend ?
                        <div className="mx-auto">
                            <img src="images/email-sent.svg" alt="" />
                        </div>
                        :
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name" className="text-slate-800">Email</Label>
                                    <Input type="email" id="email" name="email" placeholder="Your email" required={true} />
                                </div>
                            </div>
                            <ButtonAuth text="Submit" disabled={false} />
                        </form>
                }
            </ForgotPwCard>
        </Fragment>
    )
}

export default ForgotPwPage;