import { Link } from 'react-router-dom';
import './Navigation.css'

export default function Navigation() {
    return (
        <>
            <div className='navigation'>
                <div className='navigationRow'>
                    <div className='navigationItem'><Link className="navLink" to="/" >Home</Link></div>
                    <div className='navigationItem'><Link className="navLink" to="/about" >Mi presento</Link></div>
                    <div className='navigationItem'><Link className="navLink" to="/tariffario" >Tariffario</Link></div> 
                </div>
                <div className='navigationRow' style={{borderBottom: "solid 1px rgb(215, 215, 215)"}}>
                    <div className='navigationItem'><Link className="navLink" to="/location" >Location</Link></div>
                    <div className='navigationItem'><Link className="navLink" to="/recensioni" >Recensioni</Link></div>
                </div>
            </div>
        </>
    );
}