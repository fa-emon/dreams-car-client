

const ShowModel = ({ allModel }) => {
    const { name, image, brand, price, ratings } = allModel;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="w-full h-60 object-cover" src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title heading-font">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <div className="all-font">
                    <p>Brand Name: {brand}</p>
                    <div className="flex justify-between my-2">
                        <p>Price: $ {price}</p>
                        <p>Ratings: {ratings}</p>
                    </div>
                    <div className="card-actions justify-between">
                        <button className="bg-teal-400 hover:bg-teal-700 hover:text-white rounded-md p-2 px-4 uppercase my-2 btn-sm">details</button>
                        <button className="bg-pink-400 hover:bg-pink-700 hover:text-white rounded-md p-2 px-4 uppercase my-2 btn-sm">update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowModel;