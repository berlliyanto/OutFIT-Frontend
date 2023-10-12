import { useParams } from "react-router-dom";

function ProfilePage() {
    const id: string | undefined = useParams().id;
    return (
        <main>
            <h1>Profile Page</h1>
            <h1>{id}</h1>
        </main>
    )
}

export default ProfilePage;