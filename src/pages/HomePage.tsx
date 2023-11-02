import { Fragment } from "react";
import Header from "../components/Fragments/Navigations/Header";
import HomeBanner from "../components/Fragments/Banner/HomeBanner";
import HomeLayout from "../components/Layouts/HomeLayout";
import Footer from "../components/Fragments/Footer/Footer";


function HomePage() {

    return (
        <Fragment>
            <Header current="home" />
            <HomeBanner />
            <HomeLayout />
            <Footer />
        </Fragment>
    )
}

export default HomePage;