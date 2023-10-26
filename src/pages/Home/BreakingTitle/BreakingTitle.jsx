import Marquee from "react-fast-marquee";


const BreakingTitle = () => {
    return (
        <div>
            <Marquee pauseOnHover speed={100}>
                <h2 className="text-red-600 all-font my-4">
                    Welcome to Dreams Car - Discover luxury with Audi and Mercedes-Benz, experience efficiency with Honda, innovation with Tesla, and reliability with Ford at Dreams Car.!
                </h2>
            </Marquee>
        </div>
    );
};

export default BreakingTitle;