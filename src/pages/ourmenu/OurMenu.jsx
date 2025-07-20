import CoverImg from "../../components/CoverImg";
import img01 from "../../assets/menu/banner3.jpg"
import SectionHeader from '../../components/SectionHeader'
import Container from "../../layout/Container";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "../shared/category/MenuCategory";

const OurMenu = () => {
    const [menus] = useMenu()
    const popular = menus?.filter(menus => menus.category === 'popular')
    const salad = menus?.filter(menus => menus.category === 'salad')
    const drinks = menus?.filter(menus => menus.category === 'drinks')
    const dessert = menus?.filter(menus => menus.category === 'dessert')
    const pizza = menus?.filter(menus => menus.category === 'pizza')
    const soup = menus?.filter(menus => menus.category === 'soup')
    return (
        <div >
            <CoverImg img={img01} title={'Our Menu'} subTitle={'Would you like to try a dish?'}></CoverImg>
            <div className="my-28">
                <Container>
                    <SectionHeader subTitle={"Don't Miss"} Title={"TODAY'S OFFER"}></SectionHeader>
                </Container>
                <MenuCategory items={popular} navigate={'/ourshop/popular'}></MenuCategory>
                <MenuCategory items={salad} title={'salad'}></MenuCategory>
                <MenuCategory items={drinks} title={'drinks'}></MenuCategory>
                <MenuCategory items={dessert} title={'dessert'}></MenuCategory>
                <MenuCategory items={pizza} title={'pizza'}></MenuCategory>
                <MenuCategory items={soup} title={'soup'}></MenuCategory>

            </div>
        </div>
    );
};

export default OurMenu;