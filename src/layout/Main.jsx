
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';
import Navbar from '../pages/shared/navbar/Navbar';


const Main = () => {
    const location  = useLocation()
   
    
    return (
        <div>
            {(location.pathname === '/login' || location.pathname === '/register')|| <Navbar></Navbar>}
            <Outlet></Outlet>
            {(location.pathname === '/login' || location.pathname === '/register')|| <Footer></Footer>}
            
        </div>
    );
};

export default Main;