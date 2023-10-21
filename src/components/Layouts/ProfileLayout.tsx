import { ProfileInterface } from "../../Interface/InterfaceProfile";
import ProfileBanner from "../Fragments/Banner/ProfileBanner";
import ProfileMenu from "../Fragments/Navigations/ProfileMenu";
import AddressContent from "../Fragments/ProfileContent/Address";
import ChangePWContent from "../Fragments/ProfileContent/ChangePW";
import OrderContent from "../Fragments/ProfileContent/Order";
import PaymentContent from "../Fragments/ProfileContent/Payment";
import ProfileContent from "../Fragments/ProfileContent/Profile";
import { useState } from "react";

interface ProfileLayoutProps {
    profile: ProfileInterface | undefined;
    updateProfile: (data: any, type: string) => void;
    signOut: () => void;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ profile, updateProfile, signOut }) => {

    const profileMenu: string[] = ["Profile", "Address", "Order", "Payment", "Change Password"]

    const [selectedMenu, setSelectedMenu] = useState<string>('Profile');

    return (
        <main className='block'>
            <ProfileBanner image={profile?.image} name={profile?.name} signOut={signOut} editAvatar={() => { }} />
            <section className="block md:flex md:gap-2 md:mt-10 md:mx-6 lg:mx-20">
                <ProfileMenu menu={profileMenu} SetMenuItem={setSelectedMenu} />
                <article className="w-full pt-4 px-4 md:pt-0">
                    {selectedMenu === 'Profile' && <ProfileContent profile={profile} updateProfile={updateProfile} />}
                    {selectedMenu === 'Address' && <AddressContent />}
                    {selectedMenu === 'Order' && <OrderContent />}
                    {selectedMenu === 'Payment' && <PaymentContent />}
                    {selectedMenu === 'Change Password' && <ChangePWContent />}
                </article>
            </section>
        </main>
    )
}

export default ProfileLayout;