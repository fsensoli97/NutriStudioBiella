import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation';
import studioPic from '../../gallery/studio.jfif';
import Footer from '../Footer/Footer';
import './Home.css'

export default function Home() {
    return (
        <>
            <Logo></Logo>
            <div className='homeTitle'>
                <div className='homeTitleText'>Dott.ssa Laetitia Bof</div>
                <div className='homeTitleText'>Dietista Nutrizionista</div>
            </div>
            <Navigation></Navigation>

            <div className='studioPic'>
                <img className='studio' src={studioPic} alt='studio'></img>
            </div>
            <div className='studioDescription'>
                A lot of text...
            </div>
            <Footer></Footer>
        </>
    );
}