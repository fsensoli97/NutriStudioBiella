import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import profilePic1 from '../../gallery/laetitiaPic_1.jpeg'
import profilePic2 from '../../gallery/laetitiaPic_2.jpeg'
import './About.css';

export default function About() {
    return(
        <>
            <Header></Header>
            <div className='aboutContainer'>
                <div className='profilePic'>
                    <img className='profile' src={profilePic1} alt='profile'></img>
                </div>
                <div className='aboutText'>
                    Sono Laetitia Bof Dietista Nutrizionista.<br></br>
                    Ho frequentato il Liceo Scientifico Tradizionale, avendo fin da subito le idee molto chiare su cosa 
                    avrei voluto fare, infatti, dopo aver ricevuto il diploma ho subito iniziato a preparare il Test 
                    d’Ammissione al corso di Dietistica all’università degli Studi di Milano.
                </div>
            </div>
            <div className='aboutTextOnly'>
                Durante questo percorso 
                ho vissuto a Milano, il che mi ha permesso di venire in contatto con tante diverse mentalità, modi 
                di fare, ideologie e pensieri. Credo sia stato un percorso molto formativo, anche se impegnativo; 
                ha richiesto costanza, perseveranza e precisione.<br></br><br></br>
                Durante il periodo di formazione ho trascorso un anno al <b>Poliambulatorio Auxologico</b> in diverse 
                sedi, qui ho potuto perfezionare la tecnica ambulatoriale relativa al trattamento del sovrappeso e 
                dell’obesità da moderata a severa-morbigena (trattando anche la chirurgia bariatrica). Ho, inoltre, 
                avuto la fortuna di poter lavorare anche nel <i>Team del MAC</i> (macroattività ambulatoriale 
                complessa) un percorso terapeutico-riabilitativo per obesità che comprende un programma di 
                trattamento multidisciplinare il quale integra interventi di gruppo e individuali.<br></br>
                Ho trascorso anche un anno all’<b>ospedale Policlinico di Milano</b> dove ho avuto la possibilità di 
                ampliare le mie conoscenze e abilità nel trattamento di svariate patologie, tra cui: Diabete, 
                Dislipidemie (ipercolesterolemia, ipertrigliceridemia, basse HDL), Ipertensione, Malnutrizione 
                dovuta a malattie maggiori (malattie , epatopatie, insufficienza renale), disturbi del comportamento 
                alimentare.<br></br><br></br>
                Da sempre coltivo una grande passione per lo sport e l’ambiente sportivo in generale, per questo 
                ho deciso di frequentare un Master di specializzazione nell’ambito di <b>Nutrizione e Integrazione nel 
                soggetto sportivo</b>, Master con sede a Torino, riconosciuto dal ENSES (<i>European Sport Nutrition 
                Society</i>).
            </div>
            <div className='aboutContainer'>
                <div className='aboutText'>
                Per me Dieta (che significa “<span style={{backgroundColor: "#e6b3ff"}}>stile di vita</span>”) è varietà, gioco, equilibrio; vorrei trasmettere il 
                messaggio in cui stare “a dieta” <span style={{backgroundColor: "#e6b3ff"}}>non obbliga a rinunce</span>, evitamento o eliminazione ma piuttosto al 
                raggiungimento di buona <span style={{backgroundColor: "#e6b3ff"}}>consapevolezza</span> che permette di attuare scelte consone per non 
                rinunciare a nulla ma senza esagerare, non solo ma consente anche di vivere serenamente le 
                occasioni conviviali imparando <span style={{backgroundColor: "#e6b3ff"}}>l'autogestione</span>.<br></br>
                </div>
                <div className='profilePic'>
                    <img className='profile' src={profilePic2} alt='profile'></img>
                </div>
            </div>
            <div className='aboutTextOnly'>
                Ciò che è più importante, infatti, è imparare a <span style={{backgroundColor: "#ffb3d9"}}>dosare</span> correttamente gli alimenti nelle porzioni e 
                frequenze settimanali; se, poi, alla consapevolezza si aggiunge un tocco di curiosità e voglia di 
                sperimentare si può scoprire che anche “stando a dieta” si possono creare piatti e portate 
                gustose e soddisfacenti!<br></br><br></br>
                <span style={{backgroundColor: "#ffb3d9"}}>L’alimentazione è il mezzo che più di tutti ci permette di ottenere i nostri risultati senza dover 
                ricorrere a strumenti esterni,</span> un percorso alimentare seguito non ha nessun tipo di 
                controindicazione fornendo solo mezzi per il miglioramento della nostra condizione. La nutrizione 
                si presente come punto cruciale in diverse occasioni: <span style={{backgroundColor: "#ffb3d9"}}>
                miglioramento della composizione corporea, 
                perdita di grasso, aumento delle prestazioni sportive e lavorative, diminuzione dello stress e/o 
                dolore provocato da patologie croniche.
                </span>
            </div>
            <Footer></Footer>
        </>
    );
}