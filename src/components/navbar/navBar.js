import "./navBar.css";
import CartWidget from "../cartWidget/cartWidget";

const Navbar = () => {
	return (
		<nav className="nav">
			<img className="logo" src={`./images/logo.png`} alt="logoFervere" />
			<ul>
				<li className="linkNav">
					<button className="btnNav">Novedades</button>
				</li>
				<li className="linkNav">
					<button className="btnNav">Botellas</button>
				</li>
				<li className="linkNav">
					<button className="btnNav">Growlers</button>
				</li>
				<li className="linkNav">
					<button className="btnNav">Merchandising</button>
				</li>
				<li className="linkNav">
					<button className="btnNav">Contacto</button>
				</li>
				<CartWidget />
			</ul>
		</nav>
	);
};

export default Navbar;
