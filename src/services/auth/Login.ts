import { useMutation } from "react-query";
import axiosInstance from '../../lib/axios';

interface LoginParams {
  email: string;
  password: string;
}

const useLogin = (onSuccess: (data: any) => void, onError: (error: any) => void) => {
  return useMutation({
    mutationFn: async (body: LoginParams) => await axiosInstance.post('/login', body),
    onSuccess,
    onError
  });
}

export default useLogin;
