const items = [
    {id : "1",
    nombre : "IPA",
    descripcion : "Cerveza amarga, lupulada.",
    stock : "30",
    url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXoST51eKD7CJrntxOdY1SEiafnxfCq99Zw&usqp=CAU"
    },
    {id : "2",
    nombre : "Porter",
    descripcion : "Cerveza oscura, fuerte.",
    stock : "20",
    url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXoST51eKD7CJrntxOdY1SEiafnxfCq99Zw&usqp=CAU"
    }
];
  
 export const getItems = () =>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(items)},2000)
    },)
}