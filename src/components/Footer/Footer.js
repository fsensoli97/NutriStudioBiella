import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone, faClock } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footerItem">
                    <div className="contactType">
                        <a href="tel:+39 3487380120"><FontAwesomeIcon icon={faPhone} size="2x"></FontAwesomeIcon></a>
                    </div>
                    <div className="contactValue">
                        +39 3487380120
                    </div>
                </div>
                <div className="footerItem">
                    <div className="contactType">
                        <FontAwesomeIcon icon={faMailBulk} size="2x"></FontAwesomeIcon>
                    </div>
                    <div className="contactValue" onClick={() => window.location = 'mailto:nutristudiobiella@gmail.com'}>
                        nutristudiobiella@gmail.com
                    </div>
                </div>
                <div className="footerItem">
                    <div className="contactType">
                        <a target="_blank" rel='noopener noreferrer' href="https://www.facebook.com/"><FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon></a>
                    </div>
                    <div className="contactValue">
                        @nutristudiobiella
                    </div>
                </div>
                <div className="footerItem">
                    <div className="contactType">
                        <FontAwesomeIcon icon={faClock} size="2x"></FontAwesomeIcon>
                    </div>
                    <div className="contactValue">
                        Lun-Ven: 8:00-18:00
                    </div>
                </div>
            </div>
        </>
    );
}