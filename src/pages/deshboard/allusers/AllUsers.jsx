import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUserAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";


const AllUsers = () => {
    const { user: currentUser } = useAuth()
    
   
    const CurrentEmail = currentUser?.email
    
    
    


    const AxiosSecure = useAxiosSecure()
    const { data: users, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await AxiosSecure('/users');
            return res.data;

        }
    })
    const hendlerMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: `You want Make ${user.Name} Admin!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "White your Emaill Address",
                    input: "text",
                    inputAttributes: {
                        autocapitalize: "off"
                    },
                    confirmButtonText: "Delate",
                    showLoaderOnConfirm: true,
                }).then((result) => {
                    const importedEmail = result.value
                                        
                    if ((importedEmail.toLowerCase() === CurrentEmail.toLowerCase())) {
                        AxiosSecure.patch(`/users/${user._id}`)
                        .then(()=> {
                            Swal.fire({
                            title: "Maked Admin",
                            text: `${user.Name} No a Admin`,
                            icon: "success"
                        });
                        refetch()
                        }

                        )
                        .catch(err => alert('Delection Filed:', err.message))
                        
                    }else{
                        Swal.fire({
                        title: "Invalid Email!",
                        text: "Your Email is not match",
                        icon: "error"
                    });
                    }
                    

                });

                
            }
        });

    }

    const hendlerDelateUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: `You want to Delate ${user.Name}!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "White your Emaill Address",
                    input: "text",
                    inputAttributes: {
                        autocapitalize: "off"
                    },
                    confirmButtonText: "Delate",
                    showLoaderOnConfirm: true,
                }).then((result) => {
                    
                    
                    
                    const importedEmail = result.value
                    if ((importedEmail === CurrentEmail)) {
                        AxiosSecure.delete(`/users/${user._id}`)
                        .then(()=> {
                            Swal.fire({
                            title: "User Deleted!",
                            text: `${user.Name} this user are not allow to use this app`,
                            icon: "success"
                        });
                        refetch()
                        }

                        )
                        .catch(err => alert('Delection Filed:', err.message))
                        
                    }else{
                        Swal.fire({
                        title: "Invalid Email!",
                        text: "Your Email is not match",
                        icon: "error"
                    });
                    }
                    

                });

                
            }
        });

    }

    return (
        <div>
            <div className="flex justify-between mx-32">
                <h2 className="text-3xl font-bold">All Users</h2>
                <h2 className="text-3xl font-bold">Total Users: {users?.length}</h2>
            </div>
            <div className="overflow-x-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, idx) =>
                                <>
                                    <tr key={idx}>
                                        <th>
                                            {idx + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={user.ImageURL}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {user.Name}
                                        </td>
                                        <td>
                                            {user.Email}
                                        </td>
                                        <td>
                                            {
                                                user?.userPosition === 'admin' ? <><p>admin</p></> : <><button onClick={() => hendlerMakeAdmin(user)} className="btn bg-amber-500 text-white"><FaUserAlt></FaUserAlt></button></>
                                            }
                                        </td>
                                        <th>
                                            <button onClick={() => hendlerDelateUser(user)} className="btn bg-red-500 text-white"><FaTrash></FaTrash></button>
                                        </th>
                                    </tr>
                                </>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUsers;