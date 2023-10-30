import { useLoaderData } from "react-router-dom";
import ShowOrder from "../ShowOrder/ShowOrder";


const MyCart = () => {
    const allOrder = useLoaderData();

    return (
        <div>
            <h2 className="heading-font text-3xl text-center my-6">Total {allOrder.length} orders are available</h2>
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
                                allOrder.map(orders => <ShowOrder
                                    key={orders._id}
                                    orders={orders}
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