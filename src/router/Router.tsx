import { createBrowserRouter } from "react-router-dom"
import RouteName from "./RouteName";
import App from "../App"
import ShopPage from "../pages/ShopPage";
import FeaturesPage from "../pages/FeaturesPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Loginpage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import ProductDetailPage from "@/pages/ProductDetailPage";

class Router {
    public router = createBrowserRouter([
        {
            path: RouteName.HOME,
            element: <App />,
        },
        {
            path: RouteName.SHOP,
            element: <ShopPage />
        },
        {
            path: RouteName.FEATURES,
            element: <FeaturesPage />
        },
        {
            path: RouteName.ABOUT,
            element: <AboutPage />
        },
        {
            path: RouteName.CONTACT,
            element: <ContactPage />
        },
        {
            path: RouteName.LOGIN,
            element: <Loginpage />
        },
        {
            path: RouteName.REGISTER,
            element: <RegisterPage />
        },
        {
            path: RouteName.PROFILE,
            element: <ProfilePage />
        },
        {
            path: RouteName.PRODUCT_DETAIL,
            element: <ProductDetailPage />
        },
        {
            path: "*",
            element: <h1>Not Found</h1>
        }

    ])
}

const router  = new Router().router;

export default router;