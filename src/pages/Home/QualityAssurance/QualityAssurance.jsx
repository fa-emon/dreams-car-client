import image from '../../../assets/QualityAssurance/image.jpg'

const QualityAssurance = () => {
    return (
        <div className='flex mt-16'>
            <div className='w-1/2'>
                <h2 className='heading-font uppercase text-center text-3xl text-slate-600'>Quality First</h2>
                <div className='all-font flex flex-col my-16 text-lg text-justify pe-6'>
                    <p className='uppercase my-2'>Your taste is our first priority</p>
                    <p className='my-2'>Ensuring the Pinnacle of Performance and Reliability.Where Every Car Purchase is a Quality Assurance Experience</p>
                    <p className='my-2'>At Dreams Car, our pursuit of perfection extends beyond brand diversity. We are dedicated to upholding the highest standards of quality assurance to deliver vehicles that excel in performance, reliability, and safety.</p>
                </div>
            </div>

            <div className='w-1/2'>
                <img className='rounded-md' src={image} alt="" />
            </div>
        </div>
    );
};

export default QualityAssurance;