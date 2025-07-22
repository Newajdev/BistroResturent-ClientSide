import MenuItem from './MenuItem';
import PriButton from '../../../components/PriButton';
import img01 from "../../../assets/menu/banner3.jpg"
import CoverImg from '../../../components/CoverImg';
import Container from '../../../layout/Container';


const MenuCategory = ({ items, navigate, title, subTitle }) => {

    return (
        <>
            {
                title ? <div className="my-20">
                    <CoverImg img={img01} title={title ? title : 'Our Menu'} subTitle={subTitle ? subTitle : 'Would you like to try a salad?'}></CoverImg>
                </div> : ''
            }
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {
                        items?.map(itme => <MenuItem key={itme._id} itmes={itme}></MenuItem>)
                    }
                </div>
                <div className='flex justify-center mt-16 gap-5'>
                    <PriButton title={"view full menu"} navigate={navigate ? navigate : `/ourshop/${title}`}></PriButton>
                </div>
            </Container>
        </>
    );
};

export default MenuCategory;