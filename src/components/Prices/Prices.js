import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Prices.css'

export default function Prices() {
    return (
        <>
            <Header></Header>
            <div className="pricesContainer">
                <div className="pricesTitle">
                    Tipologie di percorsi:
                </div>
                <div className="pricesDescription">
                    1. Prima visita: Valutazione stato nutrizionale, individuazione obiettivi fisico-alimentari,
                    stesura di un programma nutrizionale ed attitudinale ad hoc (€100).
                </div>
                <div className="pricesDescription">
                    2. Visita di controllo: Valutazione progressi dello stato nutrizionale, aggiornamento del programma
                    nutrizionale in base ai risultati raggiunti, valutazione di nuovi obiettivi (€35).
                </div>
                <div className="pricesDescription">
                    3. Analisi composizione corporea: Esami antropometrici, ..., spiegazione dei risultati (€50).
                </div>
                <div className="pricesDescription">
                    4. Percorso 3 mesi: Prima visita + 3 visite di controllo. Supporto on-line (Whatsapp, SMS, email),
                    aggiornamento e/o ricalcolo dello schema dietetico per tutto il percorso (€230).
                </div>
                <div className="pricesDescription">
                    5. Percorso 6 mesi: Prima visita + 6 visite di controllo (€400).
                </div>
                <div className="pricesDescription">
                    6. Percorso annuale: Prima visita + 12 visite di controllo (€600).
                </div>
                <div className="pricesDescription">
                    7. Percorso annuale: Prima visita + Educazione alimentare (€100).
                </div>
                <div className="pricesDescription">
                    Si offre la possibilità di effettuare controlli on-line.<br></br>
                    I pagamenti per i percorsi sono rateizzabili.
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}