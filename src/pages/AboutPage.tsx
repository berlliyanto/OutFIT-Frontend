import { Fragment, useEffect, useState } from "react"
import Header from "../components/Fragments/Navigations/Header"
import Footer from "@/components/Fragments/Footer/Footer"
import BannerDefault from "@/components/Fragments/Banner/BannerDefault";
import AboutLayout from "@/components/Layouts/AboutLayout";

function AboutPage() {

    return (
        <Fragment>
            <Header current="about" />
            <main className="md:pt-20">
                <BannerDefault title="About Us"/>
                <AboutLayout />
            </main>
            <Footer />
        </Fragment>
    )
}

export default AboutPage