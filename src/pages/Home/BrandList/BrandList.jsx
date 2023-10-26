

const BrandList = ({ brandEntry }) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img className="w-full h-52 object-cover" src={brandEntry.image} alt="Car" />
            </figure>
            <div className="card-body">
                <p className="all-font">{brandEntry.name}</p>
            </div>
        </div>
    );
};

export default BrandList;