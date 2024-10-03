import Cards from "../components/Cards";
import annonce from "../../src/datas/annonces";

const Home = () => {
    return (
        <div className="Home">
            <div className="banner">
                <h1>Chez vous, partout et ailleurs</h1>
                <img src="./src/assets/images/banner.jpg" alt="Photo montrant une falaise" />
            </div>
            <div className="gallery">
                {annonce.map((annonce) => (
                    <Cards
                        key={annonce.id}
                        id={annonce.id}
                        cover={annonce.cover}
                        alt={annonce.title}
                        title={annonce.title} />
                ))}
            </div>
        </div>
    )
}

export default Home