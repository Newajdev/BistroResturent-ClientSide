import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const useCart = () => {
    const AxiosSecure = useAxiosSecure()
    const {user}= useContext(AuthContext);
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