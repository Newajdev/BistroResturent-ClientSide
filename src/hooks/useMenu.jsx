import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    // const [menus, setMenus] = useState()
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     axios('http://localhost:5000/menu')
    //         .then(res => {
    //             setMenus(res.data)
    //             setLoading(false)
    //         })
    // }, [])
    // // console.log(menus.category);
    
    // return [menus, loading]

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