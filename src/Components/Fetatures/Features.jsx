import PropTypes from 'prop-types';
import { RiCheckboxCircleFill } from "react-icons/ri";
const Features = ({features}) => {
    return (
        <div>
            <p className='flex items-center gap-1'><RiCheckboxCircleFill />{features}</p>
        </div>
    );
};

Features.propTypes={
    features:PropTypes.string
}


export default Features;