import Header from '../Header/Header';
import studioPic from '../../gallery/studio2.png';
import salaPic from '../../gallery/salaAttesa.jpg';
import Footer from '../Footer/Footer';
import './Home.css'

export default function Home() {
    return (
        <>
            <Header></Header>
            <div className='homePicsContainer'>
                <div className='studioPic'>
                    <img className='studio' src={studioPic} alt='studio'></img>
                </div>
                <div className='studioPic'>
                    <img className='studio' src={salaPic} alt='studio'></img>
                </div>
            </div>
            <div className='studioDescription'>
                Lo studio, situato presso i locali di Cascina Fontana, è posto al primo piano in un ampio 
                ambiente illuminato naturalmente dalla presenza di portefinestre ad arco.<br></br><br></br>
                Il locale è provvisto di servizi igienici e facilmente raggiungibile grazie alla presenza di un esteso 
                parcheggio gratuito appena al di fuori dell’ingresso.<br></br>
            </div>
            <div className='homeAnnuncio'>
                La struttura, data la grande disponibilità di spazio, offre l’opportunità, riservata ai professionisti
                sanitari di libera professione, di occupare uno o più studi adiacenti a quello dietistico.<br></br>
                L’affitto dell’area può avvenire in diverse modalità che possono essere concordate (affitto mensile stabile,
                occupazione saltuaria dell’area per uno o più giorni a settimana..) in modo da creare una team professionale
                a disposizione del prossimo e pronto a offrire un percorso completo sotto più punti di vista.<br></br>
                Per qualsiasi informazione aggiuntiva o per fissare una visita per visionare gli spazi non esitate a contattarmi!
            </div>
            <Footer></Footer>
        </>
    );
}