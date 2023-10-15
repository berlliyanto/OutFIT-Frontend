import { useQuery } from "react-query";
import { axiosRapidAPI } from "../../lib/axios";
import axios from "axios";

export const useGetProducts = (category: string | undefined, concept: string | undefined, pageSize: string | undefined) => {
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
        onError(err) {
            return err;
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