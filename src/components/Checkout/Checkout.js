import {useContext, useState} from "react";
import {alCarritoContext} from "../../Contexts/CartContext/CartContext";
import {
	collection,
	getDocs,
	query,
	where,
	documentId,
	writeBatch,
	addDoc,
} from "firebase/firestore";
import {db} from "../../servicios/firebase/firebaseConfig";
import {InfinitySpin} from "react-loader-spinner";
import {Link, navigate, useNavigate} from "react-router-dom";
import swal from "sweetalert";

const Checkout = () => {
	const {alCarrito, getTotal, clearAll} = useContext(alCarritoContext);
	const [loading, setloading] = useState(false);
	const navigate = useNavigate();

	const handleCreateOrder = async () => {
		setloading(true);

		try {
			const objOrder = {
				buyer: {
					name: "Juan Jose Pais",
					email: "juanjo_pais@hotmail.com",
					phone: "144444444",
				},
				items: alCarrito,
				total: getTotal(),
			};

			const batch = writeBatch(db);

			const ids = alCarrito.map((prod) => prod.id);
			const productsRef = query(
				collection(db, "products"),
				where(documentId(), "in", ids)
			);
			const itemsAgregadosDesdeDB = await getDocs(productsRef);

			const {docs} = itemsAgregadosDesdeDB;

			const outOfStock = [];

			docs.forEach((doc) => {
				const dataDoc = doc.data();
				const stockDb = dataDoc.stock;
				const itemsAgregadosAlCarrito = alCarrito.find(
					(prod) => prod.id === doc.id
				);
				const itemCantidad = itemsAgregadosAlCarrito?.cantidad;

				if (stockDb >= itemCantidad) {
					batch.update(doc.ref, {stock: stockDb - itemCantidad});
				} else {
					outOfStock.push({id: doc.id, ...dataDoc});
				}
			});

			if (outOfStock.length === 0) {
				await batch.commit();

				const orderRef = collection(db, "orders");

				const orderAdded = await addDoc(orderRef, objOrder);

				//ver de mandar este id por mail

				console.log(orderAdded.id);

				clearAll();
				swal(
					"Tu número de order llegará a tu correo. Serás redirigido al Home en 5 segundos. Muchas gracias por tu compra =)"
				);
				setTimeout(() => {
					navigate("/");
				}, 5000);
			} else {
				swal("No hay stock de ese producto");
			}
		} catch (error) {
			swal("no se puede asegurar el stock de este pedido");
		} finally {
			setloading(false);
		}
	};

	if (loading) {
		return (
			<div style={{display: "flex", justifyContent: "center"}}>
				<InfinitySpin width="300" color="black" />
				<h2>Generando orden</h2>
			</div>
		);
	}

	return (
		<div>
			<h1>Checkout</h1>

			<button onClick={handleCreateOrder}>Confirmar Orden</button>
			<Link to={"/"}>Volver a Home</Link>
		</div>
	);
};

export default Checkout;
