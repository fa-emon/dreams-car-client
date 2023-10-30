import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const SpecificDetails = () => {
    const specificDetails = useLoaderData();
    const { name, image, short_description, price } = specificDetails;
    // console.log(specificDetails)

    const handleAddToCart = () => {
        const order = {
            name,
            image,
            price
        }

        fetch(`http://localhost:5000/orders`, {
            method: "POST",
            body: JSON.stringify(order),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if(data.insertedId){
                    toast.success('Your Order Added Successfully!');
                }
            });

    }

    return (
        <div className="hero min-h-screen bg-base-200 mt-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="max-w-md rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold heading-font">{name}</h1>
                    <p className="py-6 all-font">{short_description}</p>
                    <p className="py-6 all-font">Price: ${price}</p>
                    <button onClick={handleAddToCart} className="btn btn-primary border-0 all-font uppercase bg-pink-400 hover:bg-pink-700 hover:text-white text-black">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default SpecificDetails;