import {useContext, useState} from "react";
import {AuthContext} from "../../Contexts/AuthContext/AuthContext";
import {Link} from "react-router-dom";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const {user, login, logout} = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		login({username, password});
	};

	if (user) {
		return (
			<div>
				<h1>Logout</h1>
				<button onClick={() => logout()}>Logout</button>

				<Link to={"/"}>Ir al Home</Link>
			</div>
		);
	}

	return (
		<div>
			<h1>Iniciá sesión</h1>
			<form onSubmit={handleSubmit}>
				Username:
				<input
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				></input>
				Password:
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				></input>
				<button type="submit">LogIn</button>
			</form>
		</div>
	);
};

export default Login;
