import PropTypes from 'prop-types';
const Link = ({link}) => {
    const {name, path}=link
    return (
        <div>
            <li className="mr-3 hover:bg-lime-400"><a href={path}>{name}</a></li>
        </div>
    );
};

Link.propTypes ={
    route: PropTypes.object
}

export default Link;