import ProductCard from "../Fragments/Card/ProductCard";
import CardCollection from "../Fragments/Card/CardCollection";
import { useGetProducts } from "../../services/products/GetProducts";
import Button from "../Elements/Button/Button";
import LoaderDart from "../Elements/Loader/LoaderDart";
import { useNavigate } from "react-router-dom";

const HomeLayout: React.FC = () => {
    const navigate = useNavigate();

    // const { data, isLoading } = useGetProducts("men_all", "BASICS", "10");
    // const renderProducts = () => {
    //     return data?.data.results.map((product: any) => {
    //         return <ProductCard
    //         code={product.articles[0].code}
    //         previewProduct={product}
    //         images={product.images[0]['baseUrl']}
    //         title={product.name}
    //         price={product.price['formattedValue']}
    //         key={product.code} />
    //     });
    // }

    return (
        <main className="flex flex-col gap-14 mt-20">
            <article className="flex flex-col flex-wrap items-center justify-start gap-8 px-2 md:flex md:flex-wrap md:justify-center md:flex-row lg:justify-evenly">
                <CardCollection bgImage="bg-button-men" head1="Men" head2="Collections" onClick={() => navigate("/shop/men_all/BASICS/30")} />
                <CardCollection bgImage="bg-button-women" head1="Women" head2="Collections" onClick={() => navigate("/shop/ladies_all/BASICS/30")} />
                <CardCollection bgImage="bg-button-kid" head1="Kid" head2="Collections" onClick={() => { }} />
            </article>
            <article className="px-4">
                <h1 className="text-3xl font-bold text-slate-800 mb-6">Products Overview</h1>
                <section className="grid grid-cols-1 gap-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {
                        true ?
                            <div className="col-span-full">
                                <LoaderDart></LoaderDart>
                            </div>
                            : <div></div>
                            // renderProducts()
                    }
                </section>
                <section className="flex justify-center mt-16">
                    <Button text="See More" visibility="block" onClick={()=>navigate('/shop/men_all/BASICS/30')} />
                </section>
            </article>
        </main>
    )
}

export default HomeLayout;