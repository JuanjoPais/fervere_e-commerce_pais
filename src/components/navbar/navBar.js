import "./navBar.css";
import CartWidget from "../cartWidget/cartWidget";
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="nav">
			<img className="logo" src={`./images/logo.png`} alt="logoFervere" />
			<ul>
				<li className="linkNav">
					<NavLink to={"/"} className="btnNav">
						Home
					</NavLink>
				</li>

				<li className="linkNav">
					<NavLink to={"/categoria/botellas"} className="btnNav">
						Botellas
					</NavLink>
				</li>
				<li className="linkNav">
					<NavLink to={"/categoria/growler"} className="btnNav">
						Growlers
					</NavLink>
				</li>
				<li className="linkNav">
					<NavLink to={"/categoria/merchandising"} className="btnNav">
						Merchandising
					</NavLink>
				</li>
				<li className="linkNav">
					<NavLink className="btnNav">Contacto</NavLink>
				</li>
				<CartWidget />
			</ul>
		</nav>
	);
};

export default Navbar;
