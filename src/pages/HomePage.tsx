import { Fragment } from "react";
import Header from "../components/Fragments/Navigations/Header";
import HomeBanner from "../components/Fragments/Banner/HomeBanner";
import HomeLayout from "../components/Layouts/HomeLayout";
import Footer from "../components/Fragments/Footer/Footer";

interface HomePageInterface {
    isAuth: boolean;
}

function HomePage({ isAuth }: HomePageInterface) {

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