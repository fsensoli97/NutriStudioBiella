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
                        <FontAwesomeIcon icon={faPhone} size="2x"></FontAwesomeIcon>
                    </div>
                    <div className="contactValue">
                        <a href="tel:+39 3889010030">+39 3889010030</a>
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
                        <FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon>
                    </div>
                    <div className="contactValue">
                        <a target="_blank" rel='noopener noreferrer' href="https://www.instagram.com/nutristudiobiella/">@nutristudiobiella</a> 
                    </div>
                </div>
                <div className="footerItem">
                    <div className="contactType">
                        <FontAwesomeIcon icon={faClock} size="2x"></FontAwesomeIcon>
                    </div>
                    <div className="contactValue">
                        Lun-Ven: 8:30-18:30
                    </div>
                </div>
            </div>
            <div className="pIVA">
                <div className="pIVAitem">
                    <div className="contactValue">
                        <div style={{marginBottom: "1vh" }}>P. IVA: 02790510024</div>
                        <>{/*Iscritta regolarmente all'albo "texttext"*/}</>
                    </div>
                </div>
            </div>
        </>
    );
}