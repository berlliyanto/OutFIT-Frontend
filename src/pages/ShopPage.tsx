import { Fragment, ReactNode, useEffect } from "react"
import Header from "../components/Fragments/Navigations/Header"
import { useGetProducts } from "../services/products/GetProducts";
import ProductCard from "../components/Fragments/Card/ProductCard";
import LoaderDart from "../components/Elements/Loader/LoaderDart";
import Footer from "../components/Fragments/Footer/Footer";
import { NavigateFunction, Params, useNavigate, useParams } from "react-router-dom";
import ShopLayout from "@/components/Layouts/ShopLayout";


interface ListInterface {
    title: string;
    category: string;
    onClick: () => void;
}

interface ParamsInterface extends Params {
    category: string;
    sort: string;
    limit: string;
}

function ShopPage() {
    const navigate: NavigateFunction = useNavigate();
    const { category, sort, limit } = useParams<ParamsInterface>();

    const { data, isLoading, refetch, isRefetching } = useGetProducts(category, sort, limit);

    const renderProduct = (): ReactNode => {
        return isLoading || isRefetching ?
            <div className="col-span-full"><LoaderDart /></div>
            : data?.data.results.map((product: any) => {
                return <ProductCard
                    code={product.articles[0].code}
                    previewProduct={product}
                    images={product.images[0]['baseUrl']}
                    title={product.name}
                    price={product.price['formattedValue']}
                    key={product.code} />
            })
    }

    useEffect(() => {
        refetch();
    }, [category, sort, limit])

    const list: ListInterface[] = [
        {
            title: "Men",
            category: "men_all",
            onClick: () => navigate("/shop/men_all/BASICS/30")

        },
        {
            title: "Women",
            category: 'ladies_all',
            onClick: () => navigate("/shop/ladies_all/BASICS/30")

        },
        {
            title: "Kid",
            category: "kid_all",
            onClick: () => { }
        }
    ]

    return (
        <Fragment>
            <Header current="shop" />
            <main className="px-5 pt-8 md:pt-28 lg:px-20">
                <ul className="flex gap-3 pb-6">
                    {
                        list.map((item, index) => {
                            return <li key={index} onClick={item.onClick}
                                className={` ${category === item.category ? "text-emerald-500" : "text-slate-500"}
                                 text-[18px] cursor-pointer hover:text-emerald-500 duration-300`}>{item.title}</li>
                        })
                    }
                </ul>
                <ShopLayout>
                    {renderProduct()}
                </ShopLayout>
            </main>
            <Footer />
        </Fragment>
    )
}

export default ShopPage