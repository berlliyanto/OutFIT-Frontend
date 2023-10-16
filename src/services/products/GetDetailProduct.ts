import { axiosRapidAPI } from "@/lib/axios";
import { useQuery } from "react-query";

export const useGetDetailProduct = (code: string | undefined) => {
  return useQuery({
    queryKey: ["detailProduct"],
    queryFn: async () => {
      const response = await axiosRapidAPI.get("/products/detail", {
        params: {
          lang: "en",
          country: "us",
          productcode: code,
        },
      });
      return response;
    },
    onError: (err) => {
      return err;
    }
  });
};
