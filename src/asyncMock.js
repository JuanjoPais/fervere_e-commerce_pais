const items = [
	{
		id: "1",
		nombre: "IPA",
		descripcion: "Cerveza amarga, lupulada.",
		stock: "30",
		precio: "750",
		categoria: "Botellas",
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXoST51eKD7CJrntxOdY1SEiafnxfCq99Zw&usqp=CAU",
	},
	{
		id: "2",
		nombre: "Porter",
		descripcion: "Cerveza oscura, fuerte.",
		stock: "20",
		precio: "1500",
		categoria: "Growler",
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNC6o2Pxqd0Rlu5Vr1DfTRndhrOiKIwD9gg&usqp=CAU",
	},
	{
		id: "3",
		nombre: "Gorra",
		descripcion: "Gorra trucker",
		stock: "20",
		precio: "1000",
		categoria: "Merchandising",
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJukoWo7M8bbXH-tDGz8Dw2P8djQI3xfdUb-6kGOLq5VzgjAXlDp30tpOnn5TK2ymYs8&usqp=CAU",
	},
	{
		id: "4",
		nombre: "Gorra",
		descripcion: "Gorra trucker",
		stock: "20",
		categoria: "Merchandising",
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJukoWo7M8bbXH-tDGz8Dw2P8djQI3xfdUb-6kGOLq5VzgjAXlDp30tpOnn5TK2ymYs8&usqp=CAU",
	},
	{
		id: "5",
		nombre: "Gorra",
		descripcion: "Gorra trucker",
		stock: "20",
		categoria: "Merchandising",
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJukoWo7M8bbXH-tDGz8Dw2P8djQI3xfdUb-6kGOLq5VzgjAXlDp30tpOnn5TK2ymYs8&usqp=CAU",
	},
	{
		id: "6",
		nombre: "Gorra",
		descripcion: "Gorra trucker",
		stock: "20",
		categoria: "Merchandising",
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJukoWo7M8bbXH-tDGz8Dw2P8djQI3xfdUb-6kGOLq5VzgjAXlDp30tpOnn5TK2ymYs8&usqp=CAU",
	},
	{
		id: "7",
		nombre: "Gorra",
		descripcion: "Gorra trucker",
		stock: "20",
		categoria: "Merchandising",
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJukoWo7M8bbXH-tDGz8Dw2P8djQI3xfdUb-6kGOLq5VzgjAXlDp30tpOnn5TK2ymYs8&usqp=CAU",
	},
];

export const getItems = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(items);
		}, 1000);
	});
};

export const getItemsByCategoria = (categoriaId) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(items.filter((item) => item.categoria === categoriaId));
		}, 1000);
	});
};

export const getItemByID = (id) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(items.find((item) => item.id === id));
		}, 1000);
	});
};
