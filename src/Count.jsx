import React,{useState} from "react";
const Counter = () => {
    const [counter, setCounter] = useState(0)
    function incrementar (){
        setCounter(counter + 1)
    }
    function decrementar (){
        counter > 0 && setCounter(counter - 1)
    }
    return(
        <div>
            <button onClick={decrementar}> - </button>
            <button onClick={incrementar}> + </button>
            <p>El valor del contador es {counter}</p>
        </div>
    )
}
export default Counter