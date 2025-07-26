import pleaceholder from "../../../assets/others/profile.png"
import { Link, NavLink, } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";


const Navbar = () => {
    const { user, logOutUser } = useAuth()
    const [Cart] = useCart()
    const TotalItems = Cart.reduce((Total, items) => Total + items.quantity, 0)






    const hendleLogout = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You and to Logout!",
            showCancelButton: true,
            confirmButtonText: "Yes!",
            cancelButtonText: "No",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                logOutUser()
                    .then((resul) => console.log(resul)
                    )
            }
        });


    }

    


    const NavOptions = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/contactus'}>Contact us</NavLink></li>
        <li><NavLink to={'/ourmenu'}>Our Menu</NavLink></li>
        <li><NavLink to={'/ourshop/dessert'}>our Shop</NavLink></li>
        {
            user && <li className="avatar indicator mr-6">
                <span className="indicator-item badge Badge ">+{TotalItems}</span>
                <NavLink to={'/deshboard/cart'}><FaShoppingCart /></NavLink>
            </li>

        }
    </>

    return (
        <>
            <div className="fixed z-20 w-full">
               <div className="navbar  justify-between bg-[#0000004f] text-white">
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {NavOptions}

                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">Bistro Boss</a>
                    </div>
                    <div className="flex">
                        <div className="navbar-center  hidden lg:flex ">
                            <ul className="menu menu-horizontal uppercase text-xl font-medium hoverEffect">
                                {NavOptions}
                            </ul>
                        </div>
                        <div className="navbar ">
                            {
                                user ?
                                    <button onClick={hendleLogout} className="flex justify-center items-center btn flex-row-reverse bg-[#EEFF25] border-none">
                                        <img className="w-8 h-8 rounded-full ml-2" src={`${user.photoURL ? user.photoURL : pleaceholder

                                            }`} alt="" />
                                        <Link className="uppercase text-xl font-medium " to={'/'}>Logout</Link>
                                    </button>
                                    :
                                    <button className="flex justify-center items-center btn flex-row-reverse bg-[#EEFF25] border-none"
                                    >
                                        <Link className="uppercase text-xl font-medium " to={'/login'}>Login</Link>
                                    </button>
                            }


                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;