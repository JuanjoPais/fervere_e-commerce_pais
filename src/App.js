
import './App.css';
import Navbar from './components/navbar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemCount from './components/itemCount/ItemCount';

//esta funcion va aca?
//como traigo una variable suelta? Para meter un reset y chequear el stock
const handleOnAdd = (cantidad)=>{  
  alert(`Se agregaron al carrito` + cantidad)
}


function App() {
  return (
    <div className="App">
      <Navbar/>      
      <ItemListContainer  greeting="Tentate con nuestras birras" /> 
      <div className='contenedorCantidadItem'>
       
        <ItemCount initial={0} stock={10} onAdd={handleOnAdd}/>
        <ItemCount initial={0} stock={10} onAdd={handleOnAdd}/>
        <ItemCount initial={0} stock={10} onAdd={handleOnAdd}/>
        <ItemCount initial={0} stock={10} onAdd={handleOnAdd}/>
       
      </div>      
    
    </div>
  );
}

export default App;
