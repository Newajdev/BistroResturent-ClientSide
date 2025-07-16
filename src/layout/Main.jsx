import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';
import Navbar from '../pages/shared/navbar/Navbar';
import Header from '../pages/shared/header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='max-w-screen-xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;