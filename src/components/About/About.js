import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import profilePic1 from '../../gallery/laetitiaPic1.jpg'
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
                    A lot of text... A lot of text... A lot of text... A lot of text... A lot of text...
                    A lot of text... A lot of text... A lot of text... A lot of text... A lot of text...
                </div>
            </div>
            <div className='aboutContainer'>
                <div className='aboutText'>
                    A lot of text... A lot of text... A lot of text... A lot of text... A lot of text...
                    A lot of text... A lot of text... A lot of text... A lot of text... A lot of text...
                </div>
                <div className='profilePic'>
                    <img className='profile' src={profilePic1} alt='profile'></img>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}