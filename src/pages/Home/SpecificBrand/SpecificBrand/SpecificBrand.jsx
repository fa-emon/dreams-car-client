import { useLoaderData } from "react-router-dom";
import ShowModel from "../ShowModel/ShowModel";
import Advertise from "../Advertise/Advertise";


const SpecificBrand = () => {

    const specificBrand = useLoaderData();

    return (
        <>
            <Advertise></Advertise>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
                {
                    specificBrand.map(allModel => <ShowModel
                        key={allModel.name}
                        allModel={allModel}
                    >
                    </ShowModel>)
                }
            </div>
        </>

    );
};

export default SpecificBrand;