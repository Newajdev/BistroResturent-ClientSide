import { FaTrash, FaUserAlt } from "react-icons/fa";

const UsersTable = ({ user, idx, hendlerDelateUser, hendlerMakeAdmin }) => {
    return (
        <tr>
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
    );
};

export default UsersTable;