import "./App.css";
import Navbar from "./components/navbar/navBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import {createContext, useState} from "react";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Carrito from "./components/Carrito/Carrito";

export const alCarritoContext = createContext();

function App() {
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
		<div className="App">
			<alCarritoContext.Provider value={{alCarrito, agregarACarrito}}>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route
							path="/"
							element={
								<ItemListContainer greeting="Probá nuestras cervezas artesanales" />
							}
						/>
						<Route
							path="/categoria/:categoriaId"
							element={
								<ItemListContainer greeting="Probá nuestras cervezas artesanales" />
							}
						/>
						<Route path="/item/:itemId" element={<ItemDetailContainer />} />
						<Route path="/carrito" element={<Carrito />} />
					</Routes>
				</BrowserRouter>
			</alCarritoContext.Provider>
		</div>
	);
}

export default App;
