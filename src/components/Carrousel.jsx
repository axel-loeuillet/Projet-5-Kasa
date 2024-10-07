import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import '../sass/carrousel.scss';

const Carrousel = ({ pictures, autoScrollTime = 4000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('');
    const totalImages = pictures.length;


    const handleNext = () => {
        setSlideDirection('right');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    const handlePrev = () => {
        setSlideDirection('left');
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    };

    // Mise en place du défilement automatique
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, autoScrollTime);

        // Nettoyage de l'intervalle pour éviter les bugs de mémoire
        return () => clearInterval(interval);
    }, [currentIndex, autoScrollTime]);

    return (
        <div className="carrousel-container">
            {totalImages > 1 && (
                <button className="prev" onClick={handlePrev}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
            )}
            <div className={`slide ${slideDirection}`}>
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