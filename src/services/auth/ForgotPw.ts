import { useMutation } from "react-query";
import {axiosInstance} from '../../lib/axios';

interface ForgorPwParams {
  email: string;
}

const useForgotPw = (onSuccess: (data: any) => void, onError: (error: any) => void) => {
  return useMutation({
    mutationFn: async (body: ForgorPwParams) => await axiosInstance.post('/forgot-password', body),
    onSuccess,
    onError
  });
}

export default useForgotPw;
