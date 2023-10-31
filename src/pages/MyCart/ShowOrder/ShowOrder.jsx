import { MdDelete } from 'react-icons/md';

const ShowOrder = ({ orders, handleDelete }) => {
    const { _id, name, image, price } = orders;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-md w-28 h-28">
                            <img src={image} />
                        </div>
                    </div>
                </div>
            </td>
            <td className="heading-font font-semibold text-lg">
                {name}
            </td>
            <td className='all-font text-lg'>
                ${price}
            </td>
            <th>
                <MdDelete onClick={() => handleDelete(_id)} className='text-3xl hover:text-red-600'></MdDelete>
            </th>
        </tr>
    );
};

export default ShowOrder;