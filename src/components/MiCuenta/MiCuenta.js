import {useContext} from "react";
import {AuthContext} from "../../Contexts/AuthContext/AuthContext";
import InputNavbar from "../InputNavbar/InputNavbar";

const MiCuenta = () => {
	const {user} = useContext(AuthContext);

	return (
		<div>
			{<h1>Bienvenid@ {user}</h1>}
			<div>
				<InputNavbar />
			</div>
		</div>
	);
};

export default MiCuenta;
