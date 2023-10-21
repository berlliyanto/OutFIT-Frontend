import { ProfileInterface } from "@/Interface/InterfaceProfile";
import ListProfile from "@/components/Elements/List/ListProfile"
import showFormattedDate from "@/lib/changeDateFormat"
import { Fragment } from "react";

interface ProfileContentProps {
    profile: ProfileInterface | undefined;
    updateProfile: (data: any, type: string) => void;
}

const ProfileContent: React.FC<ProfileContentProps> = ({ profile, updateProfile }) => {
    return (
        <Fragment>
            <h1 className="text-emerald-600 font-bold text-xl align-top">Profile Info</h1>
            <ul className="mt-4">
                <ListProfile leading="User ID" title={profile?.id} onClick={() => { }} />
                <ListProfile leading="Name" title={profile?.name} onClick={() => updateProfile(profile?.name, "name")} />
                <ListProfile leading="Email" title={profile?.email} onClick={() => updateProfile(profile?.email, "email")} />
                <ListProfile leading="Phone" title={profile?.phone} onClick={() => updateProfile(profile?.phone, "phone")} />
                <ListProfile leading="Main Address" title={profile?.address} onClick={() => updateProfile(profile?.address, "address")} />
                <ListProfile leading="Country" title={profile?.country} onClick={() => updateProfile(profile?.country, "country")} />
                <ListProfile leading="Last Update" title={showFormattedDate(profile?.updated_at)} onClick={() => { }} />
            </ul>
        </Fragment>
    )
}

export default ProfileContent