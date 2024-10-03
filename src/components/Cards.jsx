import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cards = ({ id, cover, title }) => {
    return (
        <Link to={`/annonce/${id}`} className="cards">
            <img src={cover}></img>
            <h3>{title}</h3>
        </Link>
    );
};

Cards.prototypes = {
    cover: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}

export default Cards