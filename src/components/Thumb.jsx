import PropTypes from "prop-types";

const Thumb = ({ annonce }) => {
    return (
        annonce.map((annonce) => (
            <div className="thumb" key={annonce.id}>
                <img src={annonce.cover} alt={annonce.title} />
                <h3>{annonce.title}</h3>
            </div>
        ))
    );
};

Thumb.prototypes = {
    annonce: PropTypes.array.isRequired
}

export default Thumb