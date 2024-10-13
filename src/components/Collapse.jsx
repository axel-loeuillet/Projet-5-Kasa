import React, { useState } from 'react';
import PropTypes from "prop-types";

const Collapse = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='collapse'>
            <div className='collapse-bar' onClick={toggleCollapse} >
                {title}
                <div className="icon-container">
                    <i className={`fa-solid fa-chevron-up ${isOpen ? 'rotate' : ''}`}></i>
                </div>

            </div>
            <div className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
                {description}
            </div>
        </div>
    );
};

Collapse.prototypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Collapse;
