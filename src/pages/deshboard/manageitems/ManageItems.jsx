
import ItemsTable from '../../../components/itemsTable';
import SectionHeader from '../../../components/SectionHeader';
import useMenu from '../../../hooks/useMenu';

const ManageItems = () => {

    const [menu, , refetch] = useMenu()

    const hendlerDelateItem = (Item) => {
        alert(Item._id);
        
    }

    
    

    



    return (
        <>
            <SectionHeader subTitle={"Hurry Up!"} Title={"MANAGE ALL ITEMS"}></SectionHeader>
            <div>
                <div className="flex justify-between mx-32">
                    <h2 className="text-3xl font-bold">All Users</h2>
                    <h2 className="text-3xl font-bold">Total Users: {menu.length}</h2>
                </div>
                <div>
                    {/* ToDo: add a Searchbar Here */}
                </div>
                <div className="overflow-x-auto my-10">
                    <table className="table">
                        {/* head */}
                        <thead className=''>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Item Image</th>
                                <th>Recipe Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu?.map((item, idx) => <ItemsTable key={item._id} idx={idx} item={item} hendlerDelateItem={hendlerDelateItem}></ItemsTable>)
                            }
                        </tbody>
 
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageItems;