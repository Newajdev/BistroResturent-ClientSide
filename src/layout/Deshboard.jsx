
import { useQuery } from '@tanstack/react-query';
import { FaBook, FaHome, FaList, FaPhone, FaShoppingCart, FaStore, FaStreetView, FaUtensils, FaWallet } from 'react-icons/fa';
import { FaCalendar, FaUser } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';

const Deshboard = () => {
    const AxiosSecure = useAxiosSecure()
    const { data: users,} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await AxiosSecure('/users');
            return res.data;

        }
    })

  
    return (
        <div className='flex deshboard'>
            <div className='w-1/5 h-screen fixed bg-amber-500'>
                <div className=''>
                    <h1 className='flex flex-col p-6 text-center mb-24'><span className='font-bold  text-3xl'>BISTRO BOSS</span>
                        <span className='text-3xl tracking-widest'>Restaurant</span></h1>

                    <ul className='menu uppercase text-xl font-medium hoverEffect w-full pl-16 space-y-4'>
                        {
                            users?.userPosition === 'admin' ?
                                <>
                                    <li><NavLink to={'/deshboard/adminhome'}><FaHome></FaHome>Admin home</NavLink></li>
                                    <li><NavLink to={'/deshboard/additems'}><FaUtensils></FaUtensils> Add Items</NavLink></li>
                                    <li><NavLink to={'/deshboard/manageitems'}><FaList></FaList> Manage Items</NavLink></li>
                                    <li><NavLink to={'/deshboard/managebookings'}><FaBook></FaBook> Manage Bookings</NavLink></li>
                                    <li><NavLink to={'/deshboard/alluser'}><FaUser></FaUser> All user</NavLink></li>
                                </>
                                // ------------------------------------------------------------------------------------
                                :
                                // ------------------------------------------------------------------------------------
                                <>
                                    <li><NavLink to={'/deshboard/home'}><FaHome></FaHome> user home</NavLink></li>
                                    <li><NavLink to={'/deshboard/reservation'}><FaCalendar></FaCalendar>reservation</NavLink></li>
                                    <li><NavLink to={'/deshboard/payments'}><FaWallet></FaWallet> payment history</NavLink></li>
                                    <li><NavLink to={'/deshboard/cart'}><FaShoppingCart></FaShoppingCart> my cart</NavLink></li>
                                    <li><NavLink to={'/deshboard/review'}><FaStreetView></FaStreetView> add review</NavLink></li>
                                    <li><NavLink to={'/deshboard/bookings'}><FaList></FaList> my booking</NavLink></li>
                                </>
                        }




                        <div className="divider"></div>
                        <li><NavLink to={'/'}><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to={'/contactus'}><FaPhone></FaPhone> Contact us</NavLink></li>
                        <li><NavLink to={'/ourmenu'}><FaList></FaList> Our Menu</NavLink></li>
                        <li><NavLink to={'/ourshop/dessert'}><FaStore></FaStore> our Shop</NavLink></li>

                    </ul>
                </div>

            </div>
            <div className='h-screen w-4/5 ml-[20%] p-32'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Deshboard;