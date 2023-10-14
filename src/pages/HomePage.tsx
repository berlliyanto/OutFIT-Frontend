import { Fragment } from "react";
import Header from "../components/Fragments/Navigations/Header";
import SwiperHome from "../components/Fragments/Swiper/SwiperHome";
import HomeLayout from "../components/Layouts/HomeLayout";

function HomePage({ isAuth }: any) {

    return (
        <Fragment>
            <Header current="home" />
            <SwiperHome />
            <HomeLayout />
        </Fragment>
    )
}

export default HomePage;