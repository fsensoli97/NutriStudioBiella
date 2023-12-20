import Header from '../Header/Header';
import studioPic from '../../gallery/studio.jfif';
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
            <Footer></Footer>
        </>
    );
}