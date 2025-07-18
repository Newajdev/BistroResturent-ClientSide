import Banner from "../shared/navbar/banner/Banner";
import About from "./about/About";
import Category from "./category/Category";
import OurMenu from "./ourmenu/OurMenu";

const Home = () => {
    return (
        <div>
            <Category></Category>
            <About></About>
            <OurMenu></OurMenu>
        </div>
    );
};

export default Home;