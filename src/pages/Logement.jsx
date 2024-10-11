import React, { useEffect } from "react";
import Fiche from "../components/Fiche"
import { useParams, useNavigate } from "react-router-dom";
import annonce from "../datas/annonces.json";
import Collapse from "../components/Collapse";
import Carrousel from "../components/Carrousel";

const findAnnonceId = (id) => {
    return annonce.find((annonce) => annonce.id === id);
}
const Logement = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const annonce = findAnnonceId(id);

    useEffect(() => {

        if (!annonce) {
            navigate('/error');
        }
    }, [annonce, navigate]);

    if (!annonce) {
        return null;
    }
    const equipmentsList = (
        <ul>
            {annonce.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
            ))}
        </ul>
    );
    return (
        <div className="info-logement">
            <div>
                <Carrousel pictures={annonce.pictures} />
                <Fiche annonce={annonce} />
                <div className="collapse-section">
                    <Collapse title="Description" description={annonce.description} />
                    <Collapse title="Équipements" description={equipmentsList} />
                </div>

            </div>

        </div>
    )
}

export default Logement