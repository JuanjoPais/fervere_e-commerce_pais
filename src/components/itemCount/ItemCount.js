import "./ItemCount.css"
import { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) =>{    
    const [count, setCount] = useState(initial)
    const increment =()=>{   
        if(count<stock)  
        setCount(count +1)
    }
   
    const decrement = () =>{
        if(count>=1)
        setCount(count -1)
    }

    return (
        <div>
            <div className="cantidad">           
                <img className="signo" src={"./images/minus.png"} alt="simbolo resta" onClick={()=>{decrement()}}/>
                <h4>{count}</h4>                    
                <img className="signo" src={"./images/add.png"} alt="simbolo suma" onClick={()=>{increment()}}/>
            </div>             
            <button onClick={()=>{onAdd(count)}}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount