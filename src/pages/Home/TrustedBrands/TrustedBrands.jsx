import ford from '../../../assets/Award/ford.png'
import tesla from '../../../assets/Award/tesla.png'
import honda from '../../../assets/Award/honda.png'
import audi from '../../../assets/Award/audi.png'
import toyota from '../../../assets/Award/toyota.png'
import ferari from '../../../assets/Award/ferari.png'

const TrustedBrands = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className='my-16'>
            <h2 className='heading-font text-3xl font-extrabold text-center'>Most awarded brands of {currentYear}</h2>
            
            <div className="flex justify-evenly items-center my-6">
                <img className='rounded h-36 w-36' src={ford} alt="" />
                <img className='rounded h-36 w-36' src={tesla} alt="" />
                <img className='rounded h-36 w-36' src={honda} alt="" />
                <img className='rounded h-36 w-36' src={audi} alt="" />
                <img className='rounded h-36 w-36' src={toyota} alt="" />
                <img className='rounded h-36 w-36' src={ferari} alt="" />
            </div>
        </div>
    );
};

export default TrustedBrands;