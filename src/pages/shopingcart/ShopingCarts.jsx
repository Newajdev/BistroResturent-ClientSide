import Swal from 'sweetalert2';
import TableRow from '../../components/TableRow';
import useCart from '../../hooks/useCart';
import Container from "../../layout/Container"
import useAxiosSecure from '../../hooks/useAxiosSecure';



const ShopingCarts = () => {
    const [Cart, refetch] = useCart()
    const AxiosSecure = useAxiosSecure()


    const TotalPrice = Cart.reduce((Total, items) => Total + (items.price * items.quantity), 0)
    const TotalItems = Cart.reduce((Total, items) => Total + items.quantity, 0)

    const hendlerDelete = (id) => {

        console.log(id);


        Swal.fire({
            title: "Are you sure?",
            text: `You want to delate ${Cart.name}!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                AxiosSecure.delete(`/carts/${id}`)
                    .then((result) => {

                        if (result.data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()

                    })

            }
        });


    }

    return (
        <div>
            <div className='my-24 '>
                <Container >
                    <div className=''>
                        {
                            Cart.length ? <><div className="overflow-x-auto bg-gray-100 p-10 rounded-3xl">
                                <div className='flex justify-between mb-12'>
                                    <h2 className='text-3xl font-bold'>Total Items: {Cart.length}</h2>
                                    <h2 className='text-3xl font-bold'>Total Quantity: {TotalItems}</h2>
                                    <h2 className='text-3xl font-bold'>Total Price: {TotalPrice}</h2>
                                    <button className='btn bg-[#D1A054] text-xl font-bold'>Pay</button>
                                </div>
                                <table className="table">
                                    {/* head */}
                                    <thead className='bg-[#D1A054]'>
                                        <tr className=''>
                                            <th className='rounded-tl-2xl'>
                                                #
                                            </th>
                                            <th>Food Image</th>
                                            <th>Food Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th className='rounded-tr-2xl'>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Cart.map((item, index) => <TableRow key={item._id} item={item} index={index} hendlerDelete={hendlerDelete}></TableRow>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                            </> : <><div className='bg-gray-100 p-10 rounded-3xl'><div className='w-2/4 text-2xl font-semibold text-center mx-auto my-24 '>You Don't have any Items on Cart. Choose you Favorite Foods and Check out this page again</div></div></>

                        }
                    </div>
                </Container>
            </div>


        </div>
    );
};

export default ShopingCarts;