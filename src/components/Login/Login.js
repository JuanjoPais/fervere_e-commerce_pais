import {useContext, useState} from "react";
import {AuthContext} from "../../Contexts/AuthContext/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import "./login.css";
import Button from "react-bootstrap/Button";
import swal from "sweetalert";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const {user, login, logout} = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/");
		swal({
			title: "Login exitoso!",
			button: false,
			icon: "success",
			timer: 1000,
		});

		login({username, password});
	};

	if (user) {
		return (
			<div className="contenedorLogout">
				<div className="botonesLogout">
					<Button variant="dark" onClick={() => logout()}>
						Logout
					</Button>

					<Link to={"/"}>
						<Button variant="dark">Ir al Home</Button>
					</Link>
				</div>
				<img
					className="imgBarney"
					src="https://p4.wallpaperbetter.com/wallpaper/173/180/16/the-simpsons-barney-gumble-wallpaper-preview.jpg"
					alt="foto de Bayney Gomez"
				></img>
			</div>
		);
	}

	return (
		<div className="contenedorlogin">
			<div>
				<img
					src={process.env.PUBLIC_URL + "/images/barney.png"}
					alt="fotoBarney"
					className="fotoLogin"
				></img>
			</div>
			<div>
				<h2>Iniciá sesión</h2>
				<form onSubmit={handleSubmit} className="divForm">
					Usuario:
					<input
						value={username}
						required
						onChange={(e) => setUsername(e.target.value)}
					></input>
					Password:
					<input
						value={password}
						required
						onChange={(e) => setPassword(e.target.value)}
					></input>
					<Button variant="dark" type="submit">
						LogIn
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Login;
