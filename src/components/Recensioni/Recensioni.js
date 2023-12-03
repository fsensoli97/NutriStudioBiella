import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Recensione from "../Recensione/Recensione";
import './Recensioni.css'

export default function Recensioni() {
    return (
        <>
            <Header></Header>
            <div className="recensioniContainer">
                <Recensione user="Federico Sensoli" rating={5} msg="Cordiale e professionale!"></Recensione>
                <Recensione user="Gianluca Adamoli" rating={5} msg="Grazie a Laetitia ho raggiunto i miei obiettivi fisici. Consiglio a tutti."></Recensione>
                <Recensione user="Anna Ricci" rating={4} msg="Grazie al supporto on-line il percorso annuale è stato ancora più efficace."></Recensione>
                <Recensione user="Marco Bigini" rating={5} msg="Ambiente molto curato e pulito."></Recensione>
            </div>
            <Footer></Footer>
        </>
    );
}