
import SectionHeader from '../../../components/SectionHeader'
import RecommendedITem from './RecommendedITem';

const Recommends = () => {
    return (
        <div className='mb-32'>
            <SectionHeader subTitle={'Should Try'} Title={'Chef Recommends'}></SectionHeader>

            <div className='flex justify-between'>
                <RecommendedITem></RecommendedITem>
                <RecommendedITem></RecommendedITem>
                <RecommendedITem></RecommendedITem>
            </div>

        </div>
    );
};

export default Recommends;