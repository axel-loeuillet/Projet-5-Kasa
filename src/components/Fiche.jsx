import PropTypes from "prop-types";

const StarRating = ({ rating }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<i key={i} className="fa-solid fa-star"></i>);
            } else {
                stars.push(<i key={i} className="fa-duotone fa-solid fa-star"></i>);
            }
        }
        return stars;
    };
    return <div className="star-rating">{renderStars()}</div>;
};

const Fiche = ({ annonce }) => {
    return (
        <div className="info-logement">
            <div className="title">
                <h1>{annonce.title}</h1>
                <h2>{annonce.location}</h2>
            </div>
            <div className="host">
                {annonce.host.name}
                <img src={annonce.host.picture} alt=""></img>
            </div>
            <div className="tags">
                {annonce.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
            <div className="rating">
                <StarRating rating={annonce.rating} />
            </div>
        </div>
    )
}

Fiche.prototypes = {
    annonce: PropTypes.object.isRequired,
}

export default Fiche