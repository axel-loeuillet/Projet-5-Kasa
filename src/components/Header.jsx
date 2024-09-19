import logokasa from "../assets/images/logoKasa.png";

const Header = () => {
    return (
        <div className="header">
            <img src={logokasa} alt="Logo Kasa" />
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>A propos</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header