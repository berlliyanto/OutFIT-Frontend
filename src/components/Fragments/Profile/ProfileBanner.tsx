import AvatarProfile from "../../Elements/Avatar/AvatarProfile";
import ButtonWhite from "../../Elements/Button/ButtonWhite";

interface ProfileBannerProps {
    image: string | undefined;
    name: string | undefined;
    signOut: () => void;
    editAvatar: () => void;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({ image, signOut, editAvatar, name }) => {
    return (
        <section className="w-full px-2 py-3 bg-emerald-600 flex flex-col items-center gap-5 md:flex-row md:justify-between md:px-10 md:py-5">
            <aside className="block md:flex md:items-center md:gap-4">
                <AvatarProfile dimensi="w-24 h-24" image={image} onClick={editAvatar} />
                <h1 className="text-slate-100 text-lg text-center font-semibold md:text-2xl">{name}</h1>
            </aside>
            <ButtonWhite text="Sign Out" visibility="block" onClick={signOut} />
        </section>
    )
}

export default ProfileBanner;