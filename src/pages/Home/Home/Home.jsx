import Banner from "../Banner/Banner";
// import BrandList from "../BrandList/BrandList";
import BreakingTitle from "../BreakingTitle/BreakingTitle";
import brandData from '../../../../public/brandData.json'
import BrandList from "../BrandList/BrandList";

const Home = () => {
    const uniqueBrands = [...new Set(brandData.map((allBrand) => allBrand.brand))];

    return (
        <div>
            <BreakingTitle></BreakingTitle>
            <Banner></Banner>
            <>
                <h2 className="heading-font text-center mt-6 uppercase text-3xl tracking-[.5em]">Brands</h2>
            </>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
                {uniqueBrands.map((brandName, index) => {
                    const brandEntry = brandData.find((allBrand) => allBrand.brand === brandName);

                    return (
                        <BrandList key={index} brandEntry={brandEntry}></BrandList>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;