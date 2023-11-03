import { useLoaderData } from "react-router-dom";
import ShowOrder from "../ShowOrder/ShowOrder";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";


const MyCart = () => {
    const allOrder = useLoaderData();
    const [order, setOrder] = useState(allOrder);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/orders/${id}`, {
                    method: "DELETE",
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your order has been deleted.',
                                'success'
                            )
                            const remaining = order.filter(order => order._id !== id);
                            setOrder(remaining);
                        }
                    });
            }
        })
    }

    useEffect(() => {
        setOrder(allOrder)
    }, [allOrder])

    return (
        <div>
            <h2 className="heading-font text-3xl text-center my-6">Total {order.length} orders are available</h2>
            <>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-lg">IMAGE</th>
                                <th className="text-lg">NAME</th>
                                <th className="text-lg">PRICE</th>
                                <th className="text-lg">DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order.map(orders => <ShowOrder
                                    key={orders._id}
                                    orders={orders}
                                    handleDelete={handleDelete}
                                ></ShowOrder>)
                            }
                        </tbody>
                    </table>
                </div>
            </>
        </div>
    );
};

export default MyCart;