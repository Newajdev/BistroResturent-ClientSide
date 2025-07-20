import CoverImg from "../../components/CoverImg";
import img01 from "../../assets/menu/banner3.jpg"
import SectionHeader from '../../components/SectionHeader'
import Container from "../../layout/Container";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "../shared/category/MenuCategory";
import { useState } from "react";

const ShopMenu = () => {
   const [tabIndex, setTabIndex] = useState(0)
    const [menus] = useMenu()

    const categories = [...new Set((menus?.map(item => item.category)))]
    // categories.unshift(categories.splice(5, 1)[0])

    const categoryWiseData = categories.map(cat => {
        return menus.filter(item => item.category === cat);
    });

    const AllInfo = {
        categories,
        categoryWiseData
    }

    

    return (
        <div>
            <CoverImg img={img01} title={'Our Menu'} subTitle={'Would you like to try a dish?'}></CoverImg>
            <div className="my-28">
                
                <Container>
                    <SectionHeader subTitle={"Don't Miss"} Title={"TODAY'S OFFER"}></SectionHeader>
                </Container>

                    

            </div>
        </div>
    );
};

export default ShopMenu;