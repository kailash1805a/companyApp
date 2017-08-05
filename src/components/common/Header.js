/**
 * Author: Kailash kumar
 */
import React from 'react';

/*It's a common presentational component.*/
const Header = ({ value, onChange, onChangeType, onSearch }) => {
    return (
        <div className="container raw">
            <div className="col-md-3">
                <select id="searchtype" name="searchtype" className="form-control" onClick={onChangeType}>
                    <option value="0">All</option>
                    <option value="1">Company Name</option>
                    <option value="2">Buisness Id</option>
                </select>
            </div>
            <div className="col-md-3">
                <input
                    id="searchinput"
                    type="text"
                    name="search"
                    className="form-control"
                    placeholder="Enter company name or buisness id..."
                    value={value}
                    onChange={onChange}></input>
            </div>
            <div className="col-md-2">
                <input
                    type="button"
                    title="Search"
                    className="btn btn-primary"
                    onClick={onSearch}
                    value="Search"
                />
            </div>
        </div>
    );
};

Header.propTypes = {
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSearch: React.PropTypes.func.isRequired
};

export default Header;
