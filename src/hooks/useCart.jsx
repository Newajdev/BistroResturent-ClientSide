import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";



const useCart = () => {
    const AxiosSecure = useAxiosSecure()
    const {user}= useAuth()
    const {data: Cart=[], refetch}= useQuery({
        queryKey: ['cart'], 
        queryFn: async ()=>{
            const res = await AxiosSecure.get(`/cart?UserEmail=${user.email}`)
            return res.data
        }
    })
    return [Cart, refetch]
};

export default useCart;