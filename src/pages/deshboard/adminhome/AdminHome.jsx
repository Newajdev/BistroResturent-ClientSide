import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaDollarSign, FaListAlt, FaUserAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const AdminHome = () => {
    const { user } = useAuth()
    const AxiosSecure = useAxiosSecure()

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await AxiosSecure.get('/admin-stats')
            return res.data
        }

    })
    return (
        <div>
            <h2 className="text-2xl">Hi, <span className="text-green-600 font-semibold">{user.displayName}</span> Welcome Back </h2>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-primary text-3xl">
                        <FaDollarSign></FaDollarSign>
                    </div>
                    <div className="stat-title">Total Revenue</div>
                    <div className="stat-value text-primary">${stats.revenue}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary text-3xl">
                        <FaUserAlt></FaUserAlt>
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value text-secondary text-3xl">{stats.users}</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary text-3xl">
                        <FaListAlt></FaListAlt>
                    </div>
                    <div className="stat-title">Total Items</div>
                    <div className="stat-value text-secondary">{stats.menuItems}</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary text-3xl">
                        <FaCartShopping></FaCartShopping>
                    </div>
                    <div className="stat-title">Total Orders</div>
                    <div className="stat-value text-secondary">{stats.orders}</div>
                </div>

                
            </div>
        </div>
    );
};

export default AdminHome;