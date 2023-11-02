import { ReactNode } from "react";
import ButtonAuth from "../Elements/Button/ButtonAuth";
import Input from "../Elements/Input_Label/Input";
import { MapPin, Phone, Envelope } from "@phosphor-icons/react";

interface ContactData {
    title: string;
    icon: JSX.Element;
    content: string;
}

const contactData: ContactData[] = [
    {
        title: "Address",
        icon: <MapPin className="inline-block" />,
        content: "8th floor, 379 Hudson Street, Jakarta, Indonesia, or call us at (+62) 123 456 7890."
    },
    {
        title: "Phone",
        icon: <Phone className="inline-block" />,
        content: "(+62) 123 456 7890"
    },
    {
        title: "Email",
        icon: <Envelope className="inline-block" />,
        content: "Outfit@email.com"
    }
];

const ContactLayout = () => {

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
    }

    const renderContactInfo = (): ReactNode => {
        return contactData.map((item, index) => {
            return (
                <div key={index}>
                    <div className="text-slate-600 text-lg flex items-center">
                        {item.icon}
                        <span className="pl-4">{item.title}</span>
                    </div>
                    <p className="text-slate-500 text-sm mt-3">{item.content}</p>
                </div>
            )
        })
    }

    return (
        <article className="mt-20 px-5 md:flex md:justify-center lg:px-24 xl:px-44">
            <section className="w-full border border-slate-400 py-6 md:flex-1">
                <form className="flex flex-col justify-start items-center p-3 gap-4" onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-bold text-slate-800 mt-3">Send Us A Message</h1>
                    <Input id="emailUser" type="email" name="emailUser" placeholder="Your email address" required={true} className="w-full" />
                    <textarea name="message" id="message" placeholder="Your message" required={true}
                        className="w-full min-h-[12rem] max-h-[18rem] p-3 text-slate-500 outline-none bg-emerald-100 rounded-md focus:ring-1 focus:ring-emerald-400">
                    </textarea>
                    <ButtonAuth text="Submit" disabled={false} />
                </form>
            </section>
            <section className="w-full h-[24rem] border-x border-b border-slate-400 px-10 py-8 flex flex-col justify-between md:border-l-0 md:border-t md:h-auto md:flex-1 lg:py-16">
               {renderContactInfo()}
            </section>
        </article>
    )
}

export default ContactLayout;