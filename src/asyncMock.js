const items = [
	{
		id: "1",
		nombre: "IPA",
		descripcion: "Cerveza amarga, lupulada.",
		stock: "30",
		categoria: "botellas",
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXoST51eKD7CJrntxOdY1SEiafnxfCq99Zw&usqp=CAU",
	},
	{
		id: "2",
		nombre: "Porter",
		descripcion: "Cerveza oscura, fuerte.",
		stock: "20",
		categoria: "growler",
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNC6o2Pxqd0Rlu5Vr1DfTRndhrOiKIwD9gg&usqp=CAU",
	},
	{
		id: "3",
		nombre: "Gorra",
		descripcion: "Gorra trucker",
		stock: "20",
		categoria: "merchandising",
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJukoWo7M8bbXH-tDGz8Dw2P8djQI3xfdUb-6kGOLq5VzgjAXlDp30tpOnn5TK2ymYs8&usqp=CAU",
	},
];

export const getItems = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(items);
		}, 2000);
	});
};
