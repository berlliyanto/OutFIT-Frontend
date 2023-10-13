import { useMutation } from "react-query";
import axiosInstance from "../../lib/axios";
import { useSelector } from "react-redux";

interface ProfileParams {
  id: string | number | undefined;
  body?: object,
}

export const useGetProfile = (
  onSuccess: (data: any) => void,
  onError: (error: any) => void
) => {    
  const tokenSelector = useSelector((state: any) => state.token);
  return useMutation({
    mutationFn: async (id: ProfileParams) => {
      return await axiosInstance.get(`/profile/${id.id}`, {
        headers: {
          Authorization: `Bearer ${tokenSelector}`,
        },
      });
    },
    onSuccess,
    onError,
  });
};

export const useUpdateProfile = (
  onSuccess: (data: any) => void,
  onError: (error: any) => void
) => {
  const tokenSelector = useSelector((state: any) => state.token);
  return useMutation({
    mutationFn: async (data: ProfileParams) => {
      return await axiosInstance.put(
        `/profile/${data.id}`, data.body,
        {
          headers: {
            Authorization: `Bearer ${tokenSelector}`,
          },
        }
      );
    },
    onSuccess,
    onError,
  });
};

