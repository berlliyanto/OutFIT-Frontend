import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import React, { ReactNode } from "react";

interface ForgotPwCardProps{
    title: string;
    desc: string;
    children: ReactNode;
}

const ForgotPwCard: React.FC<ForgotPwCardProps> = ({title, desc, children}) => {
    return (
        <Card className="w-[350px] mx-auto">
                <CardHeader>
                    <CardTitle className="text-slate-800">{title}</CardTitle>
                    <CardDescription className="text-slate-800">{desc}</CardDescription>
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
    )
}

export default ForgotPwCard;