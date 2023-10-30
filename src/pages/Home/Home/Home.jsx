import Banner from "../Banner/Banner";
// import BrandList from "../BrandList/BrandList";
import BreakingTitle from "../BreakingTitle/BreakingTitle";
import BrandList from "../BrandList/BrandList";
import { useEffect, useState } from "react";

const Home = () => {
    const [allBrand, setallBrand] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allBrand`)
            .then(response => response.json())
            .then(data => {
                setallBrand(data)
            })
    }, [])

    const uniqueBrands = [...new Set(allBrand.map((allBrand) => allBrand.brand))];

    return (
        <div>
            <BreakingTitle></BreakingTitle>
            <Banner></Banner>
            <>
                <h2 className="heading-font text-center mt-6 uppercase text-3xl tracking-[.5em]">Brands</h2>
            </>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
                {uniqueBrands.map((brandName, index) => {
                    const brandEntry = allBrand.find((allBrand) => allBrand.brand === brandName);

                    return (
                        <BrandList key={index} brandEntry={brandEntry}></BrandList>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;