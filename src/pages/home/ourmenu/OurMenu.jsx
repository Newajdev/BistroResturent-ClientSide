import { useState } from 'react';
import SectionHeader from '../../../components/SectionHeader'
import MenuItem from './MenuItem';
const OurMenu = () => {
    const [menuItmes, setMenuItems] = useState([1, 2, 3, 4, 5, 6]);



    return (
        <div>
            <SectionHeader subTitle={'Check it out'} Title={'FROM OUR MENU'}></SectionHeader>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    menuItmes.map(itmes => <MenuItem></MenuItem>)
                }
            </div>
            <div className='flex justify-center my-10'>
                <button className='text-xl font-medium uppercase btn text-center border-b-5 border-b-black rounded-2xl hover:bg-amber-300 hover:border-none'>view full menu</button>
            </div>
        </div>
    );
};

export default OurMenu;