import { Fragment } from "react";
import Header from "../components/Fragments/Navigations/Header";
import SwiperHome from "../components/Fragments/Swiper/SwiperHome";
import HomeLayout from "../components/Layouts/HomeLayout";
import Footer from "../components/Fragments/Footer/Footer";

interface HomePageInterface {
    isAuth: boolean;
}

function HomePage({ isAuth }: HomePageInterface) {

    return (
        <Fragment>
            <Header current="home" />
            <SwiperHome />
            <HomeLayout />
            <Footer />
        </Fragment>
    )
}

export default HomePage;