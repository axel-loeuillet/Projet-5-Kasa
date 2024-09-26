import React, { useState } from 'react';
import PropTypes from "prop-types";

const Collapse = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='collapse'>

            <div className='collapse-bar'>
                {title}

                <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} onClick={toggleCollapse}></i>
            </div>

            {isOpen && (
                <div className="collapse-content">
                    {description}
                </div>
            )}
        </div>
    );
};

Collapse.prototypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Collapse;
