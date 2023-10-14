import { useQuery } from "react-query";
import { axiosRapidAPI } from "../../lib/axios";

export const useGetProducts = (category: string, concept: string, pageSize: string) => {
    return useQuery({
        queryKey: ["products"],
        queryFn: async() => {
            const response = await axiosRapidAPI.get("/products/list", {
                params: {
                    country: 'us',
                    lang: 'en',
                    currentpage: '0',
                    pagesize: pageSize,
                    categories: category,
                    concepts: concept
                  },
            });
            return response;        
        },
    })
}

/*
important key : BASICS
- code : string
- name : string
- categoryName : string
- price : object
- images : array of object {baseUrl}
*/