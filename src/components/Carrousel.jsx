import React, { useState } from 'react';
import PropTypes from "prop-types";

const Carrousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = pictures.length;
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    };
    return (
        <div className="carrousel-container">
            {totalImages > 1 && (
                <button className="prev" onClick={handlePrev}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
            )}
            <div className='slide'>
                <img
                    src={pictures[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="carrousel-image"
                />
            </div>
            {totalImages > 1 && (
                <div className="carrousel-counter">
                    {currentIndex + 1} / {totalImages}
                </div>
            )}
            {totalImages > 1 && (
                <button className="next" onClick={handleNext}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            )}
        </div >
    )
}

Carrousel.prototypes = {
    pictures: PropTypes.array.isRequired,
    autoScrollTime: PropTypes.number,
}

export default Carrousel