import { useParams } from "react-router-dom";
import annonces from "../datas/annonces.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const findAnnonceId = (id) => {
    return annonces.find((annonce) => annonce.id === id);
}

const Fiche = () => {
    const { id } = useParams();
    const annonce = findAnnonceId(id);
    const pictures = annonce.pictures;
    return (
        <>
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
                <p>{annonce.rating}</p>
            </div>
            <div className="carousel">
                <Carousel showThumbs={false} showIndicators={false} renderStatus={(current, total) => `${current} / ${total}`}>
                    {pictures.map((picture, index) => (
                        <div className="slide" key={index}>
                            <img src={picture} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </Carousel>

            </div>


        </>
    )
}

export default Fiche