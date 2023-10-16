import Header from "@/components/Fragments/Navigations/Header";
import { Fragment } from "react";
import { Params, useParams } from "react-router-dom";
import NavDetailProduct from "@/components/Elements/Nav/NavDetailProduct";

interface DetailParams extends Params {
    code: string;
}

function ProductDetailPage() {
    const { code } = useParams<DetailParams>();

    return (
        <Fragment>
            <Header current="detail" />
            <main className="pt-24 px-24">
                <NavDetailProduct titleSecondLink="Men" productName="BASICS" secondLink="/men_all/BASICS/30"/>
            </main>
        </Fragment>
    )
}

export default ProductDetailPage