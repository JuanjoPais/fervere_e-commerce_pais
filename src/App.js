import "./App.css";
import Navbar from "./components/navbar/navBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Carrito from "./components/Carrito/Carrito";
import {CartProvider} from "./Contexts/CartContext/CartContext";
import Login from "./components/Login/Login";
import {AuthProvider} from "./Contexts/AuthContext/AuthContext";

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<CartProvider>
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
							<Route path="/login" element={<Login />} />
						</Routes>
					</BrowserRouter>
				</CartProvider>
			</AuthProvider>
		</div>
	);
}

export default App;
