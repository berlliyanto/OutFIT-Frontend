import { Fragment } from "react"
import Header from "../components/Fragments/Navigations/Header"
import BannerDefault from "@/components/Fragments/Banner/BannerDefault"
import ContactLayout from "@/components/Layouts/ContactLayout"
import Footer from "@/components/Fragments/Footer/Footer"

function ContactPage() {
    return (
        <Fragment>
            <Header current="contact" />
            <main className="md:pt-20 mb-5">
                <BannerDefault title="Contact Us" />
                <ContactLayout />
            </main>
            <Footer />
        </Fragment>
    )
}

export default ContactPage