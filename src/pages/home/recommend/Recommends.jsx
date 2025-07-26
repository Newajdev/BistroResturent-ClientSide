
import FoodCard from '../../../components/FoodCard';
import SectionHeader from '../../../components/SectionHeader'
import useMenu from '../../../hooks/useMenu';


const Recommends = () => {
    const [menus] = useMenu()
    const popular = menus?.filter(menus => menus.category === 'popular')
    const ShowItem = popular?.slice(0, 3)
    return (
        <div className='mb-32'>
            <SectionHeader subTitle={'Should Try'} Title={'Chef Recommends'}></SectionHeader>

            <div className='grid grid-cols-3 gap-10'>

                {
                    ShowItem?.map(item => <FoodCard key={item?._id} item={item}></FoodCard>)
                }

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