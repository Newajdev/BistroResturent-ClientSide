
import Swal from 'sweetalert2';
import ItemsTable from '../../../components/itemsTable';
import SectionHeader from '../../../components/SectionHeader';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useMenu from '../../../hooks/useMenu';

const ManageItems = () => {
    const AxiosSecure = useAxiosSecure()

    const [menu, , refetch] = useMenu()

    const hendlerDelateItem = (Item) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You want to DELETE ${Item.name} this Food!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                AxiosSecure.delete(`/menu/${Item._id}`)
                    .then(res => {
                        console.log(res);
                        
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${Item.name} Successfully Deleted`,
                                showConfirmButton: false,
                                timer: 1000
                            });
                            refetch()
                        }
                    })
            }
        });


    }








    return (
        <>
            <SectionHeader subTitle={"Hurry Up!"} Title={"MANAGE ALL ITEMS"}></SectionHeader>
            <div>
                <div className="flex justify-between mx-32">
                    <h2 className="text-3xl font-bold">All Users</h2>
                    <h2 className="text-3xl font-bold">Total Users: {menu?.length}</h2>
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