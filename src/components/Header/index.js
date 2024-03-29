import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <>
        <div className="banner">
        <img src={logo} alt="logo Kasa" className='logo'></img>
        <nav>
            <Link className="link link__home" to="/">Accueil</Link>
            <Link className="link link__about" to="/about">A Propos</Link>
        </nav>
        </div>
        </>
    )
}