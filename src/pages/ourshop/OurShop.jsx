import CoverImg from '../../components/CoverImg';
import shopimg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from '../../layout/Container';
import useMenu from '../../hooks/useMenu';
import { useEffect, useState } from 'react';
import FoodCard from '../../components/FoodCard';
import { Link, useParams } from 'react-router-dom';

const OurShop = () => {
    
    const [menus] = useMenu()
    
    const categories = [...new Set((menus?.map(item => item.category)))]
    console.log(categories);
    
    const { category } = useParams();

    const [tabIndex, setTabIndex] = useState(0)

    useEffect(() => {
        const index = categories.indexOf(category);
        setTabIndex(index !== -1 ? index : 0);
    }, [category , categories]);


    const categoryWiseData = categories.map(cat => {
        return menus.filter(item => item.category === cat);
    });



    return (
        <div>
            <CoverImg img={shopimg} title={'our shop'}></CoverImg>

            <div className='my-20'>
                <Container>
                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            {
                                categories?.map((item, id) => <Tab name='item' key={id} className={"tabs"}><Link to={`/ourshop/${item}`}>{item}</Link></Tab>)
                            }
                        </TabList>

                        {
                            categoryWiseData?.map((items, idx) =>
                                <TabPanel key={idx}>
                                    <div className='grid grid-cols-3 gap-8 my-6'>
                                        {
                                            items.map(item =>
                                                <FoodCard key={item._id} item={item}></FoodCard>
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