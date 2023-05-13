
import { PropTypes } from 'prop-types';
const Filter = ({ filter, onChange }) => (

    <label>
        Find contacts by name
        <input
            type="text"
            value={filter}
            onChange={onChange}
        >

        </input>
    </label>
);

export default Filter;
 
Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func,
};