import { FaTrash, FaUserAlt } from "react-icons/fa";


const ItemsTable = ({ item, idx, hendlerDelateItem, hendlerUpdate}) => {
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
                            item?.userPosition === 'admin' ? <><p>admin</p></> : <><button onClick={() => hendlerUpdate(item)} className="btn bg-amber-500 text-white"><FaUserAlt></FaUserAlt></button></>
                        }
                    </td>
                    <th>
                        <button onClick={() => hendlerDelateItem(item)} className="btn bg-red-500 text-white"><FaTrash></FaTrash></button>
                    </th>
                </tr>
    );
};

export default ItemsTable;