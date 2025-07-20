import CoverImg from '../../components/CoverImg';
import shopimg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from '../../layout/Container';
import useMenu from '../../hooks/useMenu';
import { useState } from 'react';
import FoodCard from '../../components/FoodCard';
import { useParams } from 'react-router-dom';

const OurShop = () => {
    const [menus] = useMenu()
    const categories = [...new Set((menus?.map(item => item.category)))]
    const {category} = useParams()

    const indexNum = categories?.indexOf(category)
    
    console.log(typeof(indexNum));
    

    const [tabIndex, setTabIndex] = useState(category)

    console.log(tabIndex);

    

    // categories.unshift(categories.splice(5, 1)[0])

    const categoryWiseData = categories.map(cat => {
        return menus.filter(item => item.category === cat);
    });

    return (
        <div>
            <CoverImg img={shopimg} title={'our shop'}></CoverImg>

            <div className='my-20'>
                <Container>
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            {
                                categories?.map(item => <Tab key={item._id} className={"tabs"}>{item}</Tab>)
                            }
                        </TabList>

                        {
                            categoryWiseData?.map((items, idx) =>
                            <TabPanel key={idx}>
                                <div className='grid grid-cols-3 gap-8 my-6'>
                                    {
                                        items.map(item =>
                                            <FoodCard item={item}></FoodCard>
                                        )
                                    }
                                </div>
                            </TabPanel>)
                        }

                    </Tabs>
                </Container>
            </div>
        </div>
    );
};

export default OurShop;