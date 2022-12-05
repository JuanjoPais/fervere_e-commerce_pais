import "./navBar.css";
import CartWidget from "../cartWidget/cartWidget";
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="nav">
			<NavLink to={"/"}>
				<img className="logo" src={`./images/logo.png`} alt="logoFervere" />
			</NavLink>

			<ul>
				<li className="linkNav">
					<NavLink
						to={"/"}
						className={({isActive}) => (isActive ? "btnNavActive" : "btnNav")}
					>
						Home
					</NavLink>
				</li>

				<li className="linkNav">
					<NavLink
						to={"/categoria/botellas"}
						className={({isActive}) => (isActive ? "btnNavActive" : "btnNav")}
					>
						Botellas
					</NavLink>
				</li>
				<li className="linkNav">
					<NavLink
						to={"/categoria/growler"}
						className={({isActive}) => (isActive ? "btnNavActive" : "btnNav")}
					>
						Growlers
					</NavLink>
				</li>
				<li className="linkNav">
					<NavLink
						to={"/categoria/merchandising"}
						className={({isActive}) => (isActive ? "btnNavActive" : "btnNav")}
					>
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
