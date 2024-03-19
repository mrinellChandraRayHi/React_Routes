import PropTypes from 'prop-types'
import Features from '../Fetatures/Features';
const SinglePriceOptoon = ({option}) => {
    const {id, name, price, features}=option
    return (
        <div className='flex flex-col bg-blue-300 rounded-lg p-4 text-black'>
            <h2>
                <span className='text-5xl text-bold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl'>{name}</h4>
            <div className='mt-3 flex-grow'>
                {
                    features.map((features, idx)=><Features features={features}  key={idx}/>)
                }
            </div>
            <button className='w-full py-3 bg-white text-black rounded-lg mt-7 font-bold text-xl' type="button">Buy Now</button>
        </div>
    );
};

SinglePriceOptoon.propTypes={
    option:PropTypes.object
}

export default SinglePriceOptoon;