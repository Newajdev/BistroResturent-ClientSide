import Banner from "./banner/Banner";
import pleaceholder from "../../../assets/others/profile.png"

const Navbar = () => {
    const NavOptions = <>
        <li><a>Home</a></li>
        <li><a>Contact us</a></li>
        <li><a>Our Menu</a></li>
        <li><a>our Shop</a></li>
    </>

    return (
        <>
            <div className="navbar fixed  z-20 justify-between bg-[#0000004f] text-white">
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
                        <button className="flex justify-center items-center btn flex-row-reverse bg-[#EEFF25] border-none">
                            <img className="w-8 h-8 rounded-full ml-2" src={pleaceholder} alt="" />
                            <h3 className="uppercase text-xl font-medium ">Sign out</h3>
                            </button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;