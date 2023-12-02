import { Link } from 'react-router-dom';
import './Navigation.css'

export default function Navigation() {
    return (
        <>
            <div className='navigation'>
                <div className='navigationItem'><Link className="navLink" to="/" >Homepage</Link></div>
                <div className='navigationItem'><Link className="navLink" to="/about" >Mi presento</Link></div>
                <div className='navigationItem'><Link className="navLink" to="/tariffario" >Tariffario</Link></div>
                <div className='navigationItem'><Link className="navLink" to="/location" >Location</Link></div>
                <div className='navigationItem'><Link className="navLink" to="/recensioni" >Recensioni</Link></div>
            </div>
        </>
    );
}