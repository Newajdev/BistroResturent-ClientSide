import MenuItem from './MenuItem';
import PriButton from '../../../components/PriButton';


const MenuCategory = ({items}) => {
    

    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    items?.map(itme => <MenuItem key={itme.id} itmes={itme}></MenuItem>)
                }
            </div>
            <div className='flex justify-center mt-16 gap-5'>
                <PriButton title={"view full menu"}></PriButton>
            </div>
        </>
    );
};

export default MenuCategory;