import logo from '../../logo.png'
import './Logo.css'

export default function Logo() {
    return (
        <>
            <div className='logoContainer'>
                <img className='logo' src={logo} alt='logo'></img>
            </div>
        </>
    );
}