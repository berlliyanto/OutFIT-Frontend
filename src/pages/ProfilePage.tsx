import { Fragment, useEffect, useState, Dispatch } from 'react';
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import HeaderBackButton from "../components/Fragments/Navigations/HeaderBackButton";
import RouteName from "../router/RouteName";
import { useGetProfile, useUpdateProfile } from "../services/auth/Profile";
import useToken from "../hooks/useToken";
import { useDispatch } from 'react-redux';
import { clearTokenAfterLogout } from '../redux/slice/authSlice';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import LoaderDart from '../components/Elements/Loader/LoaderDart';
import ProfileLayout from '../components/Layouts/ProfileLayout';
import { ProfileInterface } from './Interface/InterfaceProfile';

const profileMenu: any[] = [
    {
        title: "Profile",
    },
    {
        title: "Address",
    },
    {
        title: "Order",
    },
    {
        title: "Payment",
    },
    {
        title: "Change Password",
    },
]

function ProfilePage() {
    const MySwal = withReactContent(Swal);
    const dispatch: Dispatch<any> = useDispatch();
    const navigate: NavigateFunction = useNavigate();
    const id: string | number | undefined = useParams().id;
    const [profile, setProfile] = useState<ProfileInterface>();
    useToken(id);

    const { mutate: getMutate, isLoading } = useGetProfile(
        (data) => {
            setProfile(data.data);
        },
        (error) => {
            console.log(error.response?.status);
        }
    );

    const { mutate: updateMutate } = useUpdateProfile(
        (data) => {
            if (data.status === 200) getMutate({ id });
        },
        (error) => {
            console.log(error.response?.status);
        }
    )

    const signOut = (): void => {
        MySwal.fire({
            icon: 'question',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            width: 350,
            allowEnterKey: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, sign out!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(clearTokenAfterLogout());
                navigate(RouteName.HOME, { replace: true });
            }
        })
    }

    const updateProfile = async (data: any, type: string): Promise<void> => {
        const title: string = data ? "Update " + type + "?" : "Add " + type + "?";
        const placeHolder: string = `Enter new ${type}`;
        const { value: newData } = await MySwal.fire({
            icon: 'warning',
            title: title,
            text: data,
            width: 350,
            input: 'text',
            inputValue: "",
            inputPlaceholder: placeHolder,
            allowEnterKey: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update!'
        });

        if (newData) {
            updateMutate({ id, body: { [type]: newData } });
        }
    }

    useEffect(() => {
        if (id) {
            getMutate({ id });
        }
    }, [id])

    return (
        <Fragment>
            <HeaderBackButton route={RouteName.HOME} text="My Account" />
            {
                isLoading ? <LoaderDart /> : <ProfileLayout profile={profile} signOut={signOut} updateProfile={updateProfile} profileMenu={profileMenu} />
            }
        </Fragment>
    )
}

export default ProfilePage;