import "./navBar.css";
import CartWidget from "../cartWidget/cartWidget";
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../Contexts/AuthContext/AuthContext";
import {useContext} from "react";
import NavbarBoostrap from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navbar = () => {
	const {user} = useContext(AuthContext);
	return (
		<>
			<NavLink to={"/"}>
				<div className="containerLogo">
					<img
						className="logo"
						src={process.env.PUBLIC_URL + "/images/logo.png"}
						alt="logoFervere"
					/>
				</div>
			</NavLink>
			<NavbarBoostrap className="nav" collapseOnSelect expand="md">
				<NavbarBoostrap.Toggle
					className="toggle"
					aria-controls="responsive-navbar-nav"
				/>

				<NavbarBoostrap.Collapse className="collapseContainer">
					<Nav className="componentNav">
						<NavLink
							to={"/"}
							className={({isActive}) => (isActive ? "btnNavActive" : "btnNav")}
						>
							Home
						</NavLink>

						<NavLink
							to={"/categoria/Botellas"}
							className={({isActive}) => (isActive ? "btnNavActive" : "btnNav")}
						>
							Botellas
						</NavLink>

						<NavLink
							to={"/categoria/Growler"}
							className={({isActive}) => (isActive ? "btnNavActive" : "btnNav")}
						>
							Growlers
						</NavLink>

						<NavLink
							to={"/categoria/Merchandising"}
							className={({isActive}) => (isActive ? "btnNavActive" : "btnNav")}
						>
							Merchandising
						</NavLink>

						{user ? (
							<NavLink
								to={"/login"}
								className={({isActive}) =>
									isActive ? "btnNavActive" : "btnNav"
								}
							>
								Logout
							</NavLink>
						) : (
							<NavLink
								to={"/login"}
								className={({isActive}) =>
									isActive ? "btnNavActive" : "btnNav"
								}
							>
								Login
							</NavLink>
						)}

						{user && (
							<NavLink
								to={"/user"}
								className={({isActive}) =>
									isActive ? "btnNavActive" : "btnNav"
								}
							>
								Mi cuenta
							</NavLink>
						)}
					</Nav>
				</NavbarBoostrap.Collapse>
			</NavbarBoostrap>
			{user && (
				<NavLink to={"/carrito"}>
					<CartWidget />
				</NavLink>
			)}
		</>
	);
};

export default Navbar;
