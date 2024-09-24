import Cards from "../components/Cards";
import annonce from "../../src/datas/annonce.json";

const Home = () => {
    return (
        <div className="Home">
            <div className="banner">
                <h1>Chez vous, partout et ailleurs</h1>
                <img src="./src/assets/images/banner.jpg" alt="Photo montrant une falaise" />
            </div>
            <div className="gallery">
                <Cards annonce={annonce} />
            </div>
        </div>
    )
}

export default Home