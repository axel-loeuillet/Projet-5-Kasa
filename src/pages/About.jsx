import Collapse from "../components/Collapse";
import collapseData from "../../src/datas/collapseData";

const About = () => {
    return (
        <div className="About">
            <div className="about-banner">
                <img src="src/assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg" alt="Magnifique paysage de montagnes et de forêts" />
            </div>
            <div className="section-collapse">
                {collapseData.map((data, i) => (
                    <Collapse key={i} title={data.title} description={data.content} />
                ))}

            </div>
        </div>
    )
}

export default About