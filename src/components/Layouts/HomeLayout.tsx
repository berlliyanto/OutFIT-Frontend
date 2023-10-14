import ProductCard from "../Fragments/Card/ProductCard";
import CardCollection from "../Fragments/Home/CardCollection";
import { useGetProducts } from "../../services/products/GetProducts";
import Button from "../Elements/Button/Button";

const HomeLayout: React.FC = () => {

    // const {data, isLoading} = useGetProducts("men_all", "BASICS");
    // console.log(data?.data.results);

    // const renderProducts = () => {
    //     const { data, isLoading } = useGetProducts("men_all", "BASICS", "10");
    //     return data?.data.results.map((product: any) => {
    //         return <ProductCard 
    //         key={product.code} 
    //         title={product.name} 
    //         price={product.price['formattedValue']} 
    //         images={product.images[0]['baseUrl']} 
    //         onClickImage={() => { }} 
    //         onClickTitle={() => { }}/>
    //     });
    // }

    return (
        <main className="flex flex-col gap-14 mt-20 mb-28">
            <article className="flex flex-col flex-wrap items-center justify-start gap-8 px-2">
                <CardCollection bgImage="bg-button-men" head1="Men" head2="Collections" onClick={() => { }} />
                <CardCollection bgImage="bg-button-women" head1="Women" head2="Collections" onClick={() => { }} />
            </article>
            <article className="px-4">
                <h1 className="text-3xl font-bold text-slate-800 mb-6">Products Overview</h1>
                <section className="grid grid-cols-1 gap-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {/* {renderProducts()} */}
                </section>
                <section className="flex justify-center mt-16">
                    <Button text="Load More" visibility="block" onClick={() => { }}/>
                </section>
            </article>
        </main>
    )
}

export default HomeLayout;