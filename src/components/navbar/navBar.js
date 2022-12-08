import "./navBar.css";
import CartWidget from "../cartWidget/cartWidget";
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="nav">
			<NavLink to={"/"}>
				<img
					className="logo"
					src={process.env.PUBLIC_URL + "/images/logo.png"}
					alt="logoFervere"
				/>
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
						to={"/categoria/Botellas"}
						className={({isActive}) => (isActive ? "btnNavActive" : "btnNav")}
					>
						Botellas
					</NavLink>
				</li>
				<li className="linkNav">
					<NavLink
						to={"/categoria/Growler"}
						className={({isActive}) => (isActive ? "btnNavActive" : "btnNav")}
					>
						Growlers
					</NavLink>
				</li>
				<li className="linkNav">
					<NavLink
						to={"/categoria/Merchandising"}
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
