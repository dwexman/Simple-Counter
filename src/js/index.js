//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import {useState, useEffect, useRef} from "react";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import Home from "./component/home.jsx";

function SimpleCounter() {
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [counter3, setCounter3] = useState(0)
    const [counter4, setCounter4] = useState(0)
    const myRef = useRef(null)
    useEffect(()=>{myRef.current = setInterval(()=> innitCounter(),1000);return ()=>clearInterval(myRef.current)},[counter])
    
    function innitCounter (){
        const number = counter +1 
    
        if (number>9) {
            setCounter(0)
            const number2 = counter2 +1
            setCounter2(number2)
        }
        else {
            setCounter(number)
        }

        if (counter2>9) {
            setCounter2(0)
            const number3 = counter3 +1
            setCounter3(number3)
        }

        if (counter3>9) {
            setCounter3(0)
            const number4 = counter4 +1
            setCounter4(number4)
        }
        
        

        console.log(number)
    

    }

   
    
    return (<div className="CajaGrande">
        <div className="IconoReloj">
            <i class="far fa-clock"></i>
        </div>
        <div className="PrimerNumero">{counter4}</div>
        <div className="SegundoNumero">{counter3}</div>
        <div className="TercerNumero">{counter2}</div>
        <div className="CuartoNumero">{counter}</div>
     </div>);
}







ReactDOM.render(<SimpleCounter uno="1" dos="2" tres="3" cuatro="4" />, document.querySelector("#app")); 
