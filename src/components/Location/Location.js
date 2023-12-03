import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Location.css';

export default function Location() {
    return(
        <>
            <Header></Header>
            <div className='mapsDescription'>
                Posizionato accanto al comune di Cerrione (via Monte Bianco 49),
                a circa 10 minuti di macchina dal centro di Biella.<br></br>
                Ampia zona parcheggio proprio davanti all'ingresso.<br></br>
                Lo studio è situato al primo piano e provvisto di servizi igienici.<br></br>
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
