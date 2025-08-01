import { FaTrash, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const ItemsTable = ({ item, idx, hendlerDelateItem}) => {
    return (
        <tr>
                    <th>
                        {idx + 1}
                    </th>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle h-16 w-16">
                                    <img
                                        src={item.image}
                                        alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.price}
                    </td>
                    <td>
                        {
                            item?.userPosition === 'admin' ? <><p>admin</p></> : <><button className="btn bg-amber-500 text-white"><Link to={`/deshboard/update/${item._id}`}><FaUserAlt></FaUserAlt></Link></button></>
                        }
                    </td>
                    <th>
                        <button onClick={() => hendlerDelateItem(item)} className="btn bg-red-500 text-white"><FaTrash></FaTrash></button>
                    </th>
                </tr>
    );
};

export default ItemsTable;