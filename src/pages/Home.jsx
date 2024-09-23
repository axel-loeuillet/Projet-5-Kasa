import Thumb from "../components/Thumb";
import annonce from "../../src/datas/annonce.json";

const Home = () => {
    return (
        <div className="Home">
            <div className="banner">
                <h1>Chez vous, partout et ailleurs</h1>
                <img src="./src/assets/images/banner.jpg" alt="Photo montrant une falaise" />
            </div>
            <div className="gallery">
                <Thumb annonce={annonce} />
            </div>
        </div>
    )
}

export default Home