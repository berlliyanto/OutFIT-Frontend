import showFormattedDate from "../../lib/changeDateFormat";
import { ProfileInterface } from "../../Interface/InterfaceProfile";
import ListProfile from "../Elements/List/ListProfile";
import ProfileBanner from "../Fragments/Banner/ProfileBanner";
import ProfileMenu from "../Fragments/Navigations/ProfileMenu";

interface ProfileLayoutProps {
    profileMenu: any[];
    profile: ProfileInterface | undefined;
    updateProfile: (data: any, type: string) => void;
    signOut: () => void;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({profile, profileMenu, updateProfile, signOut}) => {
    return (
        <main className='block'>
            <ProfileBanner image={profile?.image} name={profile?.name} signOut={signOut} editAvatar={() => { }} />
            <section className="block md:flex md:gap-2 md:mt-10 md:mx-6 lg:mx-20">
                <ProfileMenu menu={profileMenu} />
                <article className="w-full pt-4 px-4 md:pt-0">
                    <h1 className="text-emerald-600 font-bold text-xl align-top">Profile Info</h1>
                    <ul className="mt-4">
                        <ListProfile leading="User ID" title={profile?.id} onClick={() => { }} />
                        <ListProfile leading="Name" title={profile?.name} onClick={() => updateProfile(profile?.name, "name")} />
                        <ListProfile leading="Email" title={profile?.email} onClick={() => updateProfile(profile?.email, "email")} />
                        <ListProfile leading="Phone" title={profile?.phone} onClick={() => updateProfile(profile?.phone, "phone")} />
                        <ListProfile leading="Address" title={profile?.address} onClick={() => updateProfile(profile?.address, "address")} />
                        <ListProfile leading="Country" title={profile?.country} onClick={() => updateProfile(profile?.country, "country")} />
                        <ListProfile leading="Last Update" title={showFormattedDate(profile?.updated_at)} onClick={() => { }} />
                    </ul>
                </article>
            </section>
        </main>
    )
}

export default ProfileLayout;