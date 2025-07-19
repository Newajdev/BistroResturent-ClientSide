
import FoodCard from '../../../components/FoodCard';
import SectionHeader from '../../../components/SectionHeader'
import useMenu from '../../../hooks/useMenu';


const Recommends = () => {
    const [menus] = useMenu()
    return (
        <div className='mb-32'>
            <SectionHeader subTitle={'Should Try'} Title={'Chef Recommends'}></SectionHeader>

            <div className='grid grid-cols-3 gap-10'>

                {/* {
                    menus.length > 3 ? {
                        menus.slice(0, 3)
                    }
                }
                
                {/* <FoodCard ></FoodCard>
                <FoodCard ></FoodCard> */} 
            </div>

        </div>
    );
};

export default Recommends;3