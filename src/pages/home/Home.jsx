import Banner from "../shared/navbar/banner/Banner";
import About from "./about/About";
import Category from "./category/Category";
import Contact from "./contect/Contact";
import OurMenu from "./ourmenu/OurMenu";
import Recommends from "./recommend/Recommends";

const Home = () => {
    return (
        <div>
            <Category></Category>
            <About></About>
            <OurMenu></OurMenu>
            <Contact></Contact>
            <Recommends></Recommends>
        </div>
    );
};

export default Home;