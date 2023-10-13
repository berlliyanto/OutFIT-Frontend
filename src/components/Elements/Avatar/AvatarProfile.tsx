interface AvatarProfileProps {
    dimensi: string;
    image: string | undefined;
    onClick: () => void;
}

const AvatarProfile: React.FC<AvatarProfileProps> = ({image, dimensi, onClick}) => {
    return (
        <div onClick={onClick}
        className={`${dimensi} overflow-hidden rounded-full cursor-pointer md:block`}>
            <img src={`http://localhost:5000/avatar/${image}`} alt={image} className="object-cover"/>
        </div>
    )
}

export default AvatarProfile;