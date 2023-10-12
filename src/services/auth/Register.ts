import { useMutation } from "react-query";
import axiosInstance from '../../lib/axios';

type RegisterParams = FormData;

const useRegister = (onSuccess: (data: any) => void, onError: (error: any) => void) => {
  return useMutation({
    mutationFn: async (body: RegisterParams) => await axiosInstance.post('/register', body),
    onSuccess,
    onError
  });
}

export default useRegister;
