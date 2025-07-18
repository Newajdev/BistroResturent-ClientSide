import Container from "../../layout/Container";
import Banner from "../shared/navbar/banner/Banner";
import About from "./about/About";
import Category from "./category/Category";
import Contact from "./contect/Contact";
import OurMenu from "./ourmenu/OurMenu";
import Recommends from "./recommend/Recommends";
import Special from "./special/Special";

const Home = () => {
    return (
        <div>
            <Container>
            <Category></Category>
            <About></About>
            <OurMenu></OurMenu>
            <Contact></Contact>
            <Recommends></Recommends>
            </Container>
            <Special></Special>
        </div>
    );
};

export default Home;