import "./App.css";
import Navbar from "./components/navbar/navBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//esta funcion va aca?
//como traigo una variable suelta? Para meter un reset y chequear el stock

function App() {
	return (
		<div className="App">
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
		</div>
	);
}

export default App;
