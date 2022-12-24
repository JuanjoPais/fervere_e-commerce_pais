import {useState, createContext} from "react";

export const alCarritoContext = createContext();

export const CartProvider = ({children}) => {
	const [alCarrito, setAlCarrito] = useState([]);

	const agregarACarrito = (itemAAgregar) => {
		if (!estaEnCarrito(itemAAgregar.id)) {
			setAlCarrito([...alCarrito, itemAAgregar]);
		}
	};

	const estaEnCarrito = (id) => {
		return alCarrito.some((items) => items.id === id);
	};

	return (
		<alCarritoContext.Provider value={{alCarrito, agregarACarrito}}>
			{children}
		</alCarritoContext.Provider>
	);
};
