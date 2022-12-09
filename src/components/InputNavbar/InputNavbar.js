import {useState} from "react";
import "./InputNavbar.css";

const InputNavbar = () => {
	const [input, setInput] = useState("");

	const handleOnKeyDown = (e) => {
		if (e.keyCode === 32) {
			e.preventDefault();
		} else {
			setInput(e.target.value);
		}
	};

	return (
		<div className="input">
			<input onKeyDown={handleOnKeyDown} placeholder="Qué querés tomar hoy?" />
			<p>Tu búsqueda es {input}</p>
			<button>Buscar</button>
		</div>
	);
};

export default InputNavbar;
