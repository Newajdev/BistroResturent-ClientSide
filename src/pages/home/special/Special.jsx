import SectionHeader from '../../../components/SectionHeader'
import ReacipeImg from "../../../assets/home/featured.jpg"
import Container from '../../../layout/Container';
const Special = () => {
    return (
        <div className='Special h-[848px] text-white mb-28 bg-fixed'>
            <div className='bg-[#0000008a] w-full h-full flex items-center'>
                <Container>
                    <SectionHeader subTitle={'Check it out'} Title={'FROM OUR MENU'}></SectionHeader>
                    <div className='flex gap-16 justify-center items-center'>
                        <img className='w-[648px]' src={ReacipeImg} alt="" />
                        <div>
                            <h4 className='text-2xl'>March 20, 2023 <br /> WHERE CAN I GET SOME?</h4>
                            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <div className="card-actions mt-6">
                                <button className='text-xl font-medium uppercase px-4 py-2 bg-transparent text-center text-white border-b-3 border-b-white rounded-2xl hover:bg-[#D99904] hover:border-none duration-500'>add to cart</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Special;