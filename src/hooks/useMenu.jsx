import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menus, setMenus] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios('http://localhost:5000/menu')
            .then(res => {
                setMenus(res.data)
                setLoading(false)
            })
    }, [])
    // console.log(menus.category);
    
    return [menus, loading]

};

export default useMenu;