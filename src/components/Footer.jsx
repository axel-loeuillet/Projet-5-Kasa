import logoKasaFooter from "../assets/images/logoKasaFooter.svg";

const Footer = () => {
    return (
        <div className='footer'>
            <img src={logoKasaFooter} alt="logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer