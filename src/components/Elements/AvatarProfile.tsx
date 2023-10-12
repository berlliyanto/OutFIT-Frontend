interface AvatarProfileProps {
    image: string;
    onClick: () => void;
}

const AvatarProfile: React.FC<AvatarProfileProps> = ({image, onClick}) => {
    return (
        <div onClick={onClick}
        className="hidden w-12 h-12 overflow-hidden rounded-full cursor-pointer md:block">
            <img src={`http://192.168.1.11:5000/avatar/${image}`} alt={image} className="object-cover"/>
        </div>
    )
}

export default AvatarProfile;