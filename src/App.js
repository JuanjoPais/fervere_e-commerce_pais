
import './App.css';

import Navbar from './components/navbar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>      
      <ItemListContainer  greeting="Tentate con nuestras birras" /> 
    </div>
  );
}

export default App;
