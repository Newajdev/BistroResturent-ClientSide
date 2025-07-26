import { FaTrash } from "react-icons/fa";


const TableRow = ({ item, index, hendlerDelete }) => {
    
    const { _id, name, image, price, quantity } = item;
    

    
    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-20 w-20">
                            <img
                                src={image}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>
                {quantity}
            </td>
            <td>{price}</td>
            <th>
                <button onClick={() => hendlerDelete(_id)} className="btn text-xl bg-red-500 text-white"><FaTrash /></button>
            </th>
        </tr>
    );
};

export default TableRow;