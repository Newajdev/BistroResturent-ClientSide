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
                    <MenuCategory items={popular}></MenuCategory>
                </Container>
                <div className="my-20">
                <CoverImg img={img01} title={'salads'} subTitle={'Would you like to try a salad?'}></CoverImg>
                </div>
                    <Container>
                        <MenuCategory items={salad}></MenuCategory>
                    </Container>

                <div className="my-20">
                <CoverImg img={img01} title={'drinks'} subTitle={'Would you like to try a drink?'}></CoverImg>
                </div>
                <Container>
                    <MenuCategory items={drinks}></MenuCategory>
                </Container>
                <div className="my-20">
                <CoverImg img={img01} title={'desserts'} subTitle={'Would you like to try a dessert?'}></CoverImg>
                </div>
                <Container>
                    <MenuCategory items={dessert}></MenuCategory>
                </Container>
                <div className="my-20">
                <CoverImg img={img01} title={'pizzas'} subTitle={'Would you like to try a pizza?'}></CoverImg>
                </div>
                <Container>
                    <MenuCategory items={pizza}></MenuCategory>
                </Container>
                <div className="my-20">
                <CoverImg img={img01} title={'soups'} subTitle={'Would you like to try a soup?'}></CoverImg>
                </div>
                <Container>
                    <MenuCategory items={soup}></MenuCategory>
                </Container>

            </div>
        </div>
    );
};

export default OurMenu;