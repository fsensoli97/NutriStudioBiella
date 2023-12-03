import Header from '../Header/Header';
import studioPic from '../../gallery/studio.jfif';
import Footer from '../Footer/Footer';
import './Home.css'

export default function Home() {
    return (
        <>
            <Header></Header>
            <div className='studioPic'>
                <img className='studio' src={studioPic} alt='studio'></img>
            </div>
            <div className='studioDescription'>
                studio description random text studio description random text
                studio description random text studio description random text
                studio description random text studio description random text
            </div>
            <Footer></Footer>
        </>
    );
}