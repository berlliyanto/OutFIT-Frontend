export interface ProfileInterface {
    id: string | number | undefined;
    email: string;
    password: string;
    name: string;
    image: string;
    address: string | undefined;
    phone: string | number | undefined;
    country: string | undefined;
    created_at: string;
    updated_at: string;
}