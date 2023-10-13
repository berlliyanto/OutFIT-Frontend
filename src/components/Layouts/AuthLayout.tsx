interface AuthLayoutProps{
    children: JSX.Element;
    images: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({children, images}) => {
    return (
        <main className="w-full flex flex-col items-center md:flex-row mb-3 md:gap-5 md:justify-between md:px-20 md:pt-6 lg:px-32">
                <div className="h-52 w-52 md:h-[450px] md:w-[450px]">
                    <img src={`images/${images}`} alt={images} />
                </div>
                <section className="w-80 mt-3 bg-white shadow-[0_0_5px_rgb(0,0,0,0.2)] p-4 rounded-lg lg:w-96">
                    {children}
                </section>
            </main>
    )
}

export default AuthLayout;