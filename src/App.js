import "./App.css";
import Navbar from "./components/navbar/navBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import {createContext} from "react";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const favoritosContext = createContext();

function App() {
	const favoritos = [];
	return (
		<div className="App">
			<favoritosContext.Provider value={favoritos}>
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
					</Routes>
				</BrowserRouter>
			</favoritosContext.Provider>
		</div>
	);
}

export default App;
