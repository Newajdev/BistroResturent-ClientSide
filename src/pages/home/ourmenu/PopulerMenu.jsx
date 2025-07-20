
import SectionHeader from '../../../components/SectionHeader'
import MenuCategory from '../../shared/category/MenuCategory';
import useMenu from '../../../hooks/useMenu';
const PopulerMenu = () => {
    const [menus] = useMenu()
    const popular = menus?.filter( menus => menus.category === 'popular')
    return (
        <div>
            <SectionHeader subTitle={'Check it out'} Title={'FROM OUR MENU'}></SectionHeader>
            <MenuCategory navigate={'/ourmenu'} items={popular}></MenuCategory>
        </div>
    );
};

export default PopulerMenu;