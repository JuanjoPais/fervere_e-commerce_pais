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

	const getCantidad = () => {
		let acc = 0;
		alCarrito.forEach((item) => {
			acc += item.cantidad;
		});
		return acc;
	};

	const getTotal = () => {
		let acc = 0;
		alCarrito.forEach((item) => {
			acc += item.cantidad * item.precio;
		});
		return acc;
	};

	const removeItem = (id) => {
		const carritoActualizado = alCarrito.filter((item) => item.id !== id);
		setAlCarrito(carritoActualizado);
	};

	const clearAll = () => {
		setAlCarrito([]);
	};

	return (
		<alCarritoContext.Provider
			value={{
				alCarrito,
				agregarACarrito,
				estaEnCarrito,
				getCantidad,
				getTotal,
				removeItem,
				clearAll,
			}}
		>
			{children}
		</alCarritoContext.Provider>
	);
};
