import { useMutation } from "react-query";
import {axiosInstance} from '../../lib/axios';

interface ResetParams {
  password: string;
  password2: string;
}

const useResetPw = (onSuccess: (data: any) => void, onError: (error: any) => void, id: string, token: string) => {
  return useMutation({
    mutationFn: async (body: ResetParams) => await axiosInstance.post(`/reset-password/${id}/${token}`, body),
    onSuccess,
    onError
  });
}

export default useResetPw;
