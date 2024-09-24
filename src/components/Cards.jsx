import PropTypes from "prop-types";

const Cards = ({ annonce }) => {
    return (
        annonce.map((annonce) => (
            <div className="cards" key={annonce.id}>
                <img src={annonce.cover} alt={annonce.title} />
                <h3>{annonce.title}</h3>
            </div>
        ))
    );
};

Cards.prototypes = {
    annonce: PropTypes.array.isRequired
}

export default Cards