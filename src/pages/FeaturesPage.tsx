import { Fragment } from "react"
import Header from "../components/Fragments/Navigations/Header"
import LoaderDart from "../components/Elements/Loader/LoaderDart"

function FeaturesPage() {
    return (
        <Fragment>
            <Header current="features" />
            <LoaderDart />
        </Fragment>
    )
}

export default FeaturesPage

