import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import './Recensione.css'

export default function Recensione({user, rating, msg}) {

    let stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<FontAwesomeIcon className="ratingStar" icon={faStar}></FontAwesomeIcon>);
    }

    return(
        <div className="recensioneContainer">
            <div className="utenteRecensione">{user}</div>
            <div className="ratingStart">{stars}</div>
            <div className="recensioneMsg">{msg}</div>
        </div>
    );
}