import "./navBar.css"


const Navbar = () =>{
    return(
        <nav className="nav">
        <img className="logo" src={`./images/logo.png`} alt="logoFervere"/>
        <ul>
            <li className="linkNav"><a>Novedades</a></li>
            <li className="linkNav">Botellas</li>
            <li className="linkNav">Growlers</li>
            <li className="linkNav">Merchandising</li>
            <li className="linkNav">Contacto</li>
        </ul>          
        </nav>
    )
}

export default Navbar