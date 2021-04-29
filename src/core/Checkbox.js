import React, { useState } from "react";
import './../CSS/checkbox.css';

const CheckBox = ({ categories, handleFilters }) => {
    // eslint-disable-next-line
    const [value, setValue] = useState(0);

    const handleChange = event => {
        handleFilters(event.target.value);
        setValue(event.target.value);
    };

    return categories.map((c, i) => (
        <div className="col-md-2 col-sm-4 col-xs-4" style={{height:"max-content"}}>
        <div key={i} className="category-toolbar form-check form-check-inline my-2 w-100 bg-success rounded border">
        <label className="form-check-label py-2 d-inline rounded shadow-lg font-weight-bold text-white w-100 text-center">
            <input
                onChange={handleChange}
                value={`${c._id}`}
                name={c}
                type="radio"
                className="mr-2 ml-4"
            />
            {c.name}
        </label>
        </div>
        </div>
    ));
};

export default CheckBox;
