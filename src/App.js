import "./App.css";
import Navbar from "./components/navbar/navBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Carrito from "./components/Carrito/Carrito";
import {CartProvider} from "./Contexts/CartContext/CartContext";
import Login from "./components/Login/Login";
import {AuthProvider} from "./Contexts/AuthContext/AuthContext";
import Checkout from "./components/Checkout/Checkout";

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
							<Route path="/Checkout" element={<Checkout />} />
						</Routes>
					</BrowserRouter>
				</CartProvider>
			</AuthProvider>
		</div>
	);
}

/*

editar con css
favoritos?
optimizacion
formulario
editar swal
mejorar botones
hacer un footer
modificar búsqueda de órdenes
hacer desaparecer el warning
subir a versel
recuadro para filtrar
*/

export default App;
