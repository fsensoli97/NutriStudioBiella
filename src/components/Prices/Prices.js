import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Prices.css'

export default function Prices() {
    return (
        <>
            <Header></Header>
            <div className="pricesContainer">
                <div className="cosaPortare">
                    <div style={{fontSize: "large"}}>È necessario portare con se:</div>
                    <ul>
                        <li className="listItem">Esami del sangue (effettuati entro gli ultimi 12 mesi).</li>
                        <li className="listItem">Referto medico inerente a eventuali patologie in corso.</li>
                        <li className="listItem">Impegnativa scritta dal medico di base per “visita dietistica” (che può essere compilata dal 
                            medico anche online).
                        </li>
                    </ul> 
                </div>
                <div className="pricesTitle">
                    Tipologie di percorsi:
                </div>
                <div className="pricesDescription">
                    <div className="percorsoTitle">1. PERCORSO SINGOLO</div>
                    Una prima visita in cui verrà svolta anamnesi completa (storica e 
                    alimentare) valutazione dello stato nutrizionale, calcolo degli introiti e verifica delle abitudini, 
                    anamnesi antropometrica, calcolo della composizione corporea tramite bioimpedenziometria.<br></br> 
                    <u>È qui compreso</u> un secondo incontro per la consegna del piano nutrizionale strutturato 
                    appositamente secondo le necessità mostrate.<br></br>
                    <u>Non è compreso:</u> eventuale ricalcolo del piano 
                    nutrizionale per cambio esigenze, supporto on-line giornaliero (tramite whatsapp, messaggi, 
                    chiamate, mail).<br></br>
                    <b>Costo totale: € 100.</b>
                </div>
                <div className="pricesDescription">
                <div className="percorsoTitle">2. VISITA DI CONTROLLO</div>
                    Visita fissata in base alle necessità e/o a seconda dell’obiettivo 
                    fissato; qui si valuta la compliance, si risolvono eventuali dubbi o domande insorte, si 
                    apportano modifiche al piano alimentare in base a esigenze. Si valutano, poi, gli obiettivi 
                    raggiunti e si ripete l’anamnesi antropocentrica e il calcolo della composizione corporea 
                    tramite BIVA.<br></br>
                    <b>Costo totale: € 40.</b><br></br>
                    <u>È possibile fare tutte le visite di controllo on-line!</u>
                </div>
                <div className="pricesDescription">
                <div className="percorsoTitle">3. PERCORSO TRIMESTRALE</div>
                    Costituito da una prima visita (vedi percorso singolo) e 3 visite 
                    di controllo (vedi visita di controllo).<br></br>
                    <u>È inoltre compreso:</u> aggiornamento e/o ricalcolo schema 
                    dietetico in qualunque momento, check settimanale del fisico (tramite foto frontale, laterale) e 
                    aggiornamento sul peso, supporto on-line giornaliero (tramite whatsapp, messaggi, mail o 
                    chiamate) per qualsiasi piccolo dubbio o domanda che potrebbe sorgere, calcolo di un menu 
                    settimanale su richiesta, calcolo di pasti in base a ciò che è disponibili in occasioni e/o eventi 
                    speciali.<br></br>
                    <b>Costo totale: € 230.</b>
                </div>
                <div className="pricesDescription">
                <div className="percorsoTitle">4. PERCORSO SEMESTRALE</div>
                    Costituito da una prima visita (vedi percorso singolo) e 6 visite 
                    di controllo (vedi visita di controllo). È un percorso più lungo e strutturato permette, essendo 
                    seguiti da vicino e per un tempo prolungato, di ottenere risultati duraturi e soddisfacenti.<br></br> 
                    <u>È inoltre compreso:</u> aggiornamento e/o ricalcolo schema dietetico in qualunque momento, 
                    check settimanale del fisico (tramite foto frontale, laterale) e aggiornamento sul peso, 
                    supporto on-line giornaliero (tramite whatsapp, messaggi, mail o chiamate) per qualsiasi 
                    piccolo dubbio o domanda che potrebbe sorgere, calcolo di un menu settimanale su richiesta, 
                    calcolo di pasti in base a ciò che è disponibili in occasioni e/o eventi speciali.<br></br>
                    <b>Costo totale: € 430.</b>
                </div>
                <div className="pricesDescription">
                <div className="percorsoTitle">5.  PERCORSO ANNUALE</div>
                    Costituito da una prima visita (vedi percorso singolo) e 12 visite di 
                    controllo (vedi visita di controllo). Percorso in assoluto più completo, qui si instituisce un 
                    rapporto di fiducia e serenità con il professionista, c’è il tempo e la possibilità di prima 
                    ottenere i risultati voluti e soprattutto imparare a mantenerli nel modo corretto, ottenendo una 
                    educazione alimentare sicuramente più completa.<br></br>
                    <u>È inoltre compreso:</u> aggiornamento e/o 
                    ricalcolo schema dietetico in qualunque momento, check settimanale del fisico (tramite foto 
                    frontale, laterale) e aggiornamento sul peso, supporto on-line giornaliero (tramite whatsapp, 
                    messaggi, mail o chiamate) per qualsiasi piccolo dubbio o domanda che potrebbe sorgere, 
                    calcolo di un menu settimanale su richiesta, calcolo di pasti in base a ciò che è disponibili in 
                    occasioni e/o eventi speciali.<br></br>
                    <b>Costo totale: € 670.</b> 
                </div>
                <div className="pricesDescription">
                <div className="percorsoTitle">6. PERCORSO DI EDUCAZIONE ALIMENTARE</div>
                    Costituito da una prima visita (vedi percorso 
                    singolo) a cui si aggiunge una attenzione peculiare all’insegnamento delle buone norme per 
                    una sana alimentazione. Questo percorso è adatto a tutti coloro che non hanno nessun tipo di 
                    problematica, ma vogliono “imparare a mangiare” nel modo corretto, a saper accostare i giusti 
                    alimenti nei pasti e avere una alimentazione bilanciata e sana.<br></br>
                    <b>Costo totale: €110.</b>
                </div>
                <div className="pricesDescription">
                <div className="percorsoTitle">7. ANALISI DELLA COMPOSIZIONE CORPOREA</div>
                    Visita che comprende una accurata 
                    anamnesi antropometrica, con misurazione delle circonferenze corporee, analisi della 
                    composizione corporea tramite Bioimpedenziometria e interpretazione e spiegazione dei 
                    risultati emersi.<br></br>
                    <b>Costo totale: €50.</b><br></br><br></br>
                    Se, dopo aver fatto questa visita, si vuole intraprendere 
                    uno dei percorsi sopracitati sarà applicato uno sconto di €50.
                </div>
                <div className="pricesDescription">
                    <br></br>*Per tutti i percorsi da trimestrale ad annuale è possibile rateizzare la somma totale! 
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}