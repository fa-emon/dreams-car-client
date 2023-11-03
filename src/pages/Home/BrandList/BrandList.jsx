import { useNavigate } from 'react-router-dom';

const BrandList = ({ brandEntry }) => {

    const navigate = useNavigate();

    const handleBrand = () => {
        navigate(`/allBrand/${brandEntry.brand}`)
    }

    return (
        <div onClick={handleBrand} className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img className="w-full h-52 object-cover transform hover:scale-110 transition-transform duration-300" src={brandEntry.image} alt="Car" />
            </figure>
            <div className="card-body">
                <p className="all-font text-xl">{brandEntry.name}</p>
            </div>
        </div>
    );
};

export default BrandList;