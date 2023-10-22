import Button from "@/components/Elements/Button/Button";
import RouteName from "@/router/RouteName";
import { NavigateFunction, useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <main className="flex justify-center items-center flex-col mt-10 w-screen">
            <div className="w-80 h-80">
                <img src="images/pg-not-found.svg" alt="pg-npt-found" />

            </div>
            <Button text="Go Back Home" visibility="" onClick={() => navigate(RouteName.HOME)} />
        </main>
    )
}

export default PageNotFound;