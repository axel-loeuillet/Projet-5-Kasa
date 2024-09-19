import Thumb from "../../Thumb";
import annonce from "../../src/datas/annonce.json";

const Home = () => {
    return (
        <div className="Home">
            <div className="banner">
                <img src="./src/assets/images/banner.jpg" alt="banniere montrant une falaise" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="gallery">
                <Thumb annonce={annonce} />
            </div>
        </div>
    )
}

export default Home