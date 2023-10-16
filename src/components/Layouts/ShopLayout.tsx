import { ReactNode } from "react";

interface ShopLayoutProps {
    children: ReactNode;
}
const ShopLayout: React.FC<ShopLayoutProps> = ({children}) => {
    return (
        <section className="grid grid-cols-2 gap-x-3 gap-y-5 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {children}
        </section>
    )
}

export default ShopLayout