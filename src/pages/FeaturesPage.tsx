import { Fragment, useEffect } from "react"
import Header from "../components/Fragments/Navigations/Header"
import FeatureLayout from "@/components/Layouts/FeatureLayout"
import Footer from "@/components/Fragments/Footer/Footer"
import useIdUser from "@/hooks/useIdUser"

function FeaturesPage() {
    const id = useIdUser();

    useEffect(() => {
        console.log(id);
    })

    return (
        <Fragment>
            <Header current="features" />
            {
                id ? <FeatureLayout id={id} /> : <div className="h-screen w-full flex items-center justify-center box-border text-center text-slate-800 font-bold text-xl">You need to login first</div>
            }
            <Footer />
        </Fragment>
    )
}

export default FeaturesPage

