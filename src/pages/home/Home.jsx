import Container from "../../layout/Container";
import Banner from "../shared/navbar/banner/Banner";
import About from "./about/About";
import Category from "./category/Category";
import Contact from "./contect/Contact";
import PopulerMenu from "./ourmenu/PopulerMenu";
import Recommends from "./recommend/Recommends";
import Special from "./special/Special";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Container>
            <Category></Category>
            <About></About>
            <PopulerMenu></PopulerMenu>
            <Contact></Contact>
            <Recommends></Recommends>
            </Container>

            <Special></Special>
            
            <Container>
                <Testimonial></Testimonial>
            </Container>
        </div>
    );
};

export default Home;