import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import './Header.css';

export default function Header() {
    return (
        <>
            <Logo></Logo>
            <div className='headerTitle'>
                <div className='headerTitleText'>Dott.ssa Laetitia Bof</div>
                <div className='headerTitleText'>Dietista Nutrizionista</div>
            </div>
            <Navigation></Navigation>
        </>
    );
}