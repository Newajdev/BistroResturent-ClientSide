import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const AxiosPublic = useAxiosPublic()


    const {data: menus, isPending: loading, refetch} = useQuery({
        queryKey : ['menu'],
        queryFn: async () =>{
            const res = await AxiosPublic('/menu')
            return res.data
        }
        
    })
    
    return [menus, loading, refetch]
};

export default useMenu;