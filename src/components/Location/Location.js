import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Location.css';

export default function Location() {
    return(
        <>
            <Header></Header>
            <div className='mapsDescription'>
            Il locale è situato a Cerrione (BI) in via Cascina Zanga 8.<br></br>
            Proprio di fianco al comune di Cerrione, infatti in caso il navigatore non trovasse la via consiglio di 
            inserire “via Monte Bianco 49” (indirizzo del comune confinante).<br></br><br></br>
            Come raggiungere la struttura:
            <ul>
                <li className='listItem'>
                    Dal centro di biella seguire la tangenziale ovest fino al suo termine; all’incrocio proseguire dritto 
                    attraversando l’incrocio e entrando nel piazzale privato (non girare né a destra né a sinistra).<br></br><br></br>
                </li>
                <li>
                    Dall’autostrada A4 prendere l’uscita di santhia proseguendo in direzione biella fino a raggiungere 
                    la località di Vergnasco, qui alla prima rotonda alla francese girare a sinistra e dopo 1,2 km girare 
                    a sinistra entrando nel piazzale privato.
                </li>
            </ul>
            </div>
            <div className="mapsContainer">
                <iframe 
                    className="mapsLocation"
                    title="mapsLocation" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4770.848210495082!2d8.069685826421624!3d45.48128706957119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786260e78e9ec0b%3A0xa6a2baffcbf253b!2sVia%20Monte%20Bianco%2C%2049%2C%2013882%20Cerrione%20BI!5e0!3m2!1sit!2sit!4v1701601641874!5m2!1sit!2sit"
                    width="600"
                    height="400"
                    allowfullscreen=""
                    loading="eager" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <Footer></Footer>
        </>
    );
}
